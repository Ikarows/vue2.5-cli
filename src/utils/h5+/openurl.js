/**
 * 唤起浏览器打开地址
 * @param {String}  url打开的页面地址
 */

/**
 * methods: {
    openurl() {
      if (window.plus) {
        openurl('http://www.baidu.com');
      }
    }
   }
 */

function openurl (url) {
  // eslint-disable-next-line
  plus.runtime.openURL(encodeURI(url))
}

export default openurl
