import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionTypes,
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
import { buildRequest } from './request';

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
		description: `Interact with a Gitea instance (repositories, issues, pull requests, releases, and more). Generated from the official Gitea API spec v${GITEA_API_VERSION}.`,
		defaults: { name: 'Gitea' },
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'giteaApi', required: true }],
		properties: [
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

		const credentials = await this.getCredentials('giteaApi');
		const baseUrl = (credentials.baseUrl as string).replace(/\/+$/, '');

		for (let i = 0; i < items.length; i++) {
			try {
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
				throw error;
			}
		}

		return [returnData];
	}
}
