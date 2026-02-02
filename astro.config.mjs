import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

export default defineConfig({
  site: 'https://signalql.io',

  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },

  integrations: [tailwind()],

  adapter: node({
    mode: 'standalone',
  }),
});