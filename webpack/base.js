const { resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const Package = require('../package.json')


// const publicPath = resolve(__dirname, '..', 'static')

module.exports = {
  name: 'task-manager',
  context: resolve(__dirname, '..', 'src'),
  target: 'web',
  
  entry: {
    index: [],
    polyfill: [
      'babel-polyfill',
    ],
  },
  
  output: {
    path: resolve(__dirname, '..', 'dist'),
    filename: 'js/[name]-[hash].js',
    publicPath: '/',
    pathinfo: false,
  },
  
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [
      resolve(__dirname, '..', 'src'),
      resolve(__dirname, '..', 'src', 'components'),
      'node_modules',
    ],
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/bower_components/, /node_modules/, /styles/],
        loader: 'babel-loader',
        include: resolve(__dirname, '..', 'src'),
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|jpe?g|png)$/,
        loader: 'url-loader?limit=25000',
        query: {
          limit: 10000,
          name: 'static/media/images/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader?removeTags',
      // },
      {
        test: /rsa\.pub$/,
        use: 'text-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        query: {
          name: 'static/media/files/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['airbnb'],
            },
          },
          {
            loader: 'react-svg-loader',
            query: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  
  plugins: [
    new HtmlPlugin({
      template: resolve(__dirname, '..', 'src', 'index.html'),
      version: Package.version,
    }),
  ],
}
