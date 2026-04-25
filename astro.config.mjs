import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/D1919',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
