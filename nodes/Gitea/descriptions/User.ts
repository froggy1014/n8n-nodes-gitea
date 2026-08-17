// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.2 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const userOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"user",
			],
		},
	},
	options: [
		{
			name: "Get",
			value: "get",
			action: "Get a user",
			description: "Get a user",
		},
		{
			name: "Get Current",
			value: "getCurrent",
			action: "Get the authenticated user",
			description: "Get the authenticated user",
		},
		{
			name: "List Own Repos",
			value: "listOwnRepos",
			action: "List repos of the authenticated user",
			description: "List the repos that the authenticated user owns",
		},
		{
			name: "List Repos",
			value: "listRepos",
			action: "List repos of a user",
			description: "List the repos owned by the given user",
		},
		{
			name: "Search",
			value: "search",
			action: "Search users",
			description: "Search for users",
		},
	],
	default: "get",
};

export const userFields: INodeProperties[] = [
	{
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "username of the user whose data is to be listed",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"user",
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
					"user",
				],
				operation: [
					"listOwnRepos",
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
		displayName: "Username",
		name: "username",
		type: "string",
		default: "",
		description: "username of the user whose owned repos are to be listed",
		required: true,
		displayOptions: {
			show: {
				resource: [
					"user",
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
					"user",
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
	{
		displayName: "Query Parameters",
		name: "queryParameters",
		type: "collection",
		placeholder: "Add Parameter",
		default: {},
		displayOptions: {
			show: {
				resource: [
					"user",
				],
				operation: [
					"search",
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
				description: "keyword",
			},
			{
				displayName: "Uid",
				name: "uid",
				type: "number",
				default: 0,
				description: "ID of the user to search for",
			},
		],
	},
];
