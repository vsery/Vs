<!--  -->
<template>
    <div class="ve-layout" :style="styleLayoutMainGroup" :class="{ grayMode: grayActive }">
        <div class="vs-layout-header">
            <div class="vs-header-sys">
                <vs-header-fullscreen />
                <vs-header-search />
                <vs-header-size />
                <vs-header-theme />
                <vs-header-user />
            </div>
        </div>
        <div class="vs-layout-container">
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'Layout',
    data() {
        return {
            styleLayoutMainGroup: '',
            grayActive: '',
        }
    },
    components: {
        'vs-header-fullscreen': () => import('./modules/vs-header-fullscreen/vs-header-fullscreen'),
        'vs-header-search': () => import('./modules/vs-header-search/vs-header-search'),
        'vs-header-size': () => import('./modules/vs-header-size/vs-header-size'),
        'vs-header-theme': () => import('./modules/vs-header-theme/vs-header-theme'),
        'vs-header-user': () => import('./modules/vs-header-user/vs-header-user'),

        'vs-menu-header': () => import('./modules/vs-menu-header/vs-menu-header'),
        'vs-menu-side': () => import('./modules/vs-menu-sidebar/vs-menu-sidebar'),

        'vs-tabs': () => import('./modules/vs-tabs/vs-tabs'),
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
