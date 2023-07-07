import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    sourcemap: 'inline',
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        custom: './hre3856hdfgl.html' // Rename 'index.html' to 'newindex.html'
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
