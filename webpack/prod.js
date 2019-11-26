const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { create, HTML_TEMPLATE } = require('./common')

module.exports = create({

  output: {
    filename: '[name].[contenthash].js'
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      inject: true,
      template: HTML_TEMPLATE
    })
  ],

  optimization: {
    minimizer: [new TerserPlugin()],
  },

})
