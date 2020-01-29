const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const { create, HTML_TEMPLATE, PUBLIC } = require('./common')

module.exports = create({
  mode: 'development',
  devtool: 'eval-source-map',

  output: {
    path: PUBLIC,
    filename: '[name].js',
    publicPath: '/',
  },

  devServer: {
    inline:   true,
    port: 3000,
    contentBase: PUBLIC,
    historyApiFallback: true,
  },

  plugins: [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      inject: true,
      template: HTML_TEMPLATE,
    })
  ]

})
