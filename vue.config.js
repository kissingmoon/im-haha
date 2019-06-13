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
        //target: 'http://192.168.27.27:8199',//代理接口   lem
        //target: 'http://192.168.27.142:8199', //代理接口   frank
        target: 'http://47.52.16.236:8199',//代理接口   test
        //target: 'http://sport989.com/prod',//代理接口
        //target: 'http://dianjing.kpkqin.com/', //YG娱乐测试API地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' //代理的路径
        }
      }
    }
  }
}
