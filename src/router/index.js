import Vue from 'vue'
import Router from 'vue-router'
import VueDoc from '@/components/VueDoc'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由数据
import routes from './modules/routerConfig'

Vue.use(Router)

// export default new Router({
const router = new Router({
    mode: 'history',
    routes
    // routes: [{
    //     path: '/',
    //     name: 'VueDoc',
    //     component: VueDoc
    // }]
})

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
    NProgress.start()
    // console.log('beforeEach', to, from);
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
    // console.log('afterEach', to, from);
})
export default router
