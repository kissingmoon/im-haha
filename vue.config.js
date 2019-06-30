const path = require('path')
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  chainWebpack(config) {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.plugins.delete('pwa')
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
    port: 8080,
    proxy: {
      '/api': {
        // target: 'http://192.168.27.142:8199', //参考   https://cli.vuejs.org/zh/guide/mode-and-env.html
        target: 'http://47.52.16.236:8199',
        // target: 'http://192.168.27.23:8199',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' //代理的路径
        }
      }
    }
  }
}
// http://47.52.16.236:8199       代理接口 测试
// http://sport989.com/prod       代理接口 线上
// http://192.168.27.207:8199     代理接口 abu
// http://192.168.27.27:8199      代理接口 lem
// http://192.168.12.25:8199      代理接口 orea
// http://192.168.27.142:8199     代理接口 frank