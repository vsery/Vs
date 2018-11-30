// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import modules from './modules'

Vue.config.productionTip = false

import env from '@/unit/env' // 环境配置
import vif from '@/unit/ver' // 校验方法
// import http from '@/unit/http' // 请求参数

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
