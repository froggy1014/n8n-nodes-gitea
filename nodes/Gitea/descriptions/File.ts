// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.0 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const fileOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"file",
			],
		},
	},
	options: [
		{
			name: "Create",
			value: "create",
			action: "Create a file",
			description: "Create a file in a repository",
		},
		{
			name: "Delete",
			value: "delete",
			action: "Delete a file",
			description: "Delete a file in a repository",
		},
		{
			name: "Get",
			value: "get",
			action: "Get file contents",
			description: "Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir.",
		},
		{
			name: "Update",
			value: "update",
			action: "Update a file",
			description: "Update a file in a repository if SHA is set, or create the file if SHA is not set",
		},
	],
	default: "create",
};

export const fileFields: INodeProperties[] = [
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
					"file",
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
					"file",
				],
				operation: [
					"create",
				],
			},
		},
	},
	{
		displayName: "Filepath",
		name: "filepath",
		type: "string",
		default: "",
		description: "path of the file to create",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"file",
				],
				operation: [
					"create",
				],
			},
		},
	},
	{
		displayName: "Content",
		name: "content",
		type: "string",
		default: "",
		description: "content must be base64 encoded",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"file",
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
					"file",
				],
				operation: [
					"create",
				],
			},
		},
		options: [
			{
				displayName: "Author",
				name: "author",
				type: "json",
				default: "{}",
			},
			{
				displayName: "Branch",
				name: "branch",
				type: "string",
				default: "",
				description: "branch (optional) is the base branch for the changes. If not supplied, the default branch is used",
			},
			{
				displayName: "Committer",
				name: "committer",
				type: "json",
				default: "{}",
			},
			{
				displayName: "Dates",
				name: "dates",
				type: "json",
				default: "{}",
			},
			{
				displayName: "Force Push",
				name: "force_push",
				type: "boolean",
				default: false,
				description: "force_push (optional) will do a force-push if the new branch already exists",
			},
			{
				displayName: "Message",
				name: "message",
				type: "string",
				default: "",
				description: "message (optional) is the commit message of the changes. If not supplied, a default message will be used",
			},
			{
				displayName: "New Branch",
				name: "new_branch",
				type: "string",
				default: "",
				description: "new_branch (optional) will make a new branch from base branch for the changes. If not supplied, the changes will be committed to the base branch",
			},
			{
				displayName: "Signoff",
				name: "signoff",
				type: "boolean",
				default: false,
				description: "Add a Signed-off-by trailer by the committer at the end of the commit log message.",
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
					"file",
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
					"file",
				],
				operation: [
					"delete",
				],
			},
		},
	},
	{
		displayName: "Filepath",
		name: "filepath",
		type: "string",
		default: "",
		description: "path of the file to delete",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"file",
				],
				operation: [
					"delete",
				],
			},
		},
	},
	{
		displayName: "SHA",
		name: "sha",
		type: "string",
		default: "",
		description: "the blob ID (SHA) for the file to delete",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"file",
				],
				operation: [
					"delete",
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
					"file",
				],
				operation: [
					"delete",
				],
			},
		},
		options: [
			{
				displayName: "Author",
				name: "author",
				type: "json",
				default: "{}",
			},
			{
				displayName: "Branch",
				name: "branch",
				type: "string",
				default: "",
				description: "branch (optional) is the base branch for the changes. If not supplied, the default branch is used",
			},
			{
				displayName: "Committer",
				name: "committer",
				type: "json",
				default: "{}",
			},
			{
				displayName: "Dates",
				name: "dates",
				type: "json",
				default: "{}",
			},
			{
				displayName: "Force Push",
				name: "force_push",
				type: "boolean",
				default: false,
				description: "force_push (optional) will do a force-push if the new branch already exists",
			},
			{
				displayName: "Message",
				name: "message",
				type: "string",
				default: "",
				description: "message (optional) is the commit message of the changes. If not supplied, a default message will be used",
			},
			{
				displayName: "New Branch",
				name: "new_branch",
				type: "string",
				default: "",
				description: "new_branch (optional) will make a new branch from base branch for the changes. If not supplied, the changes will be committed to the base branch",
			},
			{
				displayName: "Signoff",
				name: "signoff",
				type: "boolean",
				default: false,
				description: "Add a Signed-off-by trailer by the committer at the end of the commit log message.",
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
					"file",
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
					"file",
				],
				operation: [
					"get",
				],
			},
		},
	},
	{
		displayName: "Filepath",
		name: "filepath",
		type: "string",
		default: "",
		description: "path of the dir, file, symlink or submodule in the repo",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"file",
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
					"file",
				],
				operation: [
					"get",
				],
			},
		},
		options: [
			{
				displayName: "Ref",
				name: "ref",
				type: "string",
				default: "",
				description: "The name of the commit/branch/tag. Default to the repository’s default branch.",
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
					"file",
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
					"file",
				],
				operation: [
					"update",
				],
			},
		},
	},
	{
		displayName: "Filepath",
		name: "filepath",
		type: "string",
		default: "",
		description: "path of the file to update",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"file",
				],
				operation: [
					"update",
				],
			},
		},
	},
	{
		displayName: "Content",
		name: "content",
		type: "string",
		default: "",
		description: "content must be base64 encoded",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"file",
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
					"file",
				],
				operation: [
					"update",
				],
			},
		},
		options: [
			{
				displayName: "Author",
				name: "author",
				type: "json",
				default: "{}",
			},
			{
				displayName: "Branch",
				name: "branch",
				type: "string",
				default: "",
				description: "branch (optional) is the base branch for the changes. If not supplied, the default branch is used",
			},
			{
				displayName: "Committer",
				name: "committer",
				type: "json",
				default: "{}",
			},
			{
				displayName: "Dates",
				name: "dates",
				type: "json",
				default: "{}",
			},
			{
				displayName: "Force Push",
				name: "force_push",
				type: "boolean",
				default: false,
				description: "force_push (optional) will do a force-push if the new branch already exists",
			},
			{
				displayName: "From Path",
				name: "from_path",
				type: "string",
				default: "",
				description: "from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL",
			},
			{
				displayName: "Message",
				name: "message",
				type: "string",
				default: "",
				description: "message (optional) is the commit message of the changes. If not supplied, a default message will be used",
			},
			{
				displayName: "New Branch",
				name: "new_branch",
				type: "string",
				default: "",
				description: "new_branch (optional) will make a new branch from base branch for the changes. If not supplied, the changes will be committed to the base branch",
			},
			{
				displayName: "SHA",
				name: "sha",
				type: "string",
				default: "",
				description: "the blob ID (SHA) for the file that already exists to update, or leave it empty to create a new file",
			},
			{
				displayName: "Signoff",
				name: "signoff",
				type: "boolean",
				default: false,
				description: "Add a Signed-off-by trailer by the committer at the end of the commit log message.",
			},
		],
	},
];
