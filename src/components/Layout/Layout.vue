<!--  -->
<template>
    <!-- <div class="d2-layout-header-aside-group" :style="styleLayoutMainGroup" :class="{grayMode: grayActive}"> -->
    <div class="d2-layout-header-aside-group">
        <!-- 半透明遮罩 -->
        <div class="d2-layout-header-aside-mask"></div>
        <!-- 主体内容 -->
        <div class="d2-layout-header-aside-content" flex="dir:top">
            <!-- 顶栏 -->
            <!-- <div class="d2-theme-header" :style="{opacity: this.searchActive ? 0.5 : 1 }" flex-box="0" flex> -->
            <div class="d2-theme-header" flex-box="0" flex>
                <!-- <div class="logo-group" :style="{width: asideCollapse ? asideWidthCollapse : asideWidth}" flex-box="0">
                    <img v-if="asideCollapse" :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/icon-only.png`">
                    <img v-else :src="`${$baseUrl}image/theme/${themeActiveSetting.name}/logo/all.png`">
                </div> -->
                <div class="toggle-aside-btn" @click="handleToggleAside" flex-box="0">
                    <!-- <vs-icon name="bars" /> -->
                </div>
                <vs-menu-header flex-box="1" />
                <!-- 顶栏右侧 -->
                <div class="d2-header-right" flex-box="0">
                    <!-- 如果你只想在开发环境显示这个按钮请添加 v-if="$env === 'development'" -->
                    <!-- <vs-header-search @click="handleSearchClick" />
                    <vs-header-error-log />
                    <vs-header-fullscreen />
                    <vs-header-theme />
                    <vs-header-size />
                    <vs-header-user /> -->
                </div>
            </div>
            <!-- 下面 主体 -->
            <div class="d2-theme-container" flex-box="1" flex>
                <!-- 主体 侧边栏 -->
                <!-- <div flex-box="0" ref="aside" class="d2-theme-container-aside" :style="{width: asideCollapse ? asideWidthCollapse : asideWidth, opacity: this.searchActive ? 0.5 : 1 }"> -->
                <div flex-box="0" ref="aside" class="d2-theme-container-aside">
                    <!-- <vs-menu-side /> -->
                </div>
                <!-- 主体 -->
                <div class="d2-theme-container-main" flex-box="1" flex>
                    <!-- 搜索 -->
                    <transition name="fade-scale">
                        <!-- <div v-show="searchActive" class="d2-theme-container-main-layer" flex="dir:top">
                            <vs-panel-search ref="panelSearch" @close="searchPanelClose" />
                        </div> -->
                    </transition>
                    <!-- 内容 -->
                    <transition name="fade-scale">
                        <!-- <div v-show="!searchActive" class="d2-theme-container-main-layer" flex="dir:top"> -->
                        <div class="d2-theme-container-main-layer" flex="dir:top">
                            <!-- tab -->
                            <!-- <div class="d2-theme-container-main-header" flex-box="0">
                                <vs-tabs />
                            </div> -->
                            <!-- 页面 -->
                            <!-- <div class="d2-theme-container-main-body" flex-box="1">
                                <transition :name="transitionActive ? 'fade-transverse' : ''">
                                    <keep-alive :include="keepAlive">
                                        <router-view />
                                    </keep-alive>
                                </transition>
                            </div> -->
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'Layout',
    data() {
        return {}
    },
    components: {
        // 'vs-menu-side': () => import('./modules/menu-side'),
        'vs-menu-header': () => import('./modules/menu-header'),
        // 'vs-tabs': () => import('./modules/tabs'),
        // 'vs-header-fullscreen': () => import('./modules/header-fullscreen'),
        // 'vs-header-search': () => import('./modules/header-search'),
        // 'vs-header-size': () => import('./modules/header-size'),
        // 'vs-header-theme': () => import('./modules/header-theme'),
        // 'vs-header-user': () => import('./modules/header-user'),
        // 'vs-header-error-log': () => import('./modules/header-error-log')
    },
    computed: {
        // ...mapState('d2admin', {
        //     keepAlive: state => state.page.keepAlive,
        //     grayActive: state => state.gray.active,
        //     transitionActive: state => state.transition.active,
        //     asideCollapse: state => state.menu.asideCollapse
        // }),
        // ...mapGetters('d2admin', {
        //     themeActiveSetting: 'theme/activeSetting'
        // }),
        /**
         * @description 最外层容器的背景图片样式
         */
        // styleLayoutMainGroup() {
        //     return {
        //         ...this.themeActiveSetting.backgroundImage ? {
        //             backgroundImage: `url('${this.$baseUrl}${this.themeActiveSetting.backgroundImage}')`
        //         } : {}
        //     }
        // }
    },
    created() {},
    mounted() {
        this.$nextTick(function() {});
    },
    methods: {
        handleToggleAside() {}
    },
}

</script>
<style scoped></style>
