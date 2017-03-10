/**
 * @fileoverview router
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-24
 */

 var path = require('path')
 var webpack = require('webpack')

module.exports = {
  entry: {
    'main': path.resolve(__dirname, './main.js'),
    'main-for-amazeui': path.resolve(__dirname, './mainForAmazeUI.js'),
    'main-for-bootstrap': path.resolve(__dirname, './mainForBootstrap.js')
  },

  output: {
    path: path.resolve(__dirname, './js'),
    publicPath: '/js/',
    filename: '[name].bundle.js'
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // include: [
        //   path.resolve(__dirname, "app/styles"),
        //   path.resolve(__dirname, "vendor/styles")
        // ]
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
      // 'vue$': 'vue/dist/vue',
      'vue$': 'vue/dist/vue.esm.js',
      'cafeinit-vue': path.resolve(__dirname, '../dist/js/cafeinit-vue.amd.js'),
      'cafeinit-vue-amazeui': path.resolve(__dirname, '../dist/js/cafeinit-vue-amazeui.amd.js'),
      'cafeinit-vue-bootstrap': path.resolve(__dirname, '../dist/js/cafeinit-vue-bootstrap.amd.js'),
      'cafeinit-vue.css': path.resolve(__dirname, '../dist/css/cafeinit.css'),
      'ci-amazeui.css': path.resolve(__dirname, '../dist/css/ci-amazeui.css'),
      'ci-bootstrap.css': path.resolve(__dirname, '../dist/css/ci-bootstrap.css')
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
