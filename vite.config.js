import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: './dist', // Specify the output directory, /dist is the default vite value
  },
  base: './', // or '/', vite default is '/'
});