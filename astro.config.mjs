import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // site нужен для генерации sitemap и правильных канонических ссылок
  site: 'https://signalql.io',
  
  // По умолчанию output: 'static', поэтому это поле можно не писать,
  // но для ясности оставим его как подтверждение Варианта Б.
  output: 'static',

  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
    // Shiki (подсветка синтаксиса) включена по умолчанию
  },

  integrations: [
    tailwind({
      // Если ты хочешь использовать вложенные CSS файлы
      applyBaseStyles: true,
    })
  ],
});