# React TypeScript Styled components Webpack setup

This repository is a demo of how to set up and configure a React TypeScript styled components application with Webpack.

## Get started

Clone the repository, navigate to the project directory, and install the necessary packages. Run the `start` script to spin up a local dev server and open the app in your default browser.

```bash
$ git clone https://github.com/Ayon95/webpack-react-ts-styled-components.git
$ cd webpack-react-ts-styled-components
$ npm install
$ npm start
```

## Available scripts

- check-types
- start
- build

```bash
# runs the app in development mode
$ npm start
# runs TypeScript compiler in watch mode
$ npm run check-types
# generates a production build
$ npm run build
```

## Babel for transpiling, TypeScript for type checking

This application is set up in a way such that Babel is used for converting TypeScript code to JavaScript instead of relying on TSC (TypeScript compiler). TypeScript is only used for type checking here. I did this only because I wanted to learn how to combine Babel and TypeScript so that you can take advantage of both their features.

If you want to use TSC, you have to install ts-loader and specify it in your Webpack config file to handle TypeScript files.

I did not set up this project to handle generating declaration files (.d.ts files) by TypeScript. If you need to emit .d.ts files, check out these resources:

- [Babel with TypeScript](https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html)
- [GitHub - microsoft/TypeScript-babel-starter](https://github.com/microsoft/TypeScript-Babel-Starter)

## Required packages

Various packages related to React, TypeScript, styled components, Webpack, and Babel are required

### React

The core react and react-dom packages, and react-refresh package for fast refresh (hot reloading)

- react
- react-dom
- react-refresh (dev dependency)

### TypeScript

The core typescript package and various type definitions for other libraries. These packages are dev dependencies.

- typescript
- @types/react
- @types/react-dom
- @types/styled-components

### Styled components

The core styled-components package.

- styled-components

### Babel

The core Babel package and other necessary plugins and presets. These packages are dev dependencies.

- @babel/core
- @babel/preset-env
- @babel/preset-react
- @babel/preset-typescript
- babel-plugin-styled-components

### Polyfilling

The core-js package provides polyfills for Babel to use.

- core-js

### Webpack

The core webpack package and other related packages, plugins, and loaders. These packages are dev dependencies.

- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge
- babel-loader
- html-webpack-plugin
- @pmmmwh/react-refresh-webpack-plugin
