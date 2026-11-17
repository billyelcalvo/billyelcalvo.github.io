// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Public site URL. Change it when you connect your own domain
// (and update public/CNAME with the same domain).
const SITE = 'https://billyelcalvo.github.io';

// If you deploy to a repo that is NOT <user>.github.io and without a custom domain,
// set the repo name here, e.g. '/blog'. With a custom domain leave it as '/'.
const BASE = '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        dark: 'github-dark',
        light: 'github-light',
      },
      defaultColor: false,
      wrap: false,
      langAlias: {
        nasm: 'asm',
        x86: 'asm',
        x64: 'asm',
        x86asm: 'asm',
        gas: 'asm',
        sh: 'bash',
        py: 'python',
      },
    },
  },
});
