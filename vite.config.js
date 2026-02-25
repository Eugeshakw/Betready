import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    svgr({
      include: "**/*.svg",
    }),
    react(),
  ],
  base: '/main/',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    global: 'window',
  },
  optimizeDeps: {
    include: ['styled-components'],
  },
});
