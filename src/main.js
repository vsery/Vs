// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vue
import Vue from 'vue'
import App from './App'

// store
import store from '@/store/index'

// Vue 路由
import router from './router'

// 引入模块
import modules from './modules'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
