import path from 'path';

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
