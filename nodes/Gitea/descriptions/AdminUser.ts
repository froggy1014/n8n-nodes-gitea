// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.3 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const adminUserOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"adminUser",
			],
		},
	},
	options: [
		{
			name: "Create",
			value: "create",
			action: "Create a user (admin)",
			description: "Create a user",
		},
		{
			name: "Delete",
			value: "delete",
			action: "Delete a user (admin)",
			description: "Delete a user",
		},
		{
			name: "Rename",
			value: "rename",
			action: "Rename a user (admin)",
			description: "Rename a user",
		},
		{
			name: "Search",
			value: "search",
			action: "Search users (admin)",
			description: "Search users according filter conditions",
		},
		{
			name: "Update",
			value: "update",
			action: "Update a user (admin)",
			description: "Edit an existing user",
		},
	],
	default: "create",
};

export const adminUserFields: INodeProperties[] = [
	{
		displayName: "Email",
		name: "email",
		type: "string",
		default: "",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"adminUser",
				],
				operation: [
					"create",
				],
			},
		},
	},
	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "username of the user",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"adminUser",
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
					"adminUser",
				],
				operation: [
					"create",
				],
			},
		},
		options: [
			{
				displayName: "Created At",
				name: "created_at",
				type: "string",
				default: "",
				description: "For explicitly setting the user creation timestamp. Useful when users are migrated from other systems. When omitted, the user's creation timestamp will be set to \"now\".",
			},
			{
				displayName: "Full Name",
				name: "full_name",
				type: "string",
				default: "",
				description: "The full display name of the user",
			},
			{
				displayName: "Login Name",
				name: "login_name",
				type: "string",
				default: "",
				description: "identifier of the user, provided by the external authenticator (if configured)",
			},
			{
				displayName: "Must Change Password",
				name: "must_change_password",
				type: "boolean",
				default: false,
				description: "Whether the user must change password on first login",
			},
			{
				displayName: "Password",
				name: "password",
				type: "string",
				typeOptions: {
					password: true,
				},
				default: "",
				description: "The plain text password for the user",
			},
			{
				displayName: "Restricted",
				name: "restricted",
				type: "boolean",
				default: false,
				description: "Whether the user has restricted access privileges",
			},
			{
				displayName: "Send Notify",
				name: "send_notify",
				type: "boolean",
				default: false,
				description: "Whether to send welcome notification email to the user",
			},
			{
				displayName: "Source ID",
				name: "source_id",
				type: "number",
				default: 0,
				description: "The authentication source ID to associate with the user",
			},
			{
				displayName: "Visibility",
				name: "visibility",
				type: "options",
				options: [
					{
						name: "Public",
						value: "public",
					},
					{
						name: "Limited",
						value: "limited",
					},
					{
						name: "Private",
						value: "private",
					},
				],
				default: "public",
				description: "User visibility level: public, limited, or private public UserVisibilityPublic limited UserVisibilityLimited private UserVisibilityPrivate",
			},
		],
	},
	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "username of the user to delete",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"adminUser",
				],
				operation: [
					"delete",
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
					"adminUser",
				],
				operation: [
					"delete",
				],
			},
		},
		options: [
			{
				displayName: "Purge",
				name: "purge",
				type: "boolean",
				default: false,
				description: "purge the user from the system completely",
			},
		],
	},
	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "current username of the user",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"adminUser",
				],
				operation: [
					"rename",
				],
			},
		},
	},
	{
		displayName: "New Username",
		name: "new_username",
		type: "string",
		default: "",
		description: "New username for this user. This name cannot be in use yet by any other user.",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"adminUser",
				],
				operation: [
					"rename",
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
					"adminUser",
				],
				operation: [
					"search",
				],
			},
		},
		options: [
			{
				displayName: "Is 2fa Enabled",
				name: "is_2fa_enabled",
				type: "boolean",
				default: false,
				description: "filter 2FA enabled users",
			},
			{
				displayName: "Is Active",
				name: "is_active",
				type: "boolean",
				default: false,
				description: "filter active users",
			},
			{
				displayName: "Is Admin",
				name: "is_admin",
				type: "boolean",
				default: false,
				description: "filter admin users",
			},
			{
				displayName: "Is Prohibit Login",
				name: "is_prohibit_login",
				type: "boolean",
				default: false,
				description: "filter login prohibited users",
			},
			{
				displayName: "Is Restricted",
				name: "is_restricted",
				type: "boolean",
				default: false,
				description: "filter restricted users",
			},
			{
				displayName: "Limit",
				name: "limit",
				type: "number",
				default: 0,
				description: "page size of results",
			},
			{
				displayName: "Login Name",
				name: "login_name",
				type: "string",
				default: "",
				description: "identifier of the user, provided by the external authenticator",
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
				displayName: "Q",
				name: "q",
				type: "string",
				default: "",
				description: "search term (username, full name, email)",
			},
			{
				displayName: "Sort",
				name: "sort",
				type: "string",
				default: "",
				description: "sort users by attribute. Supported values are \"name\", \"created\", \"updated\" and \"id\". Default is \"name\"",
			},
			{
				displayName: "Source ID",
				name: "source_id",
				type: "number",
				default: 0,
				description: "ID of the user's login source to search for",
			},
			{
				displayName: "Visibility",
				name: "visibility",
				type: "string",
				default: "",
				description: "visibility filter. Supported values are \"public\", \"limited\" and \"private\".",
			},
		],
	},
	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "username of the user whose data is to be edited",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"adminUser",
				],
				operation: [
					"update",
				],
			},
		},
	},
	{
		displayName: "Source ID",
		name: "source_id",
		type: "number",
		default: 0,
		required: true,
		displayOptions: {
			show: {
				resource: [
					"adminUser",
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
					"adminUser",
				],
				operation: [
					"update",
				],
			},
		},
		options: [
			{
				displayName: "Active",
				name: "active",
				type: "boolean",
				default: false,
				description: "Whether the user account is active",
			},
			{
				displayName: "Admin",
				name: "admin",
				type: "boolean",
				default: false,
				description: "Whether the user has administrator privileges",
			},
			{
				displayName: "Allow Create Organization",
				name: "allow_create_organization",
				type: "boolean",
				default: false,
				description: "Whether the user can create organizations",
			},
			{
				displayName: "Allow Git Hook",
				name: "allow_git_hook",
				type: "boolean",
				default: false,
				description: "Whether the user can use Git hooks",
			},
			{
				displayName: "Allow Import Local",
				name: "allow_import_local",
				type: "boolean",
				default: false,
				description: "Whether the user can import local repositories",
			},
			{
				displayName: "Description",
				name: "description",
				type: "string",
				default: "",
				description: "The user's personal description or bio",
			},
			{
				displayName: "Email",
				name: "email",
				type: "string",
				default: "",
			},
			{
				displayName: "Full Name",
				name: "full_name",
				type: "string",
				default: "",
				description: "The full display name of the user",
			},
			{
				displayName: "Location",
				name: "location",
				type: "string",
				default: "",
				description: "The user's location or address",
			},
			{
				displayName: "Login Name",
				name: "login_name",
				type: "string",
				default: "",
				description: "identifier of the user, provided by the external authenticator (if configured)",
			},
			{
				displayName: "Max Repo Creation",
				name: "max_repo_creation",
				type: "number",
				default: 0,
				description: "Maximum number of repositories the user can create",
			},
			{
				displayName: "Must Change Password",
				name: "must_change_password",
				type: "boolean",
				default: false,
				description: "Whether the user must change password on next login",
			},
			{
				displayName: "Password",
				name: "password",
				type: "string",
				typeOptions: {
					password: true,
				},
				default: "",
				description: "The plain text password for the user",
			},
			{
				displayName: "Prohibit Login",
				name: "prohibit_login",
				type: "boolean",
				default: false,
				description: "Whether the user is prohibited from logging in",
			},
			{
				displayName: "Restricted",
				name: "restricted",
				type: "boolean",
				default: false,
				description: "Whether the user has restricted access privileges",
			},
			{
				displayName: "Visibility",
				name: "visibility",
				type: "options",
				options: [
					{
						name: "Public",
						value: "public",
					},
					{
						name: "Limited",
						value: "limited",
					},
					{
						name: "Private",
						value: "private",
					},
				],
				default: "public",
				description: "User visibility level: public, limited, or private public UserVisibilityPublic limited UserVisibilityLimited private UserVisibilityPrivate",
			},
			{
				displayName: "Website",
				name: "website",
				type: "string",
				default: "",
				description: "The user's personal website URL",
			},
		],
	},
];
