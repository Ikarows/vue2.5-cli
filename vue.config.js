const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
  // 基本路径
  publicPath: './',
  assetsDir: 'public',
  indexPath: 'index.html',
  // 输出文件目录
  outputDir: 'dist',
  css: { // loader
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/base.scss";`
      }
    }
  },
  // 去除打包后生成的map文件
  productionSourceMap: false,
  // 移除 prefetch 插件
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
  configureWebpack: config => {
    [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: true // 生产环境自动删除console
          },
          warnings: false
        },
        sourceMap: false,
        parallel: true // 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
      }),

      // gzip
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
  /* devServer: {
    // 服务端压缩是否开启
    compress: true,
    // 配置服务端口号
    port: 8090,
    proxy: {
      '/api.php': {
        target: 'https://v1.hitokoto.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api.php': '/api.php'
        }
      }
    }
  }*/
}
