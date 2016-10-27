/**
 * @fileoverview main
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-24
 */

import Vue from 'vue'
import CafeinitVue from 'cafeinit-vue-bootstrap'
import App from './App'

Vue.use(CafeinitVue.components)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
