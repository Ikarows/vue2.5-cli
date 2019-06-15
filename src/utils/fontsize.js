// 设置根字体大小（rem）
export default (function () {
  const _self = window
  _self.width = 750 // 设置默认最大宽度
  _self.fontSize = 100 // 默认字体大小
  _self.widthProportion = function () {
    var device_width = document.getElementsByTagName('html')[0].offsetWidth
    var p = device_width / _self.width
    return p
  }
  _self.changePage = function () {
    var rem = _self.widthProportion() * _self.fontSize
    document.getElementsByTagName('html')[0].setAttribute('style', 'font-size:' + rem +
      'px !important')
  }
  _self.changePage()
  window.addEventListener('resize', function () {
    _self.changePage()
  }, false)
})()
