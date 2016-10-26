/**
 * @fileoverview router
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-24
 */

var path = require('path')

module.exports = {
  entry: {
    'main': path.resolve(__dirname, './main.js')
  },

  output: {
    path: path.resolve(__dirname, './js'),
    publicPath: '/js/',
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue': 'vue/dist/vue'
    }
  },

  module: {
    loaders: [
      {
        // use vue-loader for *.vue files
        test: /\.vue$/,
        loader: 'vue'
      },

      {
        // use babel-loader for *.js files
        test: /\.js$/,
        loader: 'babel',
        // important: exclude files in node_modules
        // otherwise it's going to be really slow!
        exclude: /node_modules/,
        // query: {
        //   presets: ['es2015'],
        //   plugins: ['transform-runtime']
        // }
      },

      {
        // use css-loader for *.css files
        test: /\.css$/,
        loader: 'style!css'
      },

      // // the url-loader uses DataUrls.
      // // the file-loader emits files.
      // {
      //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'url-loader?limit=10000&minetype=application/font-woff'
      // },
      //
      // {
      //   test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'file-loader'
      // }
    ]
  },

  // if you are using babel-loader directly then
  // the babel config block becomes required.
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
}
