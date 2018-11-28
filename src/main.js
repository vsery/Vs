// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// https://element.faas.ele.me/#/zh-CN/component/installation

Vue.config.productionTip = false

import '@/assets/font/css/font-awesome.css' // 图标字体
// http://fontawesome.dashgame.com/#new

import '@/assets/css/animate.css' // 动画
// https://daneden.github.io/animate.css/

import env from '@/unit/env' // 环境配置
import vif from '@/unit/vif' // 校验方法
// import http from '@/unit/http' // 请求参数
// import config from '@/unit/config' // 配置参数 和 公共函数

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
