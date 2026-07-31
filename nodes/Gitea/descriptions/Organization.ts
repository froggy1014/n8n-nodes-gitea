// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.1 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const organizationOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"organization",
			],
		},
	},
	options: [
		{
			name: "Create Repo",
			value: "createRepo",
			action: "Create a repository in an organization",
			description: "Create a repository in an organization",
		},
		{
			name: "Get",
			value: "get",
			action: "Get an organization",
			description: "Get an organization",
		},
		{
			name: "List",
			value: "list",
			action: "List organizations",
			description: "Get list of organizations",
		},
		{
			name: "List Members",
			value: "listMembers",
			action: "List members of an organization",
			description: "List an organization's members",
		},
		{
			name: "List Repos",
			value: "listRepos",
			action: "List repos of an organization",
			description: "List an organization's repos",
		},
	],
	default: "createRepo",
};

export const organizationFields: INodeProperties[] = [
	{
		displayName: "Org",
		name: "org",
		type: "string",
		default: "",
		description: "name of organization",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"organization",
				],
				operation: [
					"createRepo",
				],
			},
		},
	},
	{
		displayName: "Name",
		name: "name",
		type: "string",
		default: "",
		description: "Name of the repository to create",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"organization",
				],
				operation: [
					"createRepo",
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
					"organization",
				],
				operation: [
					"createRepo",
				],
			},
		},
		options: [
			{
				displayName: "Auto Init",
				name: "auto_init",
				type: "boolean",
				default: false,
				description: "Whether the repository should be auto-initialized?",
			},
			{
				displayName: "Default Branch",
				name: "default_branch",
				type: "string",
				default: "",
				description: "DefaultBranch of the repository (used when initializes and in template)",
			},
			{
				displayName: "Description",
				name: "description",
				type: "string",
				default: "",
				description: "Description of the repository to create",
			},
			{
				displayName: "Gitignores",
				name: "gitignores",
				type: "string",
				default: "",
				description: "Gitignores to use",
			},
			{
				displayName: "Issue Labels",
				name: "issue_labels",
				type: "string",
				default: "",
				description: "Label-Set to use",
			},
			{
				displayName: "License",
				name: "license",
				type: "string",
				default: "",
				description: "License to use",
			},
			{
				displayName: "Object Format Name",
				name: "object_format_name",
				type: "options",
				options: [
					{
						name: "Sha1",
						value: "sha1",
					},
					{
						name: "Sha256",
						value: "sha256",
					},
				],
				default: "sha1",
				description: "ObjectFormatName of the underlying git repository, empty string for default (sha1) sha1 ObjectFormatSHA1 sha256 ObjectFormatSHA256",
			},
			{
				displayName: "Private",
				name: "private",
				type: "boolean",
				default: false,
				description: "Whether the repository is private",
			},
			{
				displayName: "Readme",
				name: "readme",
				type: "string",
				default: "",
				description: "Readme of the repository to create",
			},
			{
				displayName: "Template",
				name: "template",
				type: "boolean",
				default: false,
				description: "Whether the repository is template",
			},
			{
				displayName: "Trust Model",
				name: "trust_model",
				type: "options",
				options: [
					{
						name: "Default",
						value: "default",
					},
					{
						name: "Collaborator",
						value: "collaborator",
					},
					{
						name: "Committer",
						value: "committer",
					},
					{
						name: "Collaboratorcommitter",
						value: "collaboratorcommitter",
					},
				],
				default: "default",
				description: "TrustModel of the repository",
			},
		],
	},
	{
		displayName: "Org",
		name: "org",
		type: "string",
		default: "",
		description: "name of the organization to get",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"organization",
				],
				operation: [
					"get",
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
					"organization",
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
	{
		displayName: "Org",
		name: "org",
		type: "string",
		default: "",
		description: "name of the organization",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"organization",
				],
				operation: [
					"listMembers",
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
					"organization",
				],
				operation: [
					"listMembers",
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
	{
		displayName: "Org",
		name: "org",
		type: "string",
		default: "",
		description: "name of the organization",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"organization",
				],
				operation: [
					"listRepos",
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
					"organization",
				],
				operation: [
					"listRepos",
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
