/**
 * @fileOverview webpack config
 * @author: burning <www.cafeinit.com>
 * @date: 2016-09-11
 */

var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    'cafeinit-vue': './src/js/main.js',
    'cafeinit-vue-amazeui': './src/js/mainForAmazeUI.js',
    'cafeinit-vue-bootstrap': './src/js/mainForBootstrap.js'
  },

  output: {
    path: './dist/js',
    filename: '[name].js',
    library: 'CafeinitVue',
    libraryTarget: 'var'  // Export by setting a variable: var Library = xxx (default)
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
