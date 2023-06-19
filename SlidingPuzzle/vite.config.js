import { defineConfig } from 'vite';

export default defineConfig({
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
    },
  },
});
