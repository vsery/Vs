<!--  -->
<template>
    <div class='AdminEdit'></div>
</template>
<script>
export default {
    name: 'AdminEdit',
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