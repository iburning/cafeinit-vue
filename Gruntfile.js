/**
 * @fileOverview Gruntfile
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-16
 */


'use strict';

module.exports = function (grunt) {
  // require('time-grunt')(grunt);

  // Force use of Unix newlines
  grunt.util.normalizelf('\n');

  // grunt.file.setBase('../../');

  var config = {
    src: './src',
    dist: './dist'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: config,

    watch: {
      less: {
        files: '<%= config.src %>/less/**/*.less',
        tasks: ['less'],
        options: {}
      }
    },

    copy: {
      main: {
        expand: true,
        flatten: true,
        src: '<%= config.src %>/iconfont/*',
        dest: '<%= config.dist %>/css/iconfont/'
      },
      demo: {
        expand: true,
        flatten: true,
        src: '<%= config.src %>/iconfont/*',
        dest: './demo/iconfont/'
      }
    },

    less: {
      prodcution: {
        options: {
          compress: true,   // Compress output by removing some whitespaces.
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']}),
            // new (require('less-plugin-clean-css'))(cleanCssOptions)
          ]
        },
        files: [
          {
            '<%= config.dist %>/css/cafeinit.css': '<%= config.src %>/less/cafeinit.less',
            '<%= config.dist %>/css/ci-amazeui.css': '<%= config.src %>/less/ci-amazeui.less',
            '<%= config.dist %>/css/ci-bootstrap.css': '<%= config.src %>/less/ci-bootstrap.less'
          }
        ]
      },
      develompent: {
        options: {
          compress: false,   // Compress output by removing some whitespaces.
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']}),
            // new (require('less-plugin-clean-css'))(cleanCssOptions)
          ]
        },
        files: [
          {
            '<%= config.dist %>/css/cafeinit.css': '<%= config.src %>/less/cafeinit.less',
            '<%= config.dist %>/css/ci-amazeui.css': '<%= config.src %>/less/ci-amazeui.less',
            '<%= config.dist %>/css/ci-bootstrap.css': '<%= config.src %>/less/ci-bootstrap.less'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:prodcution']);
};
