/**
 * @fileOverview main
 * @author: burning <www.cafeinit.com>
 * @date: 2016-08-25
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import CafeinitVue from 'cafeinit-vue'
import CafeinitStyle from 'cafeinit.css'

Vue.use(VueRouter)
Vue.use(CafeinitVue.components)

var App = Vue.extend({})
var router = window.__router = new VueRouter()

router.map({
  '/': {
    component: require('./index.vue')
  },

  '/home': {
    component: require('./index.vue')
  },

  '/block': {
    component: require('./block.vue')
  },

  '/buttons': {
    component: require('./buttons.vue')
  },

  '/form': {
    component: require('./form.vue')
  },

  '/modals': {
    component: require('./modals.vue')
  },

  '/gallery': {
    component: require('./gallery.vue')
  },

  '/list': {
    component: require('./list.vue')
  },

  '/scroll-list': {
    component: require('./scrollList.vue')
  },

  '/tab-bar': {
    component: require('./tabBar.vue')
  },

  '/tree-nav': {
    component: require('./treeNav.vue')
  }
})

router.beforeEach((transition) => {
  // console.log('transition', transition)
  if (transition.to.path.indexOf('//') === 0) {
    location.href = transition.to.path.replace('//', '/')
  }
  else if (transition.to.path.indexOf('/http') === 0) {
    location.href = transition.to.path.replace('/http', 'http')
  }
  else {
    transition.next()
  }
})

router.start(App, '#app')
