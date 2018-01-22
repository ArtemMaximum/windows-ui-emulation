const { resolve } = require('path')
const webpackMerge = require('webpack-merge')

const prodConf = require('./production')


module.exports = webpackMerge(prodConf, {
  target: 'node',
  entry: {
    generator: 'generate-static.js',
  },
  output: {
    path: resolve(__dirname, '..', 'gen'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: {
    chalk: 'require("chalk")',
  },
})
