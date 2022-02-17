// 环境判断
export default {
  ua () {
    const u = navigator.userAgent
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    const isWecath = (u.match(/MicroMessenger/i) === 'MicroMessenger')
    const isApp = u.indexOf('Html5Plus/') > -1
    if (isApp) {
      return 'app'
    } else if (isWecath) {
      return 'wechat'
    } else if (isAndroid) {
      return 'android'
    } else if (isiOS) {
      return 'ios'
    } else {
      return 'web'
    }
  }
}
