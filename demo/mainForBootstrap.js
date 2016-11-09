/**
 * @fileoverview main
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-24
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import CafeinitVue from 'cafeinit-vue-bootstrap'
import CafeinitVueCss from 'cafeinit-vue.css'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(CafeinitVue.components)

const router = new VueRouter({
  // mode: 'history',
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router
}).$mount('#app')
