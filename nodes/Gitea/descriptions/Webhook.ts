// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.1 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const webhookOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"webhook",
			],
		},
	},
	options: [
		{
			name: "Create",
			value: "create",
			action: "Create a webhook",
			description: "Create a hook",
		},
		{
			name: "Delete",
			value: "delete",
			action: "Delete a webhook",
			description: "Delete a hook in a repository",
		},
		{
			name: "List",
			value: "list",
			action: "List webhooks",
			description: "List the hooks in a repository",
		},
	],
	default: "create",
};

export const webhookFields: INodeProperties[] = [
	{
		displayName: "Owner",
		name: "owner",
		type: "string",
		default: "",
		description: "owner of the repo",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"create",
				],
			},
		},
	},
	{
		displayName: "Repo",
		name: "repo",
		type: "string",
		default: "",
		description: "name of the repo",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"create",
				],
			},
		},
	},
	{
		displayName: "Config",
		name: "config",
		type: "json",
		default: "{}",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"create",
				],
			},
		},
	},
	{
		displayName: "Type",
		name: "type",
		type: "options",
		options: [
			{
				name: "Dingtalk",
				value: "dingtalk",
			},
			{
				name: "Discord",
				value: "discord",
			},
			{
				name: "Gitea",
				value: "gitea",
			},
			{
				name: "Gogs",
				value: "gogs",
			},
			{
				name: "Msteams",
				value: "msteams",
			},
			{
				name: "Slack",
				value: "slack",
			},
			{
				name: "Telegram",
				value: "telegram",
			},
			{
				name: "Feishu",
				value: "feishu",
			},
			{
				name: "Wechatwork",
				value: "wechatwork",
			},
			{
				name: "Packagist",
				value: "packagist",
			},
		],
		default: "dingtalk",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"create",
				],
			},
		},
	},
	{
		displayName: "Additional Fields",
		name: "additionalFields",
		type: "collection",
		placeholder: "Add Field",
		default: {},
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"create",
				],
			},
		},
		options: [
			{
				displayName: "Active",
				name: "active",
				type: "boolean",
				default: false,
			},
			{
				displayName: "Authorization Header",
				name: "authorization_header",
				type: "string",
				default: "",
				description: "Authorization header to include in webhook requests",
			},
			{
				displayName: "Branch Filter",
				name: "branch_filter",
				type: "string",
				default: "",
				description: "Branch filter pattern to determine which branches trigger the webhook",
			},
			{
				displayName: "Events",
				name: "events",
				type: "json",
				default: "[]",
				description: "List of events that will trigger this webhook",
			},
			{
				displayName: "Name",
				name: "name",
				type: "string",
				default: "",
				description: "Optional human-readable name for the webhook",
			},
		],
	},
	{
		displayName: "Owner",
		name: "owner",
		type: "string",
		default: "",
		description: "owner of the repo",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"delete",
				],
			},
		},
	},
	{
		displayName: "Repo",
		name: "repo",
		type: "string",
		default: "",
		description: "name of the repo",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"delete",
				],
			},
		},
	},
	{
		displayName: "ID",
		name: "id",
		type: "number",
		default: 0,
		description: "id of the hook to delete",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"delete",
				],
			},
		},
	},
	{
		displayName: "Owner",
		name: "owner",
		type: "string",
		default: "",
		description: "owner of the repo",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"list",
				],
			},
		},
	},
	{
		displayName: "Repo",
		name: "repo",
		type: "string",
		default: "",
		description: "name of the repo",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"list",
				],
			},
		},
	},
	{
		displayName: "Query Parameters",
		name: "queryParameters",
		type: "collection",
		placeholder: "Add Parameter",
		default: {},
		displayOptions: {
			show: {
				resource: [
					"webhook",
				],
				operation: [
					"list",
				],
			},
		},
		options: [
			{
				displayName: "Limit",
				name: "limit",
				type: "number",
				default: 0,
				description: "page size of results",
			},
			{
				displayName: "Page",
				name: "page",
				type: "number",
				default: 0,
				description: "page number of results to return (1-based)",
			},
		],
	},
];
