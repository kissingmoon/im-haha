const path = require('path')
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  publicPath: '/',
  chainWebpack(config) {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
  configureWebpack: {
    plugins: [
      // new BundleAnalyzerPlugin()
    ]
  },
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/style/less/*.less')]
    }
  },
  devServer: {
    proxy: {
      '/api': {
        //target: 'http://192.168.27.27:8199',//代理接口   lem
        target: 'http://192.168.27.142:8199', //代理接口   frank
        //target: 'http://47.52.16.236:8199',//代理接口   test
        //target: 'http://sport989.com/prod',//代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' //代理的路径
        }
      }
    }
  }
}
