# polymer-boilerplate

Simple polymer boilerplate that tries to use the better of the npm and bower world.
The app is built with webpack and use babel to compile ES6 files.

The only caveat of using this kind of build is that you have to do your import twice:
* one for the HTML imports
* one for the JS imports (those handled by webpack)

I am not developing actively this boilerplate anymore.

## Getting started
```
npm install
gulp
```

## Gulp tasks
This project comes with a set of gulp tasks:
* **serve**: Build and serve the app with browsersync
* **test**: run the test with webcomponent tester
* **lint**: run eslint and jscs
