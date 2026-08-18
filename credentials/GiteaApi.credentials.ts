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
			default: '',
			placeholder: 'https://gitea.example.com',
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
			description:
				'Personal access token from Settings > Applications. Needs at least the read:user scope for the credential test to pass.',
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

	// /version 은 무인증으로도 200 을 주는 인스턴스가 많아 토큰 검증이 안 된다.
	// /user 는 유효한 토큰(read:user)이 있어야만 200 → 실제 토큰 검증이 된다.
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl.replace(new RegExp("/+$"), "")}}',
			url: '/api/v1/user',
		},
	};
}
