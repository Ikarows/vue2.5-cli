import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import './config/http'
import './utils/fastclick.config' // ios 300ms click
import '@vant/touch-emulator' // vant 桌面端使用
import 'lib-flexible/flexible' // 淘宝布局适配
import ua from '@/utils/ua'

import 'vant/lib/index.css'
import { Popup } from 'vant'
Vue.use(Popup)

axios.defaults.baseURL = 'https://v1.hitokoto.cn'

Vue.config.productionTip = false
Vue.prototype.$ua = ua

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
