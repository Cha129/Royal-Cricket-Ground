import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'fs';

// Copy assets from Royal-Ground-Builder/attached_assets to src/assets on server load
const srcDir = path.resolve(__dirname, 'Royal-Ground-Builder/attached_assets');
const destDir = path.resolve(__dirname, 'src/assets');

if (existsSync(srcDir)) {
  if (!existsSync(destDir)) {
    mkdirSync(destDir, { recursive: true });
  }
  const files = readdirSync(srcDir);
  let count = 0;
  for (const file of files) {
    if (file.endsWith('.webp') || file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.svg')) {
      const srcFile = path.join(srcDir, file);
      const destFile = path.join(destDir, file);
      copyFileSync(srcFile, destFile);
      count++;
    }
  }
  console.log(`Successfully synced ${count} attached assets to src/assets!`);
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
