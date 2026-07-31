import {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

/**
 * Gitea API 인증.
 *
 * self-hosted 인스턴스를 지원하기 위해 baseUrl 을 credential 에 둔다.
 * 토큰은 Gitea > Settings > Applications > Generate New Token 에서 발급.
 */
export class GiteaApi implements ICredentialType {
	name = 'giteaApi';

	displayName = 'Gitea API';

	icon: Icon = 'file:gitea.svg';

	documentationUrl = 'https://docs.gitea.com/development/api-usage';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://gitea.com',
			required: true,
			description: 'Root URL of the Gitea instance, without a trailing slash or /api/v1',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Personal access token from Settings > Applications',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=token {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl.replace(new RegExp("/+$"), "")}}',
			url: '/api/v1/version',
		},
	};
}
