import util from '@/unit/util'

import Index from '@/components/Index'
import Login from '@/components/Login/Login'

import NotFound from '@/components/Error/NotFound'

import Layout from '@/components/Layout/Layout'


const routerConfig = [
    // 首页 必须 name:index
    {
        path: '/',
        name: 'index',
        layout: Layout,
        component: Index
    }
]

const routerConfigMenuOut = [
    // 登录
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    // 404
    {
        path: '*',
        component: NotFound
    }
]

// 导出全部路由设置
// 这个数据会在 router.js 中被扁平处理

export default util.recursiveRouterConfig([
    ...routerConfig,
    ...routerConfigMenuOut
])

// 导出参与多标签页处理的路由设置
// 这个数据会在 mian.js 中使用

export const frameInRoutes = util.recursiveRouterConfig(routerConfig).map(e => {
    const route = e.children ? e.children[0] : e
    return {
        path: e.path,
        name: route.name,
        hidden: route.hidden,
        meta: route.meta
    }
})
// console.log(frameInRoutes);
