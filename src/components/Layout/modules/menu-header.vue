<!--  -->
<template>
    <div class='menu-header'>
        menu-header
        <!-- <div class="d2-theme-header-menu" ref="page" :class="{'is-scrollable': isScroll}" flex="cross:center">
            <div class="d2-theme-header-menu__content" ref="content" flex-box="1" flex>
                <div class="d2-theme-header-menu__scroll" ref="scroll" flex-box="0" :style="'transform: translateX(' + currentTranslateX + 'px);'">
                    <el-menu mode="horizontal" :default-active="active" @select="handleMenuSelect">
                        <template v-for="(menu, menuIndex) in header">
                            <d2-layout-header-aside-menu-item v-if="menu.children === undefined" :menu="menu" :key="menuIndex" />
                            <d2-layout-header-aside-menu-sub v-else :menu="menu" :key="menuIndex" />
                        </template>
                    </el-menu>
                </div>
            </div>
            <div v-if="isScroll" class="d2-theme-header-menu__prev" flex-box="0" @click="scroll('left')" flex="main:center cross:center">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div v-if="isScroll" class="d2-theme-header-menu__next" flex-box="0" @click="scroll('right')" flex="cross:center">
                <i class="el-icon-arrow-right"></i>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    name: 'menu-header',
    data() {
        return {}
    },
    beforeRouteEnter(to, from, next) {
        next();
        // console.group('在渲染该组件的对应路由被 confirm 前调用');
    },
    created() {},
    mounted() {
        this.$nextTick(function() {});
    },
    methods: {},
    beforeDestroy() {
        // console.group('销毁前状态  ===============>> beforeDestroy');
    },
    beforeRouteLeave(to, from, next) {
        next();
        // console.group('离开该组件的对应路由时调用');
    },
}

</script>
<style scoped></style>
