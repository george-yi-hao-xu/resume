import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  publicDir: false,
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'style.css';
          }

          return '[name][extname]';
        },
      },
    },
  },
});
