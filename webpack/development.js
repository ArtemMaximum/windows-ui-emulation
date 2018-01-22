const { resolve } = require('path')
const {
  LoaderOptionsPlugin,
  HotModuleReplacementPlugin,
  NamedModulesPlugin,
  DefinePlugin,
} = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./base')


module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
  entry: {
    index: [
      'react-hot-loader/patch',
      './application',
    ],
  },
  module: {
    rules: [],
  },
  plugins: [
    new LoaderOptionsPlugin({
      minimize: false,
      debug: true,
    }),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, '..', 'static'),
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    overlay: true,
    stats: {
      colors: true,
      version: true,
    },
    port: 4000,
    publicPath: '/',
  },
})
