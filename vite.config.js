import { defineConfig } from 'vite';

import posthtml from '@vituum/vite-plugin-posthtml'

export default defineConfig({
  build: {
    outDir: './dist', // Specify the output directory, /dist is the default vite value
  },
  base: './', // or '/', vite default is '/'
  plugins: [posthtml()],
});