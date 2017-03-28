var path = require('path');

module.exports = {
  entry: './src/index.js',

  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          rules: {
            semi: [2, 'never'],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-2'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'washi.js',
    library: 'Washi',
    libraryTarget: 'window'
  },
};