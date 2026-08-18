import {
	IExecuteFunctions,
	INode,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	JsonObject,
	NodeApiError,
	NodeConnectionTypes,
	NodeOperationError,
} from 'n8n-workflow';
import {
	branchFields,
	branchOperations,
	fileFields,
	fileOperations,
	instanceFields,
	instanceOperations,
	issueFields,
	issueOperations,
	organizationFields,
	organizationOperations,
	pullRequestFields,
	pullRequestOperations,
	releaseFields,
	releaseOperations,
	repositoryFields,
	repositoryOperations,
	userFields,
	userOperations,
	webhookFields,
	webhookOperations,
} from './descriptions';
import { GITEA_API_VERSION } from './registry';
import { MOCKS } from './mocks';
import { buildRequest } from './request';

/** axios/n8n 에러 객체의 흔한 위치들에서 API 응답 본문의 message 를 찾는다. */
function findApiMessage(error: unknown): string | undefined {
	const e = error as {
		response?: { data?: { message?: unknown }; body?: { message?: unknown } };
		cause?: { response?: { data?: { message?: unknown } } };
		context?: { data?: { message?: unknown } };
	};
	for (const candidate of [
		e?.response?.data?.message,
		e?.response?.body?.message,
		e?.cause?.response?.data?.message,
		e?.context?.data?.message,
	]) {
		if (typeof candidate === 'string' && candidate !== '') return candidate;
	}
	return undefined;
}

/**
 * Gitea 응답 본문의 message 를 NodeApiError.description 으로 살린다.
 * 에러를 그대로 던지면 n8n 이 상태코드 보일러플레이트("Authorization failed …")로
 * 메시지를 치환해 버려서, 401(토큰 미매칭)과 403(스코프 부족)처럼 원인이 다른
 * 에러가 UI 에서 구분되지 않는다.
 */
function enrichApiError(node: INode, error: unknown, itemIndex: number): Error {
	// 파라미터 검증 에러는 API 에러가 아니므로 그대로 통과
	if (error instanceof NodeOperationError) return error;

	const apiMessage = findApiMessage(error);
	if (error instanceof NodeApiError) {
		// NodeApiError 생성자는 이미 NodeApiError 인 인자를 그대로 반환하므로 직접 채운다
		if (apiMessage && !error.description) error.description = apiMessage;
		return error;
	}
	return new NodeApiError(node, error as JsonObject, {
		itemIndex,
		...(apiMessage ? { description: apiMessage } : {}),
	});
}

/**
 * Gitea API — programmatic node.
 *
 * 오퍼레이션 정의(descriptions/, registry.ts)는 공식 swagger 스펙에서
 * scripts/generate.mjs 로 생성된다. execute() 는 registry 기반의 generic
 * 실행기 하나로 모든 오퍼레이션을 처리한다. Gitea 버전 업데이트 시
 * `npm run fetch-spec <version> && npm run generate` 로 재생성.
 */
export class Gitea implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Gitea',
		name: 'gitea',
		icon: 'file:gitea.svg',
		group: ['transform'],
		version: 1,
		usableAsTool: true,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: `Interact with a Gitea instance (repositories, issues, pull requests, releases, and more). Generated from the official Gitea API spec v${GITEA_API_VERSION}. Turn on Mock Data to get sample responses without a credential.`,
		defaults: { name: 'Gitea' },
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		// Mock Data 가 꺼진 실 호출 시에만 credential 필요 (mock 모드는 credential 없이 동작)
		credentials: [
			{
				name: 'giteaApi',
				required: true,
				displayOptions: { show: { mockData: [false] } },
			},
		],
		properties: [
			{
				displayName: 'Mock Data',
				name: 'mockData',
				type: 'boolean',
				default: false,
				description:
					'Whether to return a sample response generated from the Gitea API spec instead of calling the API. No credential needed. Useful for building workflows before wiring a real instance.',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Branch', value: 'branch' },
					{ name: 'File', value: 'file' },
					{ name: 'Instance', value: 'instance' },
					{ name: 'Issue', value: 'issue' },
					{ name: 'Organization', value: 'organization' },
					{ name: 'Pull Request', value: 'pullRequest' },
					{ name: 'Release', value: 'release' },
					{ name: 'Repository', value: 'repository' },
					{ name: 'User', value: 'user' },
					{ name: 'Webhook', value: 'webhook' },
				],
				default: 'repository',
			},

			branchOperations,
			fileOperations,
			instanceOperations,
			issueOperations,
			organizationOperations,
			pullRequestOperations,
			releaseOperations,
			repositoryOperations,
			userOperations,
			webhookOperations,

			...branchFields,
			...fileFields,
			...instanceFields,
			...issueFields,
			...organizationFields,
			...pullRequestFields,
			...releaseFields,
			...repositoryFields,
			...userFields,
			...webhookFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const mockData = this.getNodeParameter('mockData', 0, false) as boolean;
		const baseUrl = mockData
			? ''
			: ((await this.getCredentials('giteaApi')).baseUrl as string).replace(/\/+$/, '');

		for (let i = 0; i < items.length; i++) {
			try {
				if (mockData) {
					const resource = this.getNodeParameter('resource', i) as string;
					const operation = this.getNodeParameter('operation', i) as string;
					const mock = MOCKS[`${resource}.${operation}`] ?? { success: true };
					const mockRows: unknown[] = Array.isArray(mock) ? mock : [mock];
					for (const row of mockRows) {
						returnData.push({
							json: row as INodeExecutionData['json'],
							pairedItem: { item: i },
						});
					}
					continue;
				}

				const { method, path, qs, body } = buildRequest(this, i);

				const response = await this.helpers.httpRequestWithAuthentication.call(this, 'giteaApi', {
					method,
					url: `${baseUrl}/api/v1${path}`,
					qs,
					body: Object.keys(body).length > 0 ? body : undefined,
					json: true,
				});

				const rows: unknown[] = Array.isArray(response) ? response : [response ?? { success: true }];
				for (const row of rows) {
					returnData.push({
						json: row as INodeExecutionData['json'],
						pairedItem: { item: i },
					});
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: error.message }, pairedItem: { item: i } });
					continue;
				}
				throw enrichApiError(this.getNode(), error, i);
			}
		}

		return [returnData];
	}
}
