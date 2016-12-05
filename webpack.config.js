/**
 * @fileOverview webpack config
 * @author: burning <www.cafeinit.com>
 * @date: 2016-09-11
 */

var path = require('path')
var webpack = require('webpack')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    'cafeinit-vue': './src/js/main.js',
    // 'cafeinit-vue-amazeui': './src/js/mainForAmazeUI.js',
    // 'cafeinit-vue-bootstrap': './src/js/mainForBootstrap.js'
  },

  output: {
    path: './dist/js',
    filename: '[name].js',
    library: 'CafeinitVue',
    libraryTarget: 'var'  // Export by setting a variable: var Library = xxx (default)
  },

  module: {
    loaders: [
      {
        // use vue-loader for *.vue files
        test: /\.vue$/,
        loader: 'vue',
        options: {
          // vue-loader options go here
        }
      },

      {
        // use babel-loader for *.js files
        test: /\.js$/,
        loader: 'babel',
        // important: exclude files in node_modules
        // otherwise it's going to be really slow!
        exclude: /node_modules/
      },

      {
        // use css-loader for *.css files
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },

  devtool: '#eval-source-map',

  // if you are using babel-loader directly then
  // the babel config block becomes required.
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  // plugins: [new BundleAnalyzerPlugin()]
}
