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
        target: 'http://192.168.27.142:8199', //参考   https://cli.vuejs.org/zh/guide/mode-and-env.html
        // target: 'http://47.52.16.236:8199',
        // target: 'http://192.168.14.86:8199',//lanjie
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api' //代理的路径
        }
      }
    }
  }
}
