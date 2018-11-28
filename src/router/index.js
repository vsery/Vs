import Vue from 'vue'
import Router from 'vue-router'
import VueDoc from '@/components/VueDoc'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'VueDoc',
    component: VueDoc
  }]
})
