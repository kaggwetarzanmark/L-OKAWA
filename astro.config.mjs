// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Production site URL — update this once your domain is live
  site: 'https://lokawatours.com',

  // Fully static output — generates plain HTML files in dist/
  // Compatible with Cloudflare Pages static hosting (no adapter needed)
  output: 'static',
});
