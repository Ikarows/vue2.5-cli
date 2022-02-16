import cityLists from '@/utils/city'

// 手机号验证
function validatePhone (num) {
  return /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[01235678]|18[0-9]|19[1389])\d{8}$/.test(num)
}

// 密码验证
function validatePassword (num) {
  return /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(num)
}

// 去除首尾空格
function noBlank (str) {
  return str.replace(/^\s*|\s*$/g, '')
}
// 同步把data存在缓存之中
function setStorageSync (key, data) {
  try {
    return localStorage.setItem(key, JSON.stringify(data))
  } catch {
    return localStorage.setItem(key, data)
  }
}
// 同步从缓存之中读取对应key的信息
function getStorageSync (key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch {
    return localStorage.getItem(key)
  }
}
// 同步从缓存之中删除对应key的信息
function removeStorageSync (key) {
  localStorage.removeItem(key)
}

// 节流处理
let spareTime = true
function spare (fun) {
  if (spareTime === true) {
    clearTimeout(this.clearTime)
    fun()
    spareTime = false
    this.clearTime = setTimeout(() => {
      spareTime = true
    }, 3000)
  }
}

// 格式化时间
function formatDateTime (times, pattern) {
  var date = new Date(times)
  let fmt = 'yyyy-MM-dd hh:mm:ss'
  if (pattern) {
    fmt = pattern
  }

  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return fmt
}

// 不支持localStorage本地存储的情况处理
if (!window.localStorage) {
  /* eslint-disable no-extra-parens */
  Object.defineProperty(window, 'localStorage', new (function () {
    /* eslint-disable one-let */
    const aKeys = []; const oStorage = {}
    Object.defineProperty(oStorage, 'getItem', {
      value: function (sKey) { return sKey ? this[sKey] : null },
      writable: false,
      configurable: false,
      enumerable: false
    })
    Object.defineProperty(oStorage, 'key', {
      value: function (nKeyId) { return aKeys[nKeyId] },
      writable: false,
      configurable: false,
      enumerable: false
    })
    Object.defineProperty(oStorage, 'setItem', {
      value: function (sKey, sValue) {
        if (!sKey) { return }
        document.cookie = escape(sKey) + '=' + escape(sValue) + '; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/'
      },
      writable: false,
      configurable: false,
      enumerable: false
    })
    Object.defineProperty(oStorage, 'length', {
      get: function () { return aKeys.length },
      configurable: false,
      enumerable: false
    })
    Object.defineProperty(oStorage, 'removeItem', {
      value: function (sKey) {
        if (!sKey) { return }
        document.cookie = escape(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
      },
      writable: false,
      configurable: false,
      enumerable: false
    })
    this.get = function () {
      let iThisIndx
      for (const sKey in oStorage) {
        iThisIndx = aKeys.indexOf(sKey)
        if (iThisIndx === -1) {
          oStorage.setItem(sKey, oStorage[sKey])
        } else {
          aKeys.splice(iThisIndx, 1)
        }
        delete oStorage[sKey]
      }
      for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) { oStorage.removeItem(aKeys[0]) }
      for (let aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
        aCouple = aCouples[nIdx].split(/\s*=\s*/)
        if (aCouple.length > 1) {
          oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1])
          aKeys.push(iKey)
        }
      }
      return oStorage
    }
    this.configurable = false
    this.enumerable = true
  })())
}

/**
 * 验证身份证号码
 * @export
 * @param {Number} idCard 待判断的身份证号码
 * @returns {Boolean}
*/
function validateIdCard (idcard) {
  const vcity = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' }
  // 检查号码是否符合规范，包括长度，类型
  const isCardNo = function (obj) {
    const reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/

    if (reg.test(obj) === false) {
      return false
    }
    return true
  }
  // 取身份证前两位,校验省份
  const checkProvince = function (obj) {
    const province = obj.substr(0, 2)
    if (vcity[province] === undefined) {
      return false
    }
    return true
  }
  // 校验位的检测
  const checkParity = function (obj) {
    // 15位转18位
    obj = changeFivteenToEighteen(obj)
    const len = obj.length

    if (len === 18) {
      const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      let cardTemp = 0
      let valnum = ''
      for (let i = 0; i < 17; i++) {
        cardTemp += obj.substr(i, 1) * arrInt[i]
      }
      valnum = arrCh[cardTemp % 11]
      if (valnum === obj.substr(17, 1)) {
        return true
      }
      return false
    }
    return false
  }
  // 15位转18位身份证号
  const changeFivteenToEighteen = function (obj) {
    if (obj.length === 15) {
      const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      let cardTemp = 0
      obj = obj.substr(0, 6) + '19' + obj.substr(6, obj.length - 6)
      for (let i = 0; i < 17; i++) {
        cardTemp += obj.substr(i, 1) * arrInt[i]
      }
      obj += arrCh[cardTemp % 11]
      return obj
    }
    return obj
  }
  // 校验长度，类型
  if (isCardNo(idcard) === false) {
    return false
  }
  // 检查省份
  if (checkProvince(idcard) === false) {
    return false
  }
  // 检验位的检测
  if (checkParity(idcard) === false) {
    return false
  }
  return true
}

