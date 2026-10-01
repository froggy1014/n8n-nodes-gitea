#!/usr/bin/env node
/**
 * Downloads the Gitea swagger spec for a given release tag and sanitizes the
 * Go template placeholders so it becomes valid JSON.
 *
 * Usage:
 *   node scripts/fetch-spec.mjs           # re-fetch the pinned version
 *   node scripts/fetch-spec.mjs 1.28.0    # fetch a new version and update the pin
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const pinFile = join(here, 'spec', 'gitea-version.json');

const argVersion = process.argv[2]?.replace(/^v/, '');
const pinned = JSON.parse(readFileSync(pinFile, 'utf8')).version;
const version = argVersion ?? pinned;

// Gitea 28+ ships a generated JSON file; older releases ship a Go template.
const base = `https://raw.githubusercontent.com/go-gitea/gitea/v${version}/templates/swagger`;
const candidates = [`${base}/v1-swagger.generated.json`, `${base}/v1_json.tmpl`];
console.log(`Fetching Gitea swagger spec v${version} ...`);

let raw;
for (const url of candidates) {
	const res = await fetch(url);
	if (res.ok) {
		raw = await res.text();
		break;
	}
	console.warn(`Not found at ${url}: ${res.status} ${res.statusText}`);
}
if (raw === undefined) {
	console.error(`Failed to fetch the swagger spec for v${version}`);
	process.exit(1);
}

// Sanitize Go template placeholders. Known ones get real values; anything
// unknown is dropped so the file still parses (and we log it for review).
raw = raw
	.replace(/\{\{\.SwaggerAppVer\}\}/g, version)
	.replace(/\{\{\.SwaggerAppSubUrl\}\}/g, '')
	// Gitea 28+ placeholders
	.replace(/0\.0\.0\+GITEA-API-APP-VERSION/g, version)
	.replace(/\/GITEA-API-APP-SUBURL/g, '');
const leftovers = raw.match(/\{\{[^}]*\}\}/g);
if (leftovers) {
	console.warn('Unknown template placeholders removed:', [...new Set(leftovers)].join(', '));
	raw = raw.replace(/\{\{[^}]*\}\}/g, '');
}

const spec = JSON.parse(raw);
writeFileSync(join(here, 'spec', 'swagger.json'), JSON.stringify(spec, null, 1) + '\n');
writeFileSync(pinFile, JSON.stringify({ version }, null, '\t') + '\n');
console.log(`Wrote scripts/spec/swagger.json (${Object.keys(spec.paths).length} paths), pinned v${version}`);
