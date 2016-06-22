const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: './build',
    publicPath: '/build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: require.resolve('zepto/zepto.min.js'),
        loader: 'exports?window.$!script',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      R: 'ramda',
    }),
    new webpack.ProvidePlugin({
      $: 'zepto/zepto.min.js',
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    new webpack.ProvidePlugin({
      S: 'sanctuary',
    }),
    new webpack.ProvidePlugin({
      Task: 'data.task',
    }),
  ],
};
