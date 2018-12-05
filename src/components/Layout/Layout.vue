<!--  -->
<template>
    <div class="ve-layout" :style="LayoutStyle">
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
            <vs-menu-header />
            <vs-menu-sidebar />
            <vs-tabs />
                count: {{count}}
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import $store from '@/store/index'
export default {
    name: 'Layout',
    data() {
        return {
            LayoutStyle: ''
        }
    },
    components: {
        'vs-header-fullscreen': () => import('./modules/vs-header-fullscreen/vs-header-fullscreen'),
        'vs-header-search': () => import('./modules/vs-header-search/vs-header-search'),
        'vs-header-size': () => import('./modules/vs-header-size/vs-header-size'),
        'vs-header-theme': () => import('./modules/vs-header-theme/vs-header-theme'),
        'vs-header-user': () => import('./modules/vs-header-user/vs-header-user'),
        'vs-menu-header': () => import('./modules/vs-menu-header/vs-menu-header'),
        'vs-menu-sidebar': () => import('./modules/vs-menu-sidebar/vs-menu-sidebar'),
        'vs-tabs': () => import('./modules/vs-tabs/vs-tabs'),
    },
    computed: {
        ...mapState('VsAdmin', {
            shoplist: state => state.shoplist,
            fullscreen: state => state.fullscreen,
            fontSize: state => state.size,
            count: state => state.count
        }),
    },
    mounted() {},
    methods: {
    },
}

</script>
<style scoped></style>
