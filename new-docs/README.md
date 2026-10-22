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
| `src/content/docs/integrations/` | One page per platform, one section per solution |
| `src/content/docs/guides/` | Use cases |
| `src/content/docs/admin/` | Workspace, plans and billing, on-premise |
| `src/content/docs/reference/` | Common settings, glossary, release notes |
| `src/content/docs/legal/` | Privacy policies, terms |
| `src/content/docs/fr/` | French translations (same paths); missing pages fall back to English |

The sidebar is generated from these folders (`astro.config.mjs`); order pages
with `sidebar.order` in their frontmatter.

## Links from the product

The product links to the docs by **slug**, never by a hardcoded URL. Slugs live
in `src/data/doc-links.json`. Anchors are the heading text slugified, with no
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
