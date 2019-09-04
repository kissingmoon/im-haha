const path = require('path')
const webpack = require('webpack')
const Obfuscator = require('webpack-obfuscator')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isPro = process.env.NODE_ENV === 'production'

let Dlls = ['vue', 'bases', 'lodash', 'swiper']
let DllPlugins = Dlls.map(item => {
  return new webpack.DllReferencePlugin({
    context: process.cwd(),
    manifest: require(`./public/vendor/${item}-manifest.json`)
  })
})

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  chainWebpack(config) {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.plugins.delete('pwa')
    config.output.filename('[name]_[hash].js')
    config.output.chunkFilename('js/[name]_[hash].js')
  },
  configureWebpack: {
    plugins: [
      //new BundleAnalyzerPlugin(),
      ...DllPlugins,
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/*.js'),
        // dll 引用路径
        publicPath: '/vendor',
        // dll最终输出的目录
        outputPath: '/vendor'
      }),
      isPro &&
        new Obfuscator(
          {
            rotateUnicodeArray: true
          },
          []
        )
    ].filter(Boolean)
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
        // target: 'http://sport989.com/prod', 
        target: 'http://192.168.27.142:8199', 
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
// http://192.168.12.53:8199      代理接口 orea
// http://192.168.27.254:8199     代理接口 frank
// http://192.168.27.245:8199     代理接口 lanjie
