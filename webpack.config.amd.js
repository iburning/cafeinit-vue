/**
 * @fileOverview webpack config
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-26
 */

var config = require('./webpack.config.js');

config.output = {
  path: './dist/js',
  filename: '[name].amd.js',
  library: 'CafeinitVue',
  libraryTarget: 'amd'  // Export to AMD (optionally named - set the name via the library option)
  // libraryTarget: 'umd'  // Export to AMD, CommonJS2 or as property in root
}

module.exports = config;
