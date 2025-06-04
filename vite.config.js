import { defineConfig } from 'vite';

import posthtml from '@vituum/vite-plugin-posthtml';
import VitePluginBrowserSync from 'vite-plugin-browser-sync';

export default defineConfig({
  build: {
    outDir: './dist', // Specify the output directory, /dist is the default vite value
  },
  base: './', // or '/', vite default is '/'
  // server: { port: 9001 }, // change vite server port
  plugins: [
    posthtml(),
    VitePluginBrowserSync()
  ],
});