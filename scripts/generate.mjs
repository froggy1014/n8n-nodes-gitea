#!/usr/bin/env node
/**
 * Generates n8n node descriptions and the operation registry from the Gitea
 * swagger spec, filtered by scripts/allowlist.json.
 *
 * Outputs (all overwritten, never hand-edit):
 *   nodes/Gitea/descriptions/<Resource>.ts
 *   nodes/Gitea/descriptions/index.ts
 *   nodes/Gitea/registry.ts
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const spec = JSON.parse(readFileSync(join(here, 'spec', 'swagger.json'), 'utf8'));
const allowlist = JSON.parse(readFileSync(join(here, 'allowlist.json'), 'utf8'));
const giteaVersion = JSON.parse(readFileSync(join(here, 'spec', 'gitea-version.json'), 'utf8')).version;

const HEADER = `// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v${giteaVersion} (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
`;

// ---------- spec helpers ----------

/** Index all operations by operationId. */
const opsById = {};
for (const [path, methods] of Object.entries(spec.paths)) {
	const pathParams = methods.parameters ?? [];
	for (const [method, op] of Object.entries(methods)) {
		if (!['get', 'post', 'put', 'patch', 'delete'].includes(method)) continue;
		opsById[op.operationId] = { method: method.toUpperCase(), path, op, pathParams };
	}
}

function resolveRef(ref) {
	const def = spec.definitions[ref.replace('#/definitions/', '')];
	if (!def) throw new Error(`Unresolvable $ref: ${ref}`);
	return def;
}

function humanize(name) {
	return name
		.replace(/[_-]/g, ' ')
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.split(' ')
		.filter(Boolean)
		.map((w) => w[0].toUpperCase() + w.slice(1))
		.join(' ')
		.replace(/\bId\b/g, 'ID')
		.replace(/\bUrl\b/g, 'URL')
		.replace(/\bApi\b/g, 'API')
		.replace(/\bSha\b/g, 'SHA');
}

function cleanDescription(text) {
	if (!text) return '';
	return text.replace(/\s+/g, ' ').trim();
}

/** swagger primitive type/enum → n8n property fragments */
function toN8nType(schema) {
	// $ref or inline object without an explicit type → raw JSON field
	if (schema.$ref || (!schema.type && schema.properties)) {
		return { type: 'json', default: '{}', json: true };
	}
	if (schema.enum) {
		return {
			type: 'options',
			options: schema.enum.map((v) => ({ name: humanize(String(v)), value: v })),
			default: schema.default ?? schema.enum[0],
		};
	}
	switch (schema.type) {
		case 'integer':
		case 'number':
			return { type: 'number', default: schema.default ?? 0 };
		case 'boolean':
			return { type: 'boolean', default: schema.default ?? false };
		case 'array':
		case 'object':
			// Exposed as raw JSON in the UI; parsed by the executor.
			return { type: 'json', default: schema.type === 'array' ? '[]' : '{}', json: true };
		default:
			return { type: 'string', default: schema.default ?? '' };
	}
}

/**
 * Flatten one operation's parameters into a uniform list:
 * { api, in: path|query|body, required, schema, description }
 */
function collectParams(entry) {
	const merged = [...entry.pathParams, ...(entry.op.parameters ?? [])];
	const out = [];
	for (const p of merged) {
		if (p.in === 'path' || p.in === 'query') {
			out.push({
				api: p.name,
				in: p.in,
				required: !!p.required || p.in === 'path',
				schema: p,
				description: cleanDescription(p.description),
			});
		} else if (p.in === 'body') {
			let schema = p.schema ?? {};
			if (schema.$ref) schema = resolveRef(schema.$ref);
			const requiredProps = new Set(schema.required ?? []);
			for (const [name, prop] of Object.entries(schema.properties ?? {})) {
				if (prop.readOnly) continue;
				out.push({
					api: name,
					in: 'body',
					required: requiredProps.has(name),
					schema: prop,
					description: cleanDescription(prop.description),
				});
			}
		}
	}
	return out;
}

// ---------- n8n property builders ----------

