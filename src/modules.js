// Element UI
// https://element.faas.ele.me/#/zh-CN/component/installation
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// flex 布局库
// https://github.com/lzxb/flex.css/
import 'flex.css'

// 图标字体
// http://fontawesome.dashgame.com/#new
import '@/assets/font/css/font-awesome.css'

// 动画
// https://daneden.github.io/animate.css/
import '@/assets/css/animate.css'

Vue.config.productionTip = false

import env from '@/unit/env' // 环境配置
import vif from '@/unit/ver' // 校验方法
// import http from '@/unit/http' // 请求参数