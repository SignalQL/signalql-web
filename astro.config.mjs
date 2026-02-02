import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://signalql.io',
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  integrations: [tailwind()],
});