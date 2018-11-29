<!--  -->
<template>
  <div class="page">
    <p class="page_title">404 page not found</p>
    <el-button class="d2-mt" @click="$router.replace({ path: '/' })">
      返回首页
    </el-button>
  </div>
</template>
<script>
export default {
    name: 'NotFound',
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
<style lang="scss" scoped>
@import '~@/assets/css/public.scss';
.page {
  background: #303133;
  background-blend-mode: multiply,multiply;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .page_title {
    font-size: 20px;
    color: #FFF;
  }
}
</style>
