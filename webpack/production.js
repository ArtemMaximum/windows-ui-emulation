const { resolve } = require('path')
const {
  LoaderOptionsPlugin,
  DefinePlugin,
  optimize: {
    UglifyJsPlugin,
  },
} = require('webpack')
const webpackMerge = require('webpack-merge')
const AssetsPlugin = require('assets-webpack-plugin')

const commonConfig = require('./base')


module.exports = webpackMerge(commonConfig, {
  entry: {
    index: [
      './service-worker-register',
      './application',
    ],
  },
  module: {
    rules: [],
  },
  plugins: [
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        warnings: false,
        screw_ie8: true,
      },
      comments: false,
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      fullPath: false,
    }),
  ],
})
