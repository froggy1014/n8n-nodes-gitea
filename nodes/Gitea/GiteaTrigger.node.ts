import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import {
	IDataObject,
	IHookFunctions,
	INodeType,
	INodeTypeDescription,
	IWebhookFunctions,
	IWebhookResponseData,
	NodeConnectionTypes,
} from 'n8n-workflow';
import { GITEA_TRIGGER_EVENTS } from './GiteaTriggerEvents';

/**
 * Gitea Trigger — 액티브 웹훅 방식.
 *
 * 워크플로 활성화 시 Gitea API 로 저장소 웹훅을 직접 등록하고, 비활성화 시
 * 삭제한다 (GithubTrigger 패턴). 등록 시 랜덤 secret 을 심고 수신 시
 * X-Gitea-Signature (HMAC-SHA256) 를 검증해 무단 트리거를 차단한다.
 */
export class GiteaTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Gitea Trigger',
		name: 'giteaTrigger',
		icon: 'file:gitea.svg',
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["owner"] + "/" + $parameter["repo"]}}',
		description:
			'Starts the workflow when Gitea repository events occur. Registers the webhook via the Gitea API automatically and verifies the payload signature.',
		defaults: { name: 'Gitea Trigger' },
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'giteaApi', required: true }],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Owner',
				name: 'owner',
				type: 'string',
				default: '',
				required: true,
				description: 'Owner (user or organization) of the repository',
			},
			{
				displayName: 'Repository',
				name: 'repo',
				type: 'string',
				default: '',
				required: true,
				description: 'Name of the repository to watch',
			},
			{
				displayName: 'Events',
				name: 'events',
				type: 'multiOptions',
				default: ['push'],
				required: true,
				options: GITEA_TRIGGER_EVENTS,
				description: 'Webhook events that start the workflow',
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const staticData = this.getWorkflowStaticData('node');
				if (!staticData.webhookId) return false;

				const owner = this.getNodeParameter('owner') as string;
				const repo = this.getNodeParameter('repo') as string;
				const credentials = await this.getCredentials('giteaApi');
				const baseUrl = (credentials.baseUrl as string).replace(/\/+$/, '');

				try {
					await this.helpers.httpRequestWithAuthentication.call(this, 'giteaApi', {
						method: 'GET',
						url: `${baseUrl}/api/v1/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/hooks/${staticData.webhookId}`,
						json: true,
					});
					return true;
				} catch (error) {
					delete staticData.webhookId;
					delete staticData.webhookSecret;
					return false;
				}
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const owner = this.getNodeParameter('owner') as string;
				const repo = this.getNodeParameter('repo') as string;
				const events = this.getNodeParameter('events') as string[];
				const credentials = await this.getCredentials('giteaApi');
				const baseUrl = (credentials.baseUrl as string).replace(/\/+$/, '');

				const secret = randomBytes(32).toString('hex');

				const response = (await this.helpers.httpRequestWithAuthentication.call(this, 'giteaApi', {
					method: 'POST',
					url: `${baseUrl}/api/v1/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/hooks`,
					body: {
						type: 'gitea',
						active: true,
						events,
						config: {
							url: webhookUrl,
							content_type: 'json',
							secret,
						},
					},
					json: true,
				})) as { id: number };

				const staticData = this.getWorkflowStaticData('node');
				staticData.webhookId = response.id;
				staticData.webhookSecret = secret;
				return true;
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const staticData = this.getWorkflowStaticData('node');
				if (!staticData.webhookId) return true;

				const owner = this.getNodeParameter('owner') as string;
				const repo = this.getNodeParameter('repo') as string;
				const credentials = await this.getCredentials('giteaApi');
				const baseUrl = (credentials.baseUrl as string).replace(/\/+$/, '');

				try {
					await this.helpers.httpRequestWithAuthentication.call(this, 'giteaApi', {
						method: 'DELETE',
						url: `${baseUrl}/api/v1/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/hooks/${staticData.webhookId}`,
						json: true,
					});
				} catch (error) {
					// 이미 지워진 훅(404 등)은 무시 — 워크플로 비활성화는 계속 진행
				}
				delete staticData.webhookId;
				delete staticData.webhookSecret;
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		const headers = this.getHeaderData() as IDataObject;
		const staticData = this.getWorkflowStaticData('node');

		// HMAC-SHA256 서명 검증 — secret 을 아는 Gitea 인스턴스만 통과
		const secret = staticData.webhookSecret as string | undefined;
		const signature = (headers['x-gitea-signature'] as string) ?? '';
		if (secret) {
			const rawBody = (req as unknown as { rawBody?: Buffer }).rawBody ?? Buffer.from(JSON.stringify(req.body ?? {}));
			const expected = createHmac('sha256', secret).update(rawBody).digest('hex');
			const valid =
				signature.length === expected.length &&
				timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expected, 'hex'));
			if (!valid) {
				const res = this.getResponseObject();
				res.status(403).json({ error: 'Invalid signature' });
				return { noWebhookResponse: true };
			}
		}

		const body = this.getBodyData();
		const event = (headers['x-gitea-event'] as string) ?? 'unknown';
		const eventType = (headers['x-gitea-event-type'] as string) ?? event;

		return {
			workflowData: [
				[
					{
						json: {
							event,
							event_type: eventType,
							delivery: (headers['x-gitea-delivery'] as string) ?? null,
							body,
						},
					},
				],
			],
		};
	}
}
