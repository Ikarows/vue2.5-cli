// 环境判断
export default {
  isApp () {
    const u = navigator.userAgent
    if (u.indexOf('Html5Plus/') > -1) {
      return true
    } else {
      return false
    }
  },
  device () {
    const u = navigator.userAgent
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    const isWecath = (u.match(/MicroMessenger/i) === 'micromessenger')
    if (isAndroid) {
      return 'android'
    } else if (isiOS) {
      return 'ios'
    } else if (isWecath) {
      return 'wechat'
    } else {
      return 'web'
    }
  }
}
