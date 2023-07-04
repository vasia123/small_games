import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    sourcemap: 'inline',
    outDir: 'dist',
  },
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
      '~': '/public',
    },
  },
});
