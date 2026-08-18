# n8n-nodes-gitea

Unofficial [n8n](https://n8n.io) community node for the [Gitea](https://gitea.com) API.
Works with any Gitea instance (self-hosted or gitea.com). Not affiliated with Gitea Ltd.

**Pinned Gitea API version: v1.27.1** — see [`scripts/spec/gitea-version.json`](scripts/spec/gitea-version.json).

## How it stays up to date

The node definitions are **generated from the official Gitea swagger spec**, not written by hand:

```
scripts/spec/swagger.json   ← fetched from go-gitea/gitea (fetch-spec.mjs)
        │
        ▼  scripts/generate.mjs  (filtered by scripts/allowlist.json)
nodes/Gitea/descriptions/*.ts   — n8n UI fields per resource
nodes/Gitea/registry.ts         — method/path/param mapping per operation
```

A [scheduled GitHub Action](.github/workflows/update-spec.yml) checks for new Gitea releases
every Monday. When one appears it re-fetches the spec, regenerates everything, bumps the
package version, and **opens a PR** with the diff for review. CI verifies that generated
files always match the pinned spec.

To update manually:

```bash
npm run fetch-spec -- 1.28.0   # fetch new spec + move the pin
npm run build                  # regenerate + compile
```

## Resources and operations

47 operations across 10 resources (allowlist of the 482 operations in the full spec):

| Resource | Operations |
|----------|-----------|
| Repository | Search, Get, Create, Delete, List Commits, List Tags |
| Branch | List, Get, Create |
| File | Get, Create, Update, Delete |
| Issue | List, Get, Create, Update, Search, List/Create Comments, List/Add Labels |
| Pull Request | List, Get, Create, Update, Merge |
| Release | List, Get, Get Latest, Create, Update, Delete |
| Webhook | List, Create, Delete |
| User | Get Current, Get, Search, List Repos, List Own Repos |
| Organization | List, Get, List Members, List Repos, Create Repo |
| Instance | Get Version |

Need another endpoint? Add its `operationId` to [`scripts/allowlist.json`](scripts/allowlist.json)
and run `npm run build` — no hand-written node code required.

## Gitea Trigger

The **Gitea Trigger** node starts workflows on repository events (push, issues, pull
requests, releases — 24 event types). Unlike passive webhook triggers, it manages the
webhook for you:

- **Activate** → registers the webhook on the repository via the Gitea API
- **Deactivate** → deletes it again
- A random secret is set on registration and every delivery's `X-Gitea-Signature`
  (HMAC-SHA256) is verified — unauthorized calls get a 403

Just pick owner, repository, and events. Requires a token with repository webhook scope.

## Mock Data

Every operation has a **Mock Data** toggle: turn it on to get a deterministic sample
response generated from the operation's response schema in the spec — no credential or
Gitea instance needed. Useful for sketching workflows before wiring the real thing.
Mocks are regenerated together with the descriptions on every spec update.

## Credentials

Create a **Gitea API** credential in n8n:

- **Base URL** — root of your instance, e.g. `https://gitea.example.com` (no `/api/v1`)
- **Access Token** — Gitea > Settings > Applications > Generate New Token
  (needs at least the `read:user` scope)

The credential test calls `GET /api/v1/user`, which actually validates the token —
`/version` responds 200 even without authentication on most instances.

## Installation

Community nodes panel: **Settings > Community Nodes > Install** → `@froggy1014/n8n-nodes-gitea`.

Or in a custom Docker image:

```dockerfile
RUN npm install -g @froggy1014/n8n-nodes-gitea
```

## Development

```bash
npm install
npm run build   # generate + tsc + copy assets
npm run lint
```

Generated files (`nodes/Gitea/descriptions/`, `nodes/Gitea/registry.ts`) are committed so
the package builds without network access, but must never be edited by hand — CI fails if
they drift from the spec.

## License

[MIT](LICENSE)
