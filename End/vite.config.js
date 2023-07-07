import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    sourcemap: 'inline',
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        custom: './l43587y546i.html' // Rename 'index.html' to 'newindex.html'
      }
    }
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