/**
 * 金额取两位小数
 * @export
 * @param {Number} val 金额
 * @returns {Number}
*/
function amount (val) {
  return Number(val).toFixed(2)
}

/**
 * 最低最高价格格式化
 * @export
 * @param {Number} salaryLow 金额
 * @param {Number} salaryHight 金额
 * @returns {String}
*/
function salary (salaryLow, salaryHight, type) {
  if (type === 3 || type === 1) {
    return salaryHight
  } else if (salaryLow && salaryHight) {
    return `${salaryLow}-${salaryHight}`
  } else if (salaryLow && !salaryHight) {
    return salaryLow
  } else if (!salaryLow && salaryHight) {
    return salaryHight
  }
}

/**
 * 根据省市区名称换取vant的code
 * @export
 * @param {Array} oldData (省、市、区)  ['广东省', '深圳市', '南山区']
 * @returns {Array}
*/

function getCityCode (oldData) {
  const provinceList = {}
  const cityList = {}
  const countyList = {}
  for (const val in cityLists) {
    if (val === 'province_list') {
      for (const data in cityLists[val]) {
        provinceList[data] = cityLists[val][data]
      }
    } else if (val === 'city_list') {
      for (const data in cityLists[val]) {
        cityList[data] = cityLists[val][data]
      }
    } else if (val === 'county_list') {
      for (const data in cityLists[val]) {
        countyList[data] = cityLists[val][data]
      }
    }
  }

  let provinceCode = ''
  let city = ''
  let county = ''
  const result = []

  if (oldData[0]) {
    for (const val in provinceList) {
      if (oldData[0] === provinceList[val]) {
        provinceCode = val
        break
      }
    }
    if (provinceCode) {
      result.push({ name: oldData[0], code: provinceCode })
    }
  }

  if (oldData[1]) {
    for (const val in cityList) {
      if (oldData[1] === cityList[val]) {
        city = val
        break
      }
    }
    if (city) {
      result.push({ name: oldData[1], code: city })
    }
  }

  if (oldData[2]) {
    for (const val in countyList) {
      if (oldData[2] === countyList[val]) {
        county = val
        break
      }
    }
    if (county) {
      result.push({ name: oldData[2], code: county })
    }
  }

  return result
}

/**
 * 验证银行卡号
 * @param {Number} card
*/

function checkBankCard (data) {
  const regExp = /^([1-9]{1})(\d{14}|\d{15}|\d{17}|\d{18})$/
  return regExp.test(data)
}

/**
 * 获取url参数
 * @export
 * @param {String} variable 参数名称
 * @returns {Boolean}
*/
function getUrl (variable) {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] === variable) { return pair[1] }
  }
  return (false)
}

function nowDate (date) {
  return date ? new Date(date) : new Date()
}

function formatDate (date, format) {
  if (!date) {
    return false
  }
  date = nowDate(date)

  const obj = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'W+': date.getDay()
  }
  const weeks = ['日', '一', '二', '三', '四', '五', '六']
  obj['W+'] = '周' + weeks[obj['W+']]
  if (new RegExp('(y+)').test(format)) {
    format = format.replace(RegExp.$1, obj['y+'])
  }
  for (const j in obj) {
    if (new RegExp('(' + j + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (obj[j]) : (('00' + obj[j]).substr(('' + obj[j]).length)))
    }
  }
  return format
}

export {
  validatePhone,
  validatePassword,
  setStorageSync,
  getStorageSync,
  removeStorageSync,
  spare,
  noBlank,
  formatDateTime,
  validateIdCard,
  amount,
  salary,
  getCityCode,
  checkBankCard,
  getUrl,
  formatDate
}
