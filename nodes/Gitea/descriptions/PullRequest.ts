// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.1 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const pullRequestOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"pullRequest",
			],
		},
	},
	options: [
		{
			name: "Create",
			value: "create",
			action: "Create a pull request",
			description: "Create a pull request",
		},
		{
			name: "Get",
			value: "get",
			action: "Get a pull request",
			description: "Get a pull request",
		},
		{
			name: "List",
			value: "list",
			action: "List pull requests",
			description: "List a repo's pull requests",
		},
		{
			name: "Merge",
			value: "merge",
			action: "Merge a pull request",
			description: "Merge a pull request",
		},
		{
			name: "Update",
			value: "update",
			action: "Update a pull request",
			description: "Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.",
		},
	],
	default: "create",
};

export const pullRequestFields: INodeProperties[] = [
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
					"pullRequest",
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
					"pullRequest",
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
					"pullRequest",
				],
				operation: [
					"create",
				],
			},
		},
		options: [
			{
				displayName: "Allow Maintainer Edit",
				name: "allow_maintainer_edit",
				type: "boolean",
				default: false,
				description: "Whether maintainers can edit the pull request",
			},
			{
				displayName: "Assignee",
				name: "assignee",
				type: "string",
				default: "",
				description: "The primary assignee username",
			},
			{
				displayName: "Assignees",
				name: "assignees",
				type: "json",
				default: "[]",
				description: "The list of assignee usernames",
			},
			{
				displayName: "Base",
				name: "base",
				type: "string",
				default: "",
				description: "The base branch for the pull request",
			},
			{
				displayName: "Body",
				name: "body",
				type: "string",
				default: "",
				description: "The description body of the pull request",
			},
			{
				displayName: "Due Date",
				name: "due_date",
				type: "string",
				default: "",
			},
			{
				displayName: "Head",
				name: "head",
				type: "string",
				default: "",
				description: "The head branch for the pull request, it could be a branch name on the base repository or a form like `<username>:<branch>` which refers to the user's fork repository's branch.",
			},
			{
				displayName: "Labels",
				name: "labels",
				type: "json",
				default: "[]",
				description: "The list of label IDs to assign to the pull request",
			},
			{
				displayName: "Milestone",
				name: "milestone",
				type: "number",
				default: 0,
				description: "The milestone ID to assign to the pull request",
			},
			{
				displayName: "Reviewers",
				name: "reviewers",
				type: "json",
				default: "[]",
				description: "The list of reviewer usernames",
			},
			{
				displayName: "Team Reviewers",
				name: "team_reviewers",
				type: "json",
				default: "[]",
				description: "The list of team reviewer names",
			},
			{
				displayName: "Title",
				name: "title",
				type: "string",
				default: "",
				description: "The title of the pull request",
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
					"pullRequest",
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
					"pullRequest",
				],
				operation: [
					"get",
				],
			},
		},
	},
	{
		displayName: "Index",
		name: "index",
		type: "number",
		default: 0,
		description: "index of the pull request to get",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"pullRequest",
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
					"pullRequest",
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
		description: "Name of the repo",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"pullRequest",
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
					"pullRequest",
				],
				operation: [
					"list",
				],
			},
		},
		options: [
			{
				displayName: "Base Branch",
				name: "base_branch",
				type: "string",
				default: "",
				description: "Filter by target base branch of the pull request",
			},
			{
				displayName: "Labels",
				name: "labels",
				type: "json",
				default: "[]",
				description: "Label IDs",
			},
			{
				displayName: "Limit",
				name: "limit",
				type: "number",
				default: 0,
				description: "Page size of results",
			},
			{
				displayName: "Milestone",
				name: "milestone",
				type: "number",
				default: 0,
				description: "ID of the milestone",
			},
			{
				displayName: "Page",
				name: "page",
				type: "number",
				default: 1,
				description: "Page number of results to return (1-based)",
			},
			{
				displayName: "Poster",
				name: "poster",
				type: "string",
				default: "",
				description: "Filter by pull request author",
			},
			{
				displayName: "Sort",
				name: "sort",
				type: "options",
				options: [
					{
						name: "Oldest",
						value: "oldest",
					},
					{
						name: "Recentupdate",
						value: "recentupdate",
					},
					{
						name: "Recentclose",
						value: "recentclose",
					},
					{
						name: "Leastupdate",
						value: "leastupdate",
					},
					{
						name: "Mostcomment",
						value: "mostcomment",
					},
					{
						name: "Leastcomment",
						value: "leastcomment",
					},
					{
						name: "Priority",
						value: "priority",
					},
				],
				default: "oldest",
				description: "Type of sort",
			},
			{
				displayName: "State",
				name: "state",
				type: "options",
				options: [
					{
						name: "Open",
						value: "open",
					},
					{
						name: "Closed",
						value: "closed",
					},
					{
						name: "All",
						value: "all",
					},
				],
				default: "open",
				description: "State of pull request",
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
					"pullRequest",
				],
				operation: [
					"merge",
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
					"pullRequest",
				],
				operation: [
					"merge",
				],
			},
		},
	},
	{
		displayName: "Index",
		name: "index",
		type: "number",
		default: 0,
		description: "index of the pull request to merge",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"pullRequest",
				],
				operation: [
					"merge",
				],
			},
		},
	},
	{
		displayName: "Do",
		name: "do",
		type: "options",
		options: [
			{
				name: "Merge",
				value: "merge",
			},
			{
				name: "Rebase",
				value: "rebase",
			},
			{
				name: "Rebase Merge",
				value: "rebase-merge",
			},
			{
				name: "Squash",
				value: "squash",
			},
			{
				name: "Fast Forward Only",
				value: "fast-forward-only",
			},
			{
				name: "Manually Merged",
				value: "manually-merged",
			},
		],
		default: "merge",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"pullRequest",
				],
				operation: [
					"merge",
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
					"pullRequest",
				],
				operation: [
					"merge",
				],
			},
		},
		options: [
			{
				displayName: "Delete Branch After Merge",
				name: "delete_branch_after_merge",
				type: "boolean",
				default: false,
			},
			{
				displayName: "Force Merge",
				name: "force_merge",
				type: "boolean",
				default: false,
			},
			{
				displayName: "Head Commit ID",
				name: "head_commit_id",
				type: "string",
				default: "",
			},
			{
				displayName: "Merge Commit ID",
				name: "merge_commit_id",
				type: "string",
				default: "",
			},
			{
				displayName: "Merge Message Field",
				name: "merge_message_field",
				type: "string",
				default: "",
			},
			{
				displayName: "Merge Title Field",
				name: "merge_title_field",
				type: "string",
				default: "",
			},
			{
				displayName: "Merge When Checks Succeed",
				name: "merge_when_checks_succeed",
				type: "boolean",
				default: false,
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
					"pullRequest",
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
					"pullRequest",
				],
				operation: [
					"update",
				],
			},
		},
	},
	{
		displayName: "Index",
		name: "index",
		type: "number",
		default: 0,
		description: "index of the pull request to edit",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"pullRequest",
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
					"pullRequest",
				],
				operation: [
					"update",
				],
			},
		},
		options: [
			{
				displayName: "Allow Maintainer Edit",
				name: "allow_maintainer_edit",
				type: "boolean",
				default: false,
				description: "Whether to allow maintainer edits",
			},
			{
				displayName: "Assignee",
				name: "assignee",
				type: "string",
				default: "",
				description: "The new primary assignee username",
			},
			{
				displayName: "Assignees",
				name: "assignees",
				type: "json",
				default: "[]",
				description: "The new list of assignee usernames",
			},
			{
				displayName: "Base",
				name: "base",
				type: "string",
				default: "",
				description: "The new base branch for the pull request",
			},
			{
				displayName: "Body",
				name: "body",
				type: "string",
				default: "",
				description: "The new description body for the pull request",
			},
			{
				displayName: "Content Version",
				name: "content_version",
				type: "number",
				default: 0,
				description: "The current version of the pull request content to detect conflicts during editing",
			},
			{
				displayName: "Due Date",
				name: "due_date",
				type: "string",
				default: "",
			},
			{
				displayName: "Labels",
				name: "labels",
				type: "json",
				default: "[]",
				description: "The new list of label IDs for the pull request",
			},
			{
				displayName: "Milestone",
				name: "milestone",
				type: "number",
				default: 0,
				description: "The new milestone ID for the pull request",
			},
			{
				displayName: "State",
				name: "state",
				type: "string",
				default: "",
				description: "The new state for the pull request",
			},
			{
				displayName: "Title",
				name: "title",
				type: "string",
				default: "",
				description: "The new title for the pull request",
			},
			{
				displayName: "Unset Due Date",
				name: "unset_due_date",
				type: "boolean",
				default: false,
				description: "Whether to remove the current deadline",
			},
		],
	},
];
