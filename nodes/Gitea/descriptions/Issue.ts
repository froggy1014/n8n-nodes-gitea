// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.0 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const issueOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"issue",
			],
		},
	},
	options: [
		{
			name: "Add Labels",
			value: "addLabels",
			action: "Add labels to an issue",
			description: "Add a label to an issue",
		},
		{
			name: "Create",
			value: "create",
			action: "Create an issue",
			description: "Create an issue. If using deadline only the date will be taken into account, and time of day ignored.",
		},
		{
			name: "Create Comment",
			value: "createComment",
			action: "Create a comment on an issue",
			description: "Add a comment to an issue",
		},
		{
			name: "Get",
			value: "get",
			action: "Get an issue",
			description: "Get an issue",
		},
		{
			name: "List",
			value: "list",
			action: "List issues of a repository",
			description: "List a repository's issues",
		},
		{
			name: "List Comments",
			value: "listComments",
			action: "List comments of an issue",
			description: "List all comments on an issue",
		},
		{
			name: "List Labels",
			value: "listLabels",
			action: "List labels of a repository",
			description: "Get all of a repository's labels",
		},
		{
			name: "Search",
			value: "search",
			action: "Search issues",
			description: "Search for issues across the repositories that the user has access to",
		},
		{
			name: "Update",
			value: "update",
			action: "Update an issue",
			description: "Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.",
		},
	],
	default: "addLabels",
};

