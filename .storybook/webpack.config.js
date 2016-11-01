const path = require('path');

const BASE_CSS_LOADER = 'css?sourceMap&-minimize';

module.exports = {
  module: {
    entry: {
      app: ['bootstrap-loader']
    },
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style',
          BASE_CSS_LOADER,
          'postcss',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.css?$/,
        loaders: [
          'style',
          BASE_CSS_LOADER,
          'postcss'
        ],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /bootstrap-sass(\\|\/)assets(\\|\/)javascripts(\\|\/)/,
        loader: 'imports?jQuery=jquery'
      }
    ]
  }
}