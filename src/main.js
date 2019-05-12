import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './utils/fontsize'
import './config/http'

// 解决ios click 300ms延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