export const issueFields: INodeProperties[] = [
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
					"issue",
				],
				operation: [
					"addLabels",
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
					"issue",
				],
				operation: [
					"addLabels",
				],
			},
		},
	},
	{
		displayName: "Index",
		name: "index",
		type: "number",
		default: 0,
		description: "index of the issue",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"issue",
				],
				operation: [
					"addLabels",
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
					"issue",
				],
				operation: [
					"addLabels",
				],
			},
		},
		options: [
			{
				displayName: "Labels",
				name: "labels",
				type: "json",
				default: "[]",
				description: "Labels can be a list of integers representing label IDs or a list of strings representing label names",
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
					"issue",
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
					"issue",
				],
				operation: [
					"create",
				],
			},
		},
	},
	{
		displayName: "Title",
		name: "title",
		type: "string",
		default: "",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"issue",
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
					"issue",
				],
				operation: [
					"create",
				],
			},
		},
		options: [
			{
				displayName: "Assignee",
				name: "assignee",
				type: "string",
				default: "",
				description: "deprecated",
			},
			{
				displayName: "Assignees",
				name: "assignees",
				type: "json",
				default: "[]",
			},
			{
				displayName: "Body",
				name: "body",
				type: "string",
				default: "",
			},
			{
				displayName: "Closed",
				name: "closed",
				type: "boolean",
				default: false,
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
				description: "list of label ids",
			},
			{
				displayName: "Milestone",
				name: "milestone",
				type: "number",
				default: 0,
				description: "milestone id",
			},
			{
				displayName: "Projects",
				name: "projects",
				type: "json",
				default: "[]",
				description: "list of project ids",
			},
			{
				displayName: "Ref",
				name: "ref",
				type: "string",
				default: "",
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
					"issue",
				],
				operation: [
					"createComment",
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
					"issue",
				],
				operation: [
					"createComment",
				],
			},
		},
	},
	{
		displayName: "Index",
		name: "index",
		type: "number",
		default: 0,
		description: "index of the issue",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"issue",
				],
				operation: [
					"createComment",
				],
			},
		},
	},
	{
		displayName: "Body",
		name: "body",
		type: "string",
		default: "",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"issue",
				],
				operation: [
					"createComment",
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
					"issue",
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
					"issue",
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
		description: "index of the issue to get",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"issue",
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
					"issue",
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
					"issue",
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
					"issue",
				],
				operation: [
					"list",
				],
			},
		},
		options: [
			{
				displayName: "Assigned By",
				name: "assigned_by",
				type: "string",
				default: "",
				description: "Only show items for which the given user is assigned",
			},
			{
				displayName: "Before",
				name: "before",
				type: "string",
				default: "",
				description: "Only show items updated before the given time. This is a timestamp in RFC 3339 format",
			},
			{
				displayName: "Created By",
				name: "created_by",
				type: "string",
				default: "",
				description: "Only show items which were created by the given user",
			},
			{
				displayName: "Labels",
				name: "labels",
				type: "string",
				default: "",
				description: "comma separated list of label names. Fetch only issues that have any of this label names. Non existent labels are discarded.",
			},
			{
				displayName: "Limit",
				name: "limit",
				type: "number",
				default: 0,
				description: "page size of results",
			},
			{
				displayName: "Mentioned By",
				name: "mentioned_by",
				type: "string",
				default: "",
				description: "Only show items in which the given user was mentioned",
			},
			{
				displayName: "Milestones",
				name: "milestones",
				type: "string",
				default: "",
				description: "comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded",
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
				description: "search string",
			},
			{
				displayName: "Since",
				name: "since",
				type: "string",
				default: "",
				description: "Only show items updated after the given time. This is a timestamp in RFC 3339 format",
			},
			{
				displayName: "State",
				name: "state",
				type: "options",
				options: [
					{
						name: "Closed",
						value: "closed",
					},
					{
						name: "Open",
						value: "open",
					},
					{
						name: "All",
						value: "all",
					},
				],
				default: "closed",
				description: "whether issue is open or closed",
			},
			{
				displayName: "Type",
				name: "type",
				type: "options",
				options: [
					{
						name: "Issues",
						value: "issues",
					},
					{
						name: "Pulls",
						value: "pulls",
					},
				],
				default: "issues",
				description: "filter by type (issues / pulls) if set",
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
					"issue",
				],
				operation: [
					"listComments",
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
					"issue",
				],
				operation: [
					"listComments",
				],
			},
		},
	},
	{
		displayName: "Index",
		name: "index",
		type: "number",
		default: 0,
		description: "index of the issue",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"issue",
				],
				operation: [
					"listComments",
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
					"issue",
				],
				operation: [
					"listComments",
				],
			},
		},
		options: [
			{
				displayName: "Before",
				name: "before",
				type: "string",
				default: "",
				description: "if provided, only comments updated before the provided time are returned.",
			},
			{
				displayName: "Since",
				name: "since",
				type: "string",
				default: "",
				description: "if provided, only comments updated since the specified time are returned.",
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
					"issue",
				],
				operation: [
					"listLabels",
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
					"issue",
				],
				operation: [
					"listLabels",
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
					"issue",
				],
				operation: [
					"listLabels",
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
		displayName: "Query Parameters",
		name: "queryParameters",
		type: "collection",
		placeholder: "Add Parameter",
		default: {},
		displayOptions: {
			show: {
				resource: [
					"issue",
				],
				operation: [
					"search",
				],
			},
		},
		options: [
			{
				displayName: "Assigned",
				name: "assigned",
				type: "boolean",
				default: false,
				description: "Filter issues or pulls assigned to the authenticated user",
			},
			{
				displayName: "Before",
				name: "before",
				type: "string",
				default: "",
				description: "Only show issues updated before the given time (RFC 3339 format)",
			},
			{
				displayName: "Created",
				name: "created",
				type: "boolean",
				default: false,
				description: "Filter issues or pulls created by the authenticated user",
			},
			{
				displayName: "Created By",
				name: "created_by",
				type: "string",
				default: "",
				description: "Only show items which were created by the given user",
			},
			{
				displayName: "Labels",
				name: "labels",
				type: "string",
				default: "",
				description: "Comma-separated list of label names. Fetch only issues that have any of these labels. Non existent labels are discarded.",
			},
			{
				displayName: "Limit",
				name: "limit",
				type: "number",
				default: 0,
				description: "Number of items per page",
			},
			{
				displayName: "Mentioned",
				name: "mentioned",
				type: "boolean",
				default: false,
				description: "Filter issues or pulls mentioning the authenticated user",
			},
			{
				displayName: "Milestones",
				name: "milestones",
				type: "string",
				default: "",
				description: "Comma-separated list of milestone names. Fetch only issues that have any of these milestones. Non existent milestones are discarded.",
			},
			{
				displayName: "Owner",
				name: "owner",
				type: "string",
				default: "",
				description: "Filter by repository owner",
			},
			{
				displayName: "Page",
				name: "page",
				type: "number",
				default: 1,
				description: "Page number of results to return (1-based)",
			},
			{
				displayName: "Q",
				name: "q",
				type: "string",
				default: "",
				description: "Search string",
			},
			{
				displayName: "Review Requested",
				name: "review_requested",
				type: "boolean",
				default: false,
				description: "Filter pull requests where the authenticated user's review was requested",
			},
			{
				displayName: "Reviewed",
				name: "reviewed",
				type: "boolean",
				default: false,
				description: "Filter pull requests reviewed by the authenticated user",
			},
			{
				displayName: "Since",
				name: "since",
				type: "string",
				default: "",
				description: "Only show issues updated after the given time (RFC 3339 format)",
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
				description: "State of the issue",
			},
			{
				displayName: "Team",
				name: "team",
				type: "string",
				default: "",
				description: "Filter by team (requires organization owner parameter)",
			},
			{
				displayName: "Type",
				name: "type",
				type: "options",
				options: [
					{
						name: "Issues",
						value: "issues",
					},
					{
						name: "Pulls",
						value: "pulls",
					},
				],
				default: "issues",
				description: "Filter by issue type",
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
					"issue",
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
					"issue",
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
		description: "index of the issue to edit",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"issue",
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
					"issue",
				],
				operation: [
					"update",
				],
			},
		},
		options: [
			{
				displayName: "Assignee",
				name: "assignee",
				type: "string",
				default: "",
				description: "deprecated",
			},
			{
				displayName: "Assignees",
				name: "assignees",
				type: "json",
				default: "[]",
			},
			{
				displayName: "Body",
				name: "body",
				type: "string",
				default: "",
			},
			{
				displayName: "Content Version",
				name: "content_version",
				type: "number",
				default: 0,
				description: "The current version of the issue content to detect conflicts during editing",
			},
			{
				displayName: "Due Date",
				name: "due_date",
				type: "string",
				default: "",
			},
			{
				displayName: "Milestone",
				name: "milestone",
				type: "number",
				default: 0,
			},
			{
				displayName: "Projects",
				name: "projects",
				type: "json",
				default: "[]",
				description: "list of project ids to set (replaces existing projects)",
			},
			{
				displayName: "Ref",
				name: "ref",
				type: "string",
				default: "",
			},
			{
				displayName: "State",
				name: "state",
				type: "string",
				default: "",
			},
			{
				displayName: "Title",
				name: "title",
				type: "string",
				default: "",
			},
			{
				displayName: "Unset Due Date",
				name: "unset_due_date",
				type: "boolean",
				default: false,
			},
		],
	},
];
