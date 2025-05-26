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



#### source

https://vite.dev/
