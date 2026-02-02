/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // You can add any Tailwind CSS customizations here Fonts, colors, etc.
    },
  },
  plugins: [    
    require('@tailwindcss/typography'),
  ],
};