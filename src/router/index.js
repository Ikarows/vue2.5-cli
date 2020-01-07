import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history', // hash
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home'),
      meta: { title: '首页' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About'),
      meta: { title: '关于我们' }
    }
  ],
  // 解决 vue 进入页面滚动条位置不在顶部问题
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
