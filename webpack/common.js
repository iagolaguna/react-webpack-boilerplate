const { join } = require('path')
const { createAlias } = require('./functions')
const { compilerOptions } = require('../tsconfig.json')

// Constants
const HTML_TEMPLATE = join(__dirname, '..', 'public', 'index.html')
const PUBLIC = join(__dirname, '..', 'public')

// Loaders
const babelLoader = {
  test: /\.(js|ts|tsx)$/,
  exclude: /node_modules/,
  use: { loader: 'babel-loader' },
}

const htmlLoader = {
  test: /\.html$/,
  use: { loader: 'html-loader' },
}

const fileLoader = {
  test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
  use: 'file-loader',
}

const create = config => ({
  ...config,
  target: 'web',

  module: {
    rules: [
      babelLoader,
      htmlLoader,
      fileLoader
    ]
  },

  resolve: {
    modules: ['src', 'node_modules'],

    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    
    alias: createAlias(compilerOptions.paths)
  }

})


module.exports = {
  // Constants
  HTML_TEMPLATE,
  PUBLIC,

  // Functions
  create
}
