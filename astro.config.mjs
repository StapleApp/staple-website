// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Sitenin canlı adresi. Deploy ederken kendi alan adınla değiştir.
// Sitemap ve kanonik URL'ler bu adresi kullanır.
export default defineConfig({
  site: 'https://staple.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
