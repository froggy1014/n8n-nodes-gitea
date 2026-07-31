// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.1 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const branchOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"branch",
			],
		},
	},
	options: [
		{
			name: "Create",
			value: "create",
			action: "Create a branch",
			description: "Create a branch",
		},
		{
			name: "Get",
			value: "get",
			action: "Get a branch",
			description: "Retrieve a specific branch from a repository, including its effective branch protection",
		},
		{
			name: "List",
			value: "list",
			action: "List branches",
			description: "List a repository's branches",
		},
	],
	default: "create",
};

export const branchFields: INodeProperties[] = [
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
					"branch",
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
					"branch",
				],
				operation: [
					"create",
				],
			},
		},
	},
	{
		displayName: "New Branch Name",
		name: "new_branch_name",
		type: "string",
		default: "",
		description: "Name of the branch to create",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"branch",
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
					"branch",
				],
				operation: [
					"create",
				],
			},
		},
		options: [
			{
				displayName: "Old Branch Name",
				name: "old_branch_name",
				type: "string",
				default: "",
				description: "Deprecated: true Name of the old branch to create from",
			},
			{
				displayName: "Old Ref Name",
				name: "old_ref_name",
				type: "string",
				default: "",
				description: "Name of the old branch/tag/commit to create from",
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
					"branch",
				],
				operation: [
					"get",
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
					"branch",
				],
				operation: [
					"get",
				],
			},
		},
	},
	{
		displayName: "Branch",
		name: "branch",
		type: "string",
		default: "",
		description: "branch to get",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"branch",
				],
				operation: [
					"get",
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
					"branch",
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
					"branch",
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
					"branch",
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
			{
				displayName: "Q",
				name: "q",
				type: "string",
				default: "",
				description: "branch name substring to filter by",
			},
		],
	},
];
