import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const spaLegalRoutesPlugin = () => ({
  name: 'spa-legal-routes-fallback',
  closeBundle() {
    const distDir = path.resolve(__dirname, 'dist');
    const indexHtmlPath = path.join(distDir, 'index.html');
    if (!fs.existsSync(indexHtmlPath)) return;

    const routes = ['privacy-policy', 'terms-of-service', 'data-deletion'];
    for (const route of routes) {
      const routeDir = path.join(distDir, route);
      fs.mkdirSync(routeDir, { recursive: true });
      fs.copyFileSync(indexHtmlPath, path.join(routeDir, 'index.html'));
    }
    fs.copyFileSync(indexHtmlPath, path.join(distDir, '404.html'));
  }
});

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), spaLegalRoutesPlugin()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
