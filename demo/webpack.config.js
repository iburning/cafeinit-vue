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
      'vue$': 'vue/dist/vue'
      // 'cafeinit-vue': path.resolve(__dirname, '../dist/js/cafeinit-vue.amd.js'),
      // 'cafeinit-vue-amazeui': path.resolve(__dirname, '../dist/js/cafeinit-vue-amazeui.amd.js'),
      'cafeinit-vue-bootstrap': path.resolve(__dirname, '../dist/js/cafeinit-vue-bootstrap.amd.js'),
      // 'cafeinit.css': path.resolve(__dirname, '../dist/css/cafeinit.css')
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

  devServer: {
    historyApiFallback: true,
    noInfo: true
  },

  // if you are using babel-loader directly then
  // the babel config block becomes required.
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
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
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
