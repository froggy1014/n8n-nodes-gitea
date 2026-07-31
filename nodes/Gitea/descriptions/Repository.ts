// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.1 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const repositoryOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"repository",
			],
		},
	},
	options: [
		{
			name: "Create",
			value: "create",
			action: "Create a repository",
			description: "Create a repository",
		},
		{
			name: "Delete",
			value: "delete",
			action: "Delete a repository",
			description: "Delete a repository",
		},
		{
			name: "Get",
			value: "get",
			action: "Get a repository",
			description: "Get a repository",
		},
		{
			name: "List Commits",
			value: "listCommits",
			action: "List commits of a repository",
			description: "Get a list of all commits from a repository",
		},
		{
			name: "List Tags",
			value: "listTags",
			action: "List tags of a repository",
			description: "List a repository's tags",
		},
		{
			name: "Search",
			value: "search",
			action: "Search repositories",
			description: "Search for repositories",
		},
	],
	default: "create",
};

export const repositoryFields: INodeProperties[] = [
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
					"repository",
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
					"repository",
				],
				operation: [
					"create",
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
		displayName: "Owner",
		name: "owner",
		type: "string",
		default: "",
		description: "owner of the repo to delete",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"repository",
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
		description: "name of the repo to delete",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"repository",
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
					"repository",
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
					"repository",
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
					"repository",
				],
				operation: [
					"listCommits",
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
					"repository",
				],
				operation: [
					"listCommits",
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
					"repository",
				],
				operation: [
					"listCommits",
				],
			},
		},
		options: [
			{
				displayName: "Files",
				name: "files",
				type: "boolean",
				default: false,
				description: "include a list of affected files for every commit (disable for speedup, default 'true')",
			},
			{
				displayName: "Limit",
				name: "limit",
				type: "number",
				default: 0,
				description: "page size of results (ignored if used with 'path')",
			},
			{
				displayName: "Not",
				name: "not",
				type: "string",
				default: "",
				description: "commits that match the given specifier will not be listed.",
			},
			{
				displayName: "Page",
				name: "page",
				type: "number",
				default: 0,
				description: "page number of results to return (1-based)",
			},
			{
				displayName: "Path",
				name: "path",
				type: "string",
				default: "",
				description: "filepath of a file/dir",
			},
			{
				displayName: "SHA",
				name: "sha",
				type: "string",
				default: "",
				description: "SHA or branch to start listing commits from (usually 'master')",
			},
			{
				displayName: "Since",
				name: "since",
				type: "string",
				default: "",
				description: "Only commits after this date will be returned (ISO 8601 format)",
			},
			{
				displayName: "Stat",
				name: "stat",
				type: "boolean",
				default: false,
				description: "include diff stats for every commit (disable for speedup, default 'true')",
			},
			{
				displayName: "Until",
				name: "until",
				type: "string",
				default: "",
				description: "Only commits before this date will be returned (ISO 8601 format)",
			},
			{
				displayName: "Verification",
				name: "verification",
				type: "boolean",
				default: false,
				description: "include verification for every commit (disable for speedup, default 'true')",
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
					"repository",
				],
				operation: [
					"listTags",
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
					"repository",
				],
				operation: [
					"listTags",
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
					"repository",
				],
				operation: [
					"listTags",
				],
			},
		},
		options: [
			{
				displayName: "Limit",
				name: "limit",
				type: "number",
				default: 0,
				description: "page size of results, default maximum page size is 50",
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
		displayName: "Query Parameters",
		name: "queryParameters",
		type: "collection",
		placeholder: "Add Parameter",
		default: {},
		displayOptions: {
			show: {
				resource: [
					"repository",
				],
				operation: [
					"search",
				],
			},
		},
		options: [
			{
				displayName: "Archived",
				name: "archived",
				type: "boolean",
				default: false,
				description: "show only archived, non-archived or all repositories (defaults to all)",
			},
			{
				displayName: "Exclusive",
				name: "exclusive",
				type: "boolean",
				default: false,
				description: "if `uid` is given, search only for repos that the user owns",
			},
			{
				displayName: "Include Desc",
				name: "includeDesc",
				type: "boolean",
				default: false,
				description: "include search of keyword within repository description",
			},
			{
				displayName: "Is Private",
				name: "is_private",
				type: "boolean",
				default: false,
				description: "show only pubic, private or all repositories (defaults to all)",
			},
			{
				displayName: "Limit",
				name: "limit",
				type: "number",
				default: 0,
				description: "page size of results",
			},
			{
				displayName: "Mode",
				name: "mode",
				type: "string",
				default: "",
				description: "type of repository to search for. Supported values are \"fork\", \"source\", \"mirror\" and \"collaborative\"",
			},
			{
				displayName: "Order",
				name: "order",
				type: "string",
				default: "",
				description: "sort order, either \"asc\" (ascending) or \"desc\" (descending). Default is \"asc\", ignored if \"sort\" is not specified.",
			},
			{
				displayName: "Page",
				name: "page",
				type: "number",
				default: 0,
				description: "page number of results to return (1-based)",
			},
			{
				displayName: "Priority Owner ID",
				name: "priority_owner_id",
				type: "number",
				default: 0,
				description: "repo owner to prioritize in the results",
			},
			{
				displayName: "Private",
				name: "private",
				type: "boolean",
				default: false,
				description: "include private repositories this user has access to (defaults to true)",
			},
			{
				displayName: "Q",
				name: "q",
				type: "string",
				default: "",
				description: "keyword",
			},
			{
				displayName: "Sort",
				name: "sort",
				type: "string",
				default: "",
				description: "sort repos by attribute. Supported values are \"alpha\", \"created\", \"updated\", \"size\", \"git_size\", \"lfs_size\", \"stars\", \"forks\" and \"id\". Default is \"alpha\"",
			},
			{
				displayName: "Starred By",
				name: "starredBy",
				type: "number",
				default: 0,
				description: "search only for repos that the user with the given id has starred",
			},
			{
				displayName: "Team ID",
				name: "team_id",
				type: "number",
				default: 0,
				description: "search only for repos that belong to the given team id",
			},
			{
				displayName: "Template",
				name: "template",
				type: "boolean",
				default: false,
				description: "include template repositories this user has access to (defaults to true)",
			},
			{
				displayName: "Topic",
				name: "topic",
				type: "boolean",
				default: false,
				description: "Limit search to repositories with keyword as topic",
			},
			{
				displayName: "Uid",
				name: "uid",
				type: "number",
				default: 0,
				description: "search only for repos that the user with the given id owns or contributes to",
			},
		],
	},
];
