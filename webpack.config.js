'use strict';

module.exports = {
  entry: "./src/main.js",
  output: {
      path: 'build',
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        test: /.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
