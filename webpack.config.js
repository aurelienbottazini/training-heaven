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
      {
        test: /\.png$/,
        loader: 'url-loader',
        query: { mimetype: 'image/png' },
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
    new webpack.ProvidePlugin({
      Future: 'fluture',
    }),
    new webpack.ProvidePlugin({
      IO: 'fantasy-io',
    }),
    new webpack.ProvidePlugin({
      Bacon: 'baconjs',
    }),
    new webpack.ProvidePlugin({
      PF: 'pointfree-fantasy',
    }),
    new webpack.ProvidePlugin({
      Monoids: 'pointfree-fantasy/instances/monoids',
    }),
    new webpack.ProvidePlugin({
      Maybe: 'pointfree-fantasy/instances/maybe',
    }),
    new webpack.ProvidePlugin({
      FC: 'fantasy-combinators',
    }),
  ],
};
