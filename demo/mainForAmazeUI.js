/**
 * @fileoverview main
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-24
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import CafeinitVue from 'cafeinit-vue-amazeui'
import CafeinitVueCss from 'ci-amazeui.css'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(CafeinitVue.components)

const router = new VueRouter({
  // mode: 'history',
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router,

  data() {
    return {
      appSize: {
        width: window.screen.width,
        height: window.screen.height
      }
    }
  }
}).$mount('#app')
