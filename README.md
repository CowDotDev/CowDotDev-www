# cow.dev

My personal site: a developer bio, a blog, and (eventually) tools and toys. It's built with [Astro](https://astro.build) and hosted on Cloudflare.

- Architecture: [docs/architecture.md](docs/architecture.md)
- Design system ("Holstein"): [docs/design-system.md](docs/design-system.md)

## Develop

```sh
pnpm install
pnpm dev          # http://localhost:4321
pnpm check        # type-check .astro/.ts
pnpm build        # static output in dist/
pnpm preview      # serve dist/
pnpm format       # prettier
```

## Write a post

Add `src/content/blog/<slug>.md` (or `.mdx`) with this frontmatter:

```yaml
---
title: My post
description: One-sentence summary.
pubDate: 2026-11-17
tags: [astro]
draft: true # remove to publish
---
```

Drafts appear in `pnpm dev` only.

## Edit identity and bio

- Name, tagline, nav, and social links: `src/lib/site.ts`
- Experience, skills, and projects: `src/data/bio.ts`
- Default social image: edit `scripts/og-default.svg`, then re-export it to `public/og-default.png`.

## Deploy (Cloudflare Workers static assets)

The configuration is in `wrangler.jsonc`.

- **Automatic:** in the Cloudflare dashboard, go to Workers & Pages → Create → Import a repository, and pick `CowDotDev/CowDotDev-www`. Set the build command to `pnpm build` and the deploy command to `npx wrangler deploy`. Pushes to `main` deploy to production; other branches get preview URLs.
- **Manual:** run `npx wrangler login`, then `pnpm deploy`.
- **Domain:** Worker → Settings → Domains & Routes → add the custom domain `cow.dev`. The `cow.dev` zone must be on Cloudflare.
