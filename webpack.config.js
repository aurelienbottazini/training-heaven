module.exports = {
  entry: './src/app.js',
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
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
};
