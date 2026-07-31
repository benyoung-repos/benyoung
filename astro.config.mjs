// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// `site` is used to build absolute URLs in <meta> tags (og:url,
// og:image, canonical, sitemap). Set to the intended production
// domain — update when the real domain is confirmed and pointed
// at Vercel.
export default defineConfig({
  site: 'https://benyoung.me',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
