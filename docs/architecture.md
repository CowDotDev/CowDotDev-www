# Architecture

cow.dev is a personal site: a developer bio, a blog, and later personal tools and toys.

## Stack

| Concern     | Choice                                                     |
| ----------- | ---------------------------------------------------------- |
| Framework   | [Astro](https://astro.build) 7, TypeScript strict          |
| Rendering   | Fully static (`output: 'static'`), every page prerendered  |
| Content     | Astro Content Collections, Markdown/MDX, Zod schemas       |
| Styling     | CSS custom-property design tokens and Astro scoped CSS     |
| Fonts       | Self-hosted variable fonts via `@fontsource-variable/*`    |
| Code blocks | Shiki, dual light/dark themes switched by the site theme   |
| Feeds/SEO   | `@astrojs/rss`, `@astrojs/sitemap`, OG/canonical meta tags |
| Hosting     | Cloudflare Workers static assets (`wrangler.jsonc`)        |
| Packages    | pnpm                                                       |

There is no client-side framework. The only JavaScript shipped is the theme toggle, plus a tiny inline script that applies the saved theme before first paint.

## Directory layout

```
src/
  styles/        tokens.css (design tokens), reset.css, global.css, prose.css
  components/
    brand/       Logo, Spots (cow-spot SVG motif)
    layout/      Header, Footer, ThemeToggle
    ui/          Button, Card, Tag, PostList
  layouts/       BaseLayout (head, meta, theme), PostLayout
  pages/         index, about, blog/, tags/, rss.xml.ts, 404
  content/blog/  blog posts (.md / .mdx)
  data/          bio data (experience, skills, projects)
  lib/           site.ts (site config), posts.ts (post helpers)
  content.config.ts  collection schemas
public/          favicon.svg, og-default.png, robots.txt
docs/            this file, design-system.md
```

## Content

### Blog

Each post is a file in `src/content/blog/`. Its filename, without the extension, becomes the URL slug: `/blog/<slug>`.

```yaml
---
title: Post title
description: One-sentence summary (used in lists, RSS, and meta tags)
pubDate: 2026-11-17
updatedDate: 2026-11-20 # optional
tags: [astro, css]
draft: false # drafts render in dev only
---
```

Helpers in `src/lib/posts.ts` cover sorting, filtering out drafts, reading time, and collecting tags. Pages use these helpers instead of calling `getCollection` directly.

### Bio

`src/data/bio.ts` exports typed arrays for experience, skills, and projects. `/about` renders them, and a print stylesheet lets the page double as a resume.

### Site config

`src/lib/site.ts` holds the name, tagline, description, nav items, and social links. It is the single place to change identity details.

## Hosting & deploys

- `pnpm build` writes static files to `dist/`.
- `wrangler.jsonc` serves `dist/` as Workers static assets, with `404.html` as the not-found page.
- Production: Cloudflare Workers Builds connected to `CowDotDev/CowDotDev-www`. The build command is `pnpm build` and the deploy command is `npx wrangler deploy`. Pushes to `main` deploy to production, and other branches get preview URLs.
- Domain: `cow.dev` is attached as a Custom Domain on the Worker, which requires the zone to be on Cloudflare.
- Manual deploy: `pnpm deploy` (after `npx wrangler login`).
