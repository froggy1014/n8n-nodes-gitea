import { IDataObject, IExecuteFunctions, IHttpRequestMethods, NodeOperationError } from 'n8n-workflow';
import { REGISTRY, RegistryEntry } from './registry';

export interface GiteaRequestSpec {
	method: IHttpRequestMethods;
	path: string;
	qs: IDataObject;
	body: IDataObject;
}

/** JSON 필드 값 파싱: 문자열이면 parse, 이미 객체면 그대로. */
function parseJsonValue(ctx: IExecuteFunctions, i: number, name: string, raw: unknown): unknown {
	if (typeof raw !== 'string') return raw;
	const trimmed = raw.trim();
	if (trimmed === '') return undefined;
	try {
		return JSON.parse(trimmed);
	} catch (error) {
		throw new NodeOperationError(ctx.getNode(), `Parameter "${name}" is not valid JSON`, {
			itemIndex: i,
		});
	}
}

/** path 세그먼트 인코딩. filepath 처럼 슬래시를 포함하는 값은 슬래시를 보존한다. */
function encodePathValue(value: string): string {
	return encodeURIComponent(value).replace(/%2F/gi, '/');
}

/**
 * resource+operation 파라미터로부터 Gitea API 요청 스펙을 조립한다.
 * 오퍼레이션별 매핑은 전부 생성된 REGISTRY 가 담당하므로 여기는 완전히 generic.
 */
export function buildRequest(ctx: IExecuteFunctions, i: number): GiteaRequestSpec {
	const resource = ctx.getNodeParameter('resource', i) as string;
	const operation = ctx.getNodeParameter('operation', i) as string;
	const key = `${resource}.${operation}`;

	const entry: RegistryEntry | undefined = REGISTRY[key];
	if (!entry) {
		throw new NodeOperationError(ctx.getNode(), `Unknown operation: ${key}`, { itemIndex: i });
	}

	const queryColl = ctx.getNodeParameter('queryParameters', i, {}) as IDataObject;
	const bodyColl = ctx.getNodeParameter('additionalFields', i, {}) as IDataObject;

	let path = entry.path;
	const qs: IDataObject = {};
	const body: IDataObject = {};

	for (const p of entry.params) {
		let raw: unknown;
		if (p.required) {
			raw = ctx.getNodeParameter(p.param, i);
		} else {
			raw = p.in === 'query' ? queryColl[p.param] : bodyColl[p.param];
		}
		if (raw === undefined || raw === null || raw === '') continue;

		const value = p.json ? parseJsonValue(ctx, i, p.param, raw) : raw;
		if (value === undefined) continue;

		if (p.in === 'path') {
			path = path.replace(`{${p.api}}`, encodePathValue(String(value)));
		} else if (p.in === 'query') {
			qs[p.api] = value as IDataObject[string];
		} else {
			body[p.api] = value as IDataObject[string];
		}
	}

	return { method: entry.method as IHttpRequestMethods, path, qs, body };
}
