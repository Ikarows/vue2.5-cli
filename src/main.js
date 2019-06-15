import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'
import './utils/fontsize'
import './config/http'

// 解决ios click 300ms延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

import 'vant/lib/index.css'
import { Popup } from 'vant'
Vue.use(Popup)

// 环境的切换
if (process.env.VUE_APP_SECRET === 'development') {
  // 开发环境
  axios.defaults.baseURL = 'https://api.imjad.cn'
} else if (process.env.VUE_APP_SECRET === 'tests') {
  // 测试环境
  axios.defaults.baseURL = 'https://api.imjad.cn'
} else if (process.env.VUE_APP_SECRET === 'production') {
  // 生产环境
  axios.defaults.baseURL = 'https://api.imjad.cn'
} else if (process.env.VUE_APP_SECRET === 'apps') {
  // app 环境
  axios.defaults.baseURL = 'https://api.imjad.cn'
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
