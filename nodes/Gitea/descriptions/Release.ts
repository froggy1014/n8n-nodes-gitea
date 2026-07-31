// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.1 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const releaseOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"release",
			],
		},
	},
	options: [
		{
			name: "Create",
			value: "create",
			action: "Create a release",
			description: "Create a release",
		},
		{
			name: "Delete",
			value: "delete",
			action: "Delete a release",
			description: "Delete a release",
		},
		{
			name: "Get",
			value: "get",
			action: "Get a release",
			description: "Get a release",
		},
		{
			name: "Get Latest",
			value: "getLatest",
			action: "Get the latest release",
			description: "Gets the most recent non-prerelease, non-draft release of a repository, sorted by created_at",
		},
		{
			name: "List",
			value: "list",
			action: "List releases",
			description: "List a repo's releases",
		},
		{
			name: "Update",
			value: "update",
			action: "Update a release",
			description: "Update a release",
		},
	],
	default: "create",
};

export const releaseFields: INodeProperties[] = [
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
					"release",
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
					"release",
				],
				operation: [
					"create",
				],
			},
		},
	},
	{
		displayName: "Tag Name",
		name: "tag_name",
		type: "string",
		default: "",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"release",
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
					"release",
				],
				operation: [
					"create",
				],
			},
		},
		options: [
			{
				displayName: "Body",
				name: "body",
				type: "string",
				default: "",
				description: "The release notes or description",
			},
			{
				displayName: "Draft",
				name: "draft",
				type: "boolean",
				default: false,
				description: "Whether to create the release as a draft",
			},
			{
				displayName: "Name",
				name: "name",
				type: "string",
				default: "",
				description: "The display title of the release",
			},
			{
				displayName: "Prerelease",
				name: "prerelease",
				type: "boolean",
				default: false,
				description: "Whether to mark the release as a prerelease",
			},
			{
				displayName: "Tag Message",
				name: "tag_message",
				type: "string",
				default: "",
				description: "The message for the git tag",
			},
			{
				displayName: "Target Commitish",
				name: "target_commitish",
				type: "string",
				default: "",
				description: "The target commitish for the release",
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
					"release",
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
					"release",
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
		description: "id of the release to delete",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"release",
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
					"release",
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
					"release",
				],
				operation: [
					"get",
				],
			},
		},
	},
	{
		displayName: "ID",
		name: "id",
		type: "number",
		default: 0,
		description: "id of the release to get",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"release",
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
					"release",
				],
				operation: [
					"getLatest",
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
					"release",
				],
				operation: [
					"getLatest",
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
					"release",
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
					"release",
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
					"release",
				],
				operation: [
					"list",
				],
			},
		},
		options: [
			{
				displayName: "Draft",
				name: "draft",
				type: "boolean",
				default: false,
				description: "filter (exclude / include) drafts, if you don't have repo write access none will show",
			},
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
				displayName: "Pre Release",
				name: "pre-release",
				type: "boolean",
				default: false,
				description: "filter (exclude / include) pre-releases",
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
					"release",
				],
				operation: [
					"update",
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
					"release",
				],
				operation: [
					"update",
				],
			},
		},
	},
	{
		displayName: "ID",
		name: "id",
		type: "number",
		default: 0,
		description: "id of the release to edit",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"release",
				],
				operation: [
					"update",
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
					"release",
				],
				operation: [
					"update",
				],
			},
		},
		options: [
			{
				displayName: "Body",
				name: "body",
				type: "string",
				default: "",
				description: "The new release notes or description",
			},
			{
				displayName: "Draft",
				name: "draft",
				type: "boolean",
				default: false,
				description: "Whether to change the draft status",
			},
			{
				displayName: "Name",
				name: "name",
				type: "string",
				default: "",
				description: "The new display title of the release",
			},
			{
				displayName: "Prerelease",
				name: "prerelease",
				type: "boolean",
				default: false,
				description: "Whether to change the prerelease status",
			},
			{
				displayName: "Tag Name",
				name: "tag_name",
				type: "string",
				default: "",
				description: "The new name of the git tag",
			},
			{
				displayName: "Target Commitish",
				name: "target_commitish",
				type: "string",
				default: "",
				description: "The new target commitish for the release",
			},
		],
	},
];
