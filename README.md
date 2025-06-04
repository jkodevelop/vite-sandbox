# VITE quick guide [2025]

This project is a quick quide to use Vite for basic configurations that is useful for a project.

## 1. install Vite and usages

Install package.
```
$ npm install -D vite
```

Running Vite
```
$ npx vite
```

## 2. Sass support

Vite just needs to have sass available to automatically support sass

Intall sass
```
npm install -D sass
```

## 3. config file

Vite does not need config file to start, default config file is `vite.config.js`

To specify a different file:
```
npx vite build --config vite.anotherconfig.js
```

source: https://vite.dev/config/

## 4. Code splitting

Code splitting in Vite is enabled by default. It will try to split code if it can. Using Dynamic Imports can be used to split the code.

example:
```
const math = await import('./math.js');
```

## 5. posthtml, templating

One useful plugin for html templating. 

1. install the plugin
```
npm i @vituum/vite-plugin-posthtml --save-dev
```

2. edit the config
```
import posthtml from '@vituum/vite-plugin-posthtml'
...
plugins: [posthtml()]
```

3. using this feature
```
<include src="src/tpl/tplA.html"></include>
```

## ADDITIONAL FEATURE: browser-sync

**Browser-sync** allows for project to run on mutiple browser windows and sychronize the user interactions across them. This is optional but useful for testing UI/UX on different type of screen and windows sizes.

Vite has plugin support for browser-sync, it's a proxy to the native vite server
1. install the plugin
```
npm install --save-dev vite-plugin-browser-sync
```

2. add `vite.onfig.js`

Browser-sync and devServer will both be running

simple setup, this works out of the box
```
import VitePluginBrowserSync from 'vite-plugin-browser-sync'
export default defineConfig({
  plugins: [VitePluginBrowserSync()]
});
```

Some sample options
```
plugins: [
  ...
  VitePluginBrowserSync({
  dev: {
    bs: {
      ui: {
        port: 8083,
      },
      port: 8080, // Explicitly set the port for BrowserSync
      notify: false,
    },
  },
})]
```

source: https://www.npmjs.com/package/vite-plugin-browser-sync



#### source

https://vite.dev/