/** Emit a JS object literal (2-space nested, tab base indent handled by caller). */
function emit(obj, indent) {
	const pad = '\t'.repeat(indent);
	const padIn = '\t'.repeat(indent + 1);
	if (Array.isArray(obj)) {
		if (obj.length === 0) return '[]';
		return `[\n${obj.map((v) => `${padIn}${emit(v, indent + 1)}`).join(',\n')},\n${pad}]`;
	}
	if (obj !== null && typeof obj === 'object') {
		const entries = Object.entries(obj).filter(([, v]) => v !== undefined);
		if (entries.length === 0) return '{}';
		return `{\n${entries
			.map(([k, v]) => `${padIn}${/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? k : JSON.stringify(k)}: ${emit(v, indent + 1)}`)
			.join(',\n')},\n${pad}}`;
	}
	return JSON.stringify(obj);
}

const registry = {};
const resourceFiles = [];

mkdirSync(join(root, 'nodes', 'Gitea', 'descriptions'), { recursive: true });

for (const [resource, resDef] of Object.entries(allowlist)) {
	const opValues = Object.keys(resDef.operations).sort((a, b) =>
		resDef.operations[a].name.localeCompare(resDef.operations[b].name),
	);

	const operationsProperty = {
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: [resource] } },
		options: opValues.map((v) => ({
			name: resDef.operations[v].name,
			value: v,
			action: resDef.operations[v].action,
			description: cleanDescription(opsById[resDef.operations[v].operationId].op.summary),
		})),
		default: opValues[0],
	};

	const fields = [];

	for (const opValue of opValues) {
		const { operationId } = resDef.operations[opValue];
		const entry = opsById[operationId];
		if (!entry) throw new Error(`operationId not in spec: ${operationId}`);
		const params = collectParams(entry);

		const show = { resource: [resource], operation: [opValue] };
		const usedNames = new Set();
		const regParams = [];
		const queryOpts = [];
		const bodyOpts = [];

		for (const p of params) {
			// n8n parameter name; prefix on collision (e.g. query `body` vs body `body`)
			let paramName = p.api;
			if (p.required && usedNames.has(paramName)) paramName = `${p.in}_${p.api}`;
			if (p.required) usedNames.add(paramName);

			const t = toN8nType(p.schema);
			const field = {
				displayName: humanize(p.api),
				name: paramName,
				type: t.type,
				options: t.options,
				default: t.default,
				description: p.description || undefined,
			};

			if (p.required) {
				field.required = true;
				field.displayOptions = { show };
				fields.push(field);
			} else if (p.in === 'query') {
				queryOpts.push(field);
			} else {
				bodyOpts.push(field);
			}

			regParams.push({
				api: p.api,
				param: paramName,
				in: p.in,
				required: p.required,
				json: !!t.json,
			});
		}

		const byName = (a, b) => a.displayName.localeCompare(b.displayName);
		if (queryOpts.length > 0) {
			fields.push({
				displayName: 'Query Parameters',
				name: 'queryParameters',
				type: 'collection',
				placeholder: 'Add Parameter',
				default: {},
				displayOptions: { show },
				options: queryOpts.sort(byName),
			});
		}
		if (bodyOpts.length > 0) {
			fields.push({
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: { show },
				options: bodyOpts.sort(byName),
			});
		}

		registry[`${resource}.${opValue}`] = {
			method: entry.method,
			path: entry.path,
			params: regParams,
		};
	}

	const pascal = resource[0].toUpperCase() + resource.slice(1);
	const file = `${pascal}.ts`;
	resourceFiles.push({ resource, pascal, file });

	writeFileSync(
		join(root, 'nodes', 'Gitea', 'descriptions', file),
		`${HEADER}import type { INodeProperties } from 'n8n-workflow';

export const ${resource}Operations: INodeProperties = ${emit(operationsProperty, 0)};

export const ${resource}Fields: INodeProperties[] = ${emit(fields, 0)};
`,
	);
}

writeFileSync(
	join(root, 'nodes', 'Gitea', 'descriptions', 'index.ts'),
	`${HEADER}${resourceFiles.map(({ pascal }) => `export * from './${pascal}';`).join('\n')}\n`,
);

writeFileSync(
	join(root, 'nodes', 'Gitea', 'registry.ts'),
	`${HEADER}export interface RegistryParam {
	/** Parameter name in the Gitea API */
	api: string;
	/** Parameter name in the n8n UI */
	param: string;
	in: 'path' | 'query' | 'body';
	required: boolean;
	/** True when the UI exposes this as a raw-JSON field that must be parsed */
	json: boolean;
}

export interface RegistryEntry {
	method: string;
	path: string;
	params: RegistryParam[];
}

export const GITEA_API_VERSION = ${JSON.stringify(giteaVersion)};

export const REGISTRY: Record<string, RegistryEntry> = ${emit(registry, 0)};
`,
);

// ---------- mock data ----------
// Deterministic sample responses built from each operation's success-response
// schema. The spec has almost no example values, so values come from types and
// field-name heuristics. Must stay deterministic: CI checks generated files.

const MOCK_DEPTH_LIMIT = 4;

function mockString(name, schema) {
	if (schema.format === 'date-time' || schema.format === 'date') return '2026-01-01T00:00:00Z';
	if (schema.format === 'email' || name.includes('email')) return 'user@example.com';
	if (name === 'sha' || name.endsWith('_sha') || name === 'commit_id')
		return 'e93f2d5c47a3d0d48f8a5b6c7e1f0a9b8c7d6e5f';
	if (name.endsWith('url')) return 'https://gitea.example.com/example';
	if (name === 'body' || name.endsWith('description') || name === 'content')
		return 'Example text';
	if (name.includes('name') || name === 'title' || name === 'login') return 'example';
	if (name.includes('branch')) return 'main';
	if (name.includes('version')) return giteaVersion;
	return 'string';
}

function mockValue(name, schema, stack) {
	if (schema.example !== undefined) return schema.example;
	if (schema['x-example'] !== undefined) return schema['x-example'];
	if (schema.$ref) {
		if (stack.includes(schema.$ref) || stack.length >= MOCK_DEPTH_LIMIT) return null;
		return mockObject(resolveRef(schema.$ref), [...stack, schema.$ref]);
	}
	if (schema.enum) return schema.enum[0];
	switch (schema.type) {
		case 'integer':
		case 'number':
			return name === 'id' || name === 'index' || name.endsWith('_id') ? 1 : 0;
		case 'boolean':
			return false;
		case 'array':
			if (stack.length >= MOCK_DEPTH_LIMIT) return [];
			return [mockValue(name, schema.items ?? {}, stack)];
		case 'object':
			return mockObject(schema, stack);
		default:
			return mockString(name, schema);
	}
}

function mockObject(schema, stack) {
	if (schema.$ref) return mockValue('', schema, stack);
	const out = {};
	for (const [name, prop] of Object.entries(schema.properties ?? {})) {
		out[name] = mockValue(name, prop, stack);
	}
	return out;
}

/** Success-response schema of an operation (200/201/etc), or null. */
function successSchema(op) {
	for (const code of ['200', '201', '202']) {
		const resp = op.responses?.[code];
		if (!resp) continue;
		let r = resp;
		if (r.$ref) r = spec.responses[r.$ref.replace('#/responses/', '')];
		if (r?.schema) return r.schema;
	}
	return null;
}

const mocks = {};
for (const [resource, resDef] of Object.entries(allowlist)) {
	for (const [opValue, { operationId }] of Object.entries(resDef.operations)) {
		const schema = successSchema(opsById[operationId].op);
		mocks[`${resource}.${opValue}`] = schema ? mockValue('', schema, []) : { success: true };
	}
}

writeFileSync(
	join(root, 'nodes', 'Gitea', 'mocks.ts'),
	`${HEADER}export const MOCKS: Record<string, unknown> = ${JSON.stringify(mocks, null, '\t')};\n`,
);

const opCount = Object.keys(registry).length;
console.log(
	`Generated ${resourceFiles.length} resource files, ${opCount} operations, ${opCount} mocks (Gitea v${giteaVersion}).`,
);
