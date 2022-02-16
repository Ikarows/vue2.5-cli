// 微信浏览器检查
export function isWx () {
  return Boolean(navigator.userAgent.match(/MicroMessenger/ig))
}

// 获取参数
export function getQueryString (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2]); return null
}

// 公众号初始化获取授权信息
export function initWxPay (appId) {
  console.log("getQueryString('code')", getQueryString('code'))
  if (!isWx()) return
  if (!getQueryString('code') || getQueryString('code') === undefined) {
    const redirectUri = encodeURI(window.location.href)
    window.location.href =
      'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appId + '&redirect_uri=' + redirectUri + '&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
  }
}

export function wxpay (data, callback) {
  if (typeof WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
    }
  } else {
    onBridgeReady(data, callback)
  }
}

export function onBridgeReady (payConfig, callback) {
  window.WeixinJSBridge.invoke(
    'getBrandWCPayRequest', payConfig,
    function (res) {
      if (res.err_msg === 'get_brand_wcpay_request:ok') {
        if (callback) callback()
        // 使用以上方式判断前端返回,微信团队郑重提示：
        // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
        // alert('成功')
      }
    }
  )
}
