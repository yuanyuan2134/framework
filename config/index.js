'use strict'
// Template version: 1.2.6
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // proxyTable: {},

    // Various Dev Server settings

    // can be overwritten by process.env.HOST
    // if you want dev by ip, please set host: '0.0.0.0'
    host: '127.0.0.1',
    // host: '0.0.0.0',
    port: 9528, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,

    proxyTable: {
      '/mall-server/**': {
        target: 'http://10.12.52.44:8100',
        changeOrigin: true,
        pathRewrite: {
          '^/mall-server': '/admin'
        }
      },
      '/data-server/**': {
       // target: 'http://172.22.135.14:8080',
        //  target: 'http://172.22.134.133:8080',   //杨红超
      //  target: 'http://172.22.134.14:8080',
         // target: 'http://172.22.134.133:8080',   //杨红超
        // target: 'http://172.22.134.136:8080',   //王杰
        //target: 'http://172.22.135.124:8080',   //王杰
        //target: 'http://172.22.134.121:8080', //优惠券
        //target: 'http://172.22.135.125:8080', // 王浩
        //target: 'http://172.22.134.146:8090',
        //target: 'http://172.22.135.123:8080/',
        target: 'http://122.14.247.152:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/data-server': ''
        }
      },
      '/upload_server/**': {
        target: 'http://10.12.52.41:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/upload_server': ''
        }
      },
      '/upload_coupon_server/**': {
        target: 'http://172.22.134.121:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/upload_coupon_server': ''
        }
      },
    }
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',

    /**
     * You can set by youself according to actual condition
     * You will need to set this if you plan to deploy your site under a sub path,
     * for example GitHub pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then assetsPublicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     */
    assetsPublicPath: '/',

    /**
     * Source Maps
     */
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: 'source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build:prod --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report || false,

    // `npm run build:prod --generate_report`
    generateAnalyzerReport: process.env.npm_config_generate_report || false
  }
}
