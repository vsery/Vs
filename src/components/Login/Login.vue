<!--  -->
<template>
    <div class='Login'>
        <div flex="dir:top main:center cross:center" class="page-login--content-main"><img src="/img/logo@2x.05fe4930.png" class="page-login--logo">
            <div class="page-login--form">
                <div class="el-card is-never-shadow">
                    <div class="el-card__body">
                        <form class="el-form el-form--label-top">
                            <div class="el-form-item is-required el-form-item--default">
                                <div class="el-form-item__content">
                                    <div class="el-input el-input--default el-input-group el-input-group--prepend">
                                        <div class="el-input-group__prepend"><i class="fa fa-user-circle-o"></i></div><input type="text" autocomplete="off" placeholder="用户名" class="el-input__inner">
                                    </div>
                                </div>
                            </div>
                            <div class="el-form-item is-required el-form-item--default">
                                <div class="el-form-item__content">
                                    <div class="el-input el-input--default el-input-group el-input-group--prepend">
                                        <div class="el-input-group__prepend"><i class="fa fa-keyboard-o"></i></div><input type="password" autocomplete="off" placeholder="密码" class="el-input__inner">
                                    </div>
                                </div>
                            </div>
                            <div class="el-form-item is-required el-form-item--default">
                                <div class="el-form-item__content">
                                    <div class="el-input el-input--default el-input-group el-input-group--append el-input-group--prepend">
                                        <div class="el-input-group__prepend">验证码</div><input type="text" autocomplete="off" placeholder="- - - -" class="el-input__inner">
                                        <div class="el-input-group__append"><img src="/img/login-code.10fef840.png" class="login-code"></div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="el-button button-login el-button--primary el-button--default"></button>
                        </form>
                    </div>
                </div>
                <p flex="main:justify cross:center" class="page-login--options"><span><i aria-hidden="true" class="fa fa-question-circle"></i> 忘记密码</span><span>注册用户</span></p>
                <button type="button" class="el-button page-login--quick el-button--info el-button--default">
                    <span>
            快速选择用户（测试功能）
          </span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
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
