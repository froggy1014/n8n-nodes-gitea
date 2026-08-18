// GENERATED FILE — do not edit by hand.
// Source: Gitea swagger spec v1.27.2 (scripts/spec/swagger.json)
// Regenerate with: npm run generate
/* eslint-disable */
import type { INodeProperties } from 'n8n-workflow';

export const instanceOperations: INodeProperties = {
	displayName: "Operation",
	name: "operation",
	type: "options",
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [
				"instance",
			],
		},
	},
	options: [
		{
			name: "Get Version",
			value: "getVersion",
			action: "Get the Gitea server version",
			description: "Returns the version of the Gitea application",
		},
	],
	default: "getVersion",
};

export const instanceFields: INodeProperties[] = [];
