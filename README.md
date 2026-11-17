# diego.mora — personal site + technical blog

A static site built with [Astro](https://astro.build) and TypeScript. Reversing-tool aesthetic
(debugger/disassembler): near-black background, amber accent, JetBrains Mono for headings and Inter
for body text. Dark mode by default with a toggle to light.

## Stack

- **Astro 7** + **TypeScript** (strict)
- **Content Collections** validated with **Zod**
- **Shiki** (dual themes `github-dark` / `github-light`) for highlighting C, C++, x86/x64 asm, Python and Bash
- **MDX**, **RSS**, **sitemap** and SEO / Open Graph meta tags
- Automatic deploy to **GitHub Pages** via GitHub Actions

## Requirements

- Node.js **>= 22.23** (24 recommended). `nvm use 24`.
- npm

## Run locally

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:4321
```

Other scripts:

```bash
npm run build    # type-check (astro check) and generate the site into dist/
npm run preview  # serve the production build locally
```

> In `npm run dev`, posts with `draft: true` **are** shown so you can preview them.
> In `npm run build` (production) they are excluded.

## Project structure

```
.
├── public/                 # served as-is at the root
│   ├── CNAME               # custom domain (edit it; see "Deploy")
│   ├── favicon.svg
│   ├── og-default.png      # default Open Graph image
│   └── images/avatar.svg   # ← replace with your photo
├── src/
│   ├── assets/covers/      # post covers (optimized by Astro)
│   ├── components/         # Header, PostCard, TableOfContents, CodeBlocks, ...
│   ├── content/blog/       # the posts in .md / .mdx
│   ├── content.config.ts   # Zod schema for the collection
│   ├── data/profile.ts     # content for the /profile page
│   ├── layouts/            # BaseLayout
│   ├── pages/              # site routes (see below)
│   ├── styles/             # global.css (tokens + theme) and prose.css
│   ├── utils/              # helpers for posts, dates and URLs
│   └── consts.ts           # title, socials, navbar and categories
├── astro.config.mjs        # site, base, Shiki, integrations
└── .github/workflows/deploy.yml
```

### Routes

| Route | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/blog` + pagination | `src/pages/blog/[...page].astro` |
| `/blog/<slug>` | `src/pages/blog/[slug].astro` |
| `/profile` | `src/pages/profile.astro` |
| `/categories` and `/categories/<cat>` | `src/pages/categories/` |
| `/tags` and `/tags/<tag>` | `src/pages/tags/` |
| `/rss.xml`, `/robots.txt`, `/404` | `src/pages/` |

## Create a new post

1. Create a file in `src/content/blog/`, e.g. `my-post.md` (or `.mdx`).
   The **file name is the URL slug**: `src/content/blog/my-post.md` → `/blog/my-post`.

2. Add the frontmatter (fields are validated by Zod; `category` must be one of the six):

```markdown
---
title: 'Post title'
date: 2026-11-16
description: 'A one or two sentence summary (used in listings, SEO and Open Graph).'
category: reversing            # reversing | pwn | ctf | important | announcement | personal
tags: ['x86-64', 'ghidra']     # optional
cover: '../../assets/covers/my-cover.png'   # optional
coverAlt: 'Alternative text'                # optional, recommended if there's a cover
draft: false                   # true = not published in production
---

Your content in Markdown. The `##` and `###` headings build the sidebar table of contents.

​```python
print("highlighted, with a copy button")
​```
```

> If the title contains an apostrophe, wrap it in double quotes (`title: "what I'd write"`) so the
> YAML parses correctly.

### Notes

- **Categories** (fixed): `reversing`, `pwn`, `ctf`, `important`, `announcement`, `personal`.
  A post in the `important` or `announcement` category appears **featured** on the home page
  (if there are several, the most recent one wins).
- **Covers**: put them in `src/assets/covers/`. Astro optimizes them and generates a 1200px PNG for Open Graph.
- **Reading time**: computed automatically.
- **Tags**: clickable and generate their own pages automatically.
- Language aliases ready to use: `nasm`/`x86`/`x64`/`gas` → asm, `sh` → bash, `py` → python.

## Customize

- **Who you are / socials / navbar / categories**: `src/consts.ts`.
- **Profile page** (bio, interests, skills, projects): `src/data/profile.ts`.
- **Photo**: replace `public/images/avatar.svg` with your photo (e.g. `avatar.jpg`) and update
  `SITE.avatar` in `src/consts.ts`.
- **Colors / theme**: CSS variables in `src/styles/global.css` (`:root` for dark,
  `:root[data-theme='light']` for light; includes a per-category color `--cat-<slug>`).

## Deploy to GitHub Pages

The workflow `.github/workflows/deploy.yml` builds and publishes on every push to `main`.

1. **Create the repo** and push the code:

   ```bash
   git init && git add -A && git commit -m "init"
   git branch -M main
   git remote add origin git@github.com:billyelcalvo/<repo>.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

3. Set the URL in **`astro.config.mjs`**:
   - **Custom domain** (or a `<user>.github.io` repo): `site` = your URL and `base: '/'`.
   - **Project repo** (a normal repo, no custom domain): `site: 'https://<user>.github.io'` and
     `base: '/<repo>'`.

4. **Custom domain** (optional):
   - Edit `public/CNAME` with your domain (replace `tudominio.com`).
   - Point your DNS to GitHub Pages and confirm it in Settings → Pages.
   - Keep `base: '/'`.
   - If you're **not** using a custom domain, delete `public/CNAME`.

Every push to `main` redeploys. You can also run it manually from the **Actions** tab
(*Deploy to GitHub Pages* workflow → *Run workflow*).
