/**
 * Gitea webhook event types. Not part of the swagger spec (docs-only:
 * https://docs.gitea.com/usage/webhooks), so maintained by hand.
 */
export const GITEA_TRIGGER_EVENTS = [
	{ name: 'Create (Branch/Tag)', value: 'create' },
	{ name: 'Delete (Branch/Tag)', value: 'delete' },
	{ name: 'Fork', value: 'fork' },
	{ name: 'Issue Assign', value: 'issue_assign' },
	{ name: 'Issue Comment', value: 'issue_comment' },
	{ name: 'Issue Label', value: 'issue_label' },
	{ name: 'Issue Milestone', value: 'issue_milestone' },
	{ name: 'Issues', value: 'issues' },
	{ name: 'Package', value: 'package' },
	{ name: 'Pull Request', value: 'pull_request' },
	{ name: 'Pull Request Assign', value: 'pull_request_assign' },
	{ name: 'Pull Request Comment', value: 'pull_request_comment' },
	{ name: 'Pull Request Label', value: 'pull_request_label' },
	{ name: 'Pull Request Milestone', value: 'pull_request_milestone' },
	{ name: 'Pull Request Review Approved', value: 'pull_request_review_approved' },
	{ name: 'Pull Request Review Comment', value: 'pull_request_review_comment' },
	{ name: 'Pull Request Review Rejected', value: 'pull_request_review_rejected' },
	{ name: 'Pull Request Review Request', value: 'pull_request_review_request' },
	{ name: 'Pull Request Sync', value: 'pull_request_sync' },
	{ name: 'Push', value: 'push' },
	{ name: 'Release', value: 'release' },
	{ name: 'Repository', value: 'repository' },
	{ name: 'Status', value: 'status' },
	{ name: 'Wiki', value: 'wiki' },
];
