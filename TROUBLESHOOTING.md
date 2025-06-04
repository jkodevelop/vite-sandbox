# TROUBLESHOOTING: Vite guide

## Browser-sync (vite-plugin-browser-sync)

Problem: Going to the browser-sync service scrolling in one screen doesn't affect the others that are connected. It jumps to the top of the page instead of following the scroll.

Solution: make sure `<!doctype html>` is in the html file.

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
    VitePluginBrowserSync({
      dev: {
        bs: {
          ui: {
            port: 8083, // default:
          },
          port: 8080, // Explicitly set the port for BrowserSync, default:
          notify: false,
        },
      },
    })
  ],
});