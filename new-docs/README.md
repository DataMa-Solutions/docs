# DataMa Documentation (new version)

Starlight (Astro) site for the new version of DataMa, deployed to Cloudflare
(Workers static assets) at `docs.datama.io`. The Jekyll site at the root of this
repository stays online on GitHub Pages for the previous version during the
transition.

This folder is a skeleton: the pages under `src/content/docs/` are placeholders
showing the target structure. It is meant to move to its own repository once
the name is decided.

## Run locally

Requires Node >= 22.23.4 (see `.nvmrc`).

```
npm install
npm run dev          # http://localhost:4321
npm run build        # static site in dist/
npm run check:links  # after build: every slug in src/data/doc-links.json resolves
```

## Structure

| Folder | Content |
| --- | --- |
| `src/content/docs/start/` | First steps, web app tour |
| `src/content/docs/solutions/<solution>/` | Overview, how it works, views, settings |
| `src/content/docs/data/` | Datasets, sources (one page each), calendars |
| `src/content/docs/environments/` | Install and set-up, one page per environment |
| `src/content/docs/guides/` | Use cases |
| `src/content/docs/admin/` | Workspace, plans and billing, on-premise |
| `src/content/docs/reference/` | Common settings, glossary, release notes |
| `src/content/docs/legal/` | Privacy policies, terms |
| `src/content/docs/fr/` | French translations (same paths); missing pages fall back to English |

The sidebar is generated from these folders (`astro.config.mjs`); order pages
with `sidebar.order` in their frontmatter.

## Environment picker

DataMa Studio runs in several environments (web app, Looker Studio, Tableau,
Power BI, Qlik, Excel, Google Sheets, AI Skill). Each subject is written once;
the picker at the top of the sidebar filters what the reader sees. The list
lives in `src/lib/environments.ts`.

- **A page for some environments only:** `environments: [webapp]` in its
  frontmatter. Its sidebar link is hidden for the others, and a reader who lands
  on it anyway sees a notice. No `environments` = every environment.
- **A passage for some environments only:** in an `.mdx` page,
  `<Env only="tableau powerbi">…</Env>` (`src/components/Env.astro`). An
  unknown id fails the build.
- **Choosing the environment:** the picker, or `?env=<id>` in the URL (what the
  product appends to its links). The choice is remembered in the browser.
  Without a choice, everything shows.

Filtering happens in the browser (the site is static): a script in `<head>`
sets `html[data-env]` before first paint, and CSS hides whatever is tagged with
other environments. Every page keeps a single URL.

The docs always describe the latest version; there are no versioned copies. A
recent feature gets a tag: `since: "4.2"` in the frontmatter for a whole page,
or `<Since v="4.2" />` under a heading for one section (not inside the heading,
which would change its anchor).

## Links from the product

The product links to the docs by **slug**, never by a hardcoded URL. Slugs live
in `src/data/doc-links.json`; the product appends `?env=<id>` so the docs
open filtered on its environment. Anchors are the heading text slugified, with no
section number (`## Calendar` → `#calendar`), so reordering a page never breaks
a link. Renaming a heading changes its anchor: update the registry in the same
change. `npm run check:links` fails the build if a slug points at a missing page
or anchor.

## Indexing

Off unless the build sets `ALLOW_INDEXING=true` (same rule as `public-website`).
Without it, `robots.txt` is `Disallow: /` and every page carries
`noindex, nofollow`. Set it on the Cloudflare Production environment only.

## Deploy

Cloudflare Workers project `datama-docs`, static assets from `dist/`
(`wrangler.jsonc`). Pushing to the default branch triggers a build in
Cloudflare CI (build command `npm run build && npm run check:links`). Manual
deploy: `npm run deploy`. Redirects go in `public/_redirects`.
