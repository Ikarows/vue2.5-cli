// 浏览器判断
function itUserAgent() {

	var ua = window.navigator.userAgent.toLowerCase();
	// console.log("浏览器判断", ua);

	let index = ua.lastIndexOf("\/");
	let latUa = ua.substring(index + 1, ua.length);
	// console.log("浏览器判断", latUa);

	let arr = latUa.split('.');
	if (ua.match(/android\//i) == 'android/') {
		return 'android'
	} else if (ua.match(/native_ios/i) == 'native_ios') {
		return 'ios';
	} else if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return 'wechat';
	} else {
		// return 'android';
		return 'web';
	}
}

export default itUserAgent()
