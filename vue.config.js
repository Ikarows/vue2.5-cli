module.exports = {
  // 基本路径
  publicPath: './',
  assetsDir: 'public',
  indexPath: 'index.html',
  // 输出文件目录
  outputDir: 'dist',
  // 配置webpack开发服务功能
  css: { // loader
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/base.scss";`
      }
    }
  },
  configureWebpack: { // plugins
    plugins: [
    //   new UglifyJsPlugin({
    //     uglifyOptions: {
    //       compress: {
    //         warnings: false,
    //         drop_console: false,
    //         drop_debugger: false,
    //         pure_funcs: ['console.log']
    //       }
    //     }
    // })
    ]
  },
  devServer: {
    // 服务端压缩是否开启
    compress: true,
    // 配置服务端口号
    port: 8090,
    proxy: {
      '/api.php': {
        // target: 'http://t1088.youmitu.com/',
        // target: 'http://t1175.youmitu.com/',
        target: 'http://t1175.kakaapp.com/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api.php': '/api.php'
        }
      }
    }
  }
}
