# React + Vite quick guide [2025]

Using Vite documentation, easiest setup with React using Vite is using the `create-vite` option.

## 1. Create React template with create-vite

1. create the app basic template
```
$ npm create vite@latest <project-folder-name> -- --template react

//or
$ npm create vite@latest <project-folder-name>

- then follow the prompt and select React and etc...
```

*troubleshooting note*: the extra `--` for some reason is needed for **Windows environment**, else it will get stuck.

*note*

2. install the packages, go into the project folder
```
$ npm install
```

3. Now react x vite is ready out of the box
```
$ npm run dev
```


## 2. add Sass support

Simply install Sass to support it with vite. Restart and will work right away
```
$ npm install sass
```


## From Vite template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
