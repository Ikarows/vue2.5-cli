/* eslint-disable */
/**
 * app内打开新窗口
 * @param {String} id 加载的页面地址，也用作窗口标识
 * @param {String} t 页面的标题
 * @param {String} d 文档页面文件名称（doc目录下），不传入则使用页面的标题
 */

/**
 * methods: {
    open() {
      if (window.plus) {
        webview('http://www.baidu.com', 'baidu');
      }
    }
   }
 */

let _openw = null
const as = 'pop-in'
function webview(id, t, d) {
  if (_openw) { return } // 防止快速点击
  const ws = {
    scrollIndicator: 'none',
    scalable: false,
    popGesture: 'close',
    backButtonAutoControl: 'close',
    titleNView: {
      autoBackButton: true,
      backgroundColor: '#D74B28',
      titleColor: '#CCCCCC'
    }
  }
  t && (ws.titleNView.titleText = t, d || (d = t.toLowerCase()))
  _openw = plus.webview.create(id, id, ws)
  _openw.addEventListener('loaded', () => { // 页面加载完成后才显示
    _openw && _openw.show(as, null, () => {
      _openw = null// 避免快速点击打开多个页面
    })
  }, false)
  _openw.addEventListener('hide', () => {
    _openw = null
  }, false)
  _openw.addEventListener('close', () => { // 页面关闭后可再次打开
    _openw = null
  }, false)
}

export default webview
