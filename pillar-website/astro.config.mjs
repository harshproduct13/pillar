import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Pages that exist for the payment gateway but must not be indexed (D-48).
const NOINDEX = ['/cancellation-refund', '/shipping-exchange'];

export default defineConfig({
  site: 'https://www.pillarapp.site',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.some((p) => page.endsWith(p)) && !page.endsWith('/404'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
