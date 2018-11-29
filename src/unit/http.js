import Vue from 'vue'
import Axios from 'axios'
Vue.prototype.$http = Axios

import { MessageBox, Indicator, Toast } from 'mint-ui';

// request 请求 拦截器
Axios.interceptors.request.use(
    function(config) {
        config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

        const params = config.params;
        for (const i in params) {
            const reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
            const val = params[i];
            if (reg.test(val)) {
                params[i] = encodeURI(val);
            }
        }
        config.data = config.params;

        if (config.method == 'get') {
            // var token = sessionStorage.getItem('token');
            // if (token) {
            //     if ((!config.params) || ((config.params != undefined) && (!config.params.token))) {
            //         var customerCode = sessionStorage.getItem('customerCode');
            //         if (!config.params) {
            //             config.params = { 'token': token, 'customerCode': customerCode };
            //         } else {
            //             config.params.token = token;
            //             config.params.customerCode = customerCode;
            //         }
            //     }
            // }            
        }
        if (config.method == 'post') {
            if (config.data.formData == undefined) {
                config.data = hendleParams(config.data);
            } else {
                var formData = config.data.formData;
                //需要参数中传token和customerCode
                // var token2 = formData.get('token'); 
                // var token = localStorage.getItem('token');
                // if(token == null) { //&& token2 == null
                //     var customerCode = JSON.parse(localStorage.getItem('userInfo')).customerCode;
                //     formData.append('token', token);
                //     formData.append('customerCode', customerCode);
                // }
                config.data = formData;
            }
        }
        return config;
    }

    function(error) {
        return Proise.reject(error)
    }
)

// response 响应 拦截器
Axios.interceptors.response.use(
    function(response) {
        if (response.data == '' || response.data == null) {
            Vue.$toast('网络慢,请稍后..再访问');
        }
        var resData = response.data;
        var resultInfo = resData.resultInfo;
        if (resultInfo.code != '0000') {
            if (resultInfo.description == '') {
                Toast('网络错误...');
                return;
            }
            if (resultInfo.code == '8888' && resultInfo.description == '登录已失效，请重新登录') {
                window.sessionStorage.clear(); //清空缓存
                Toast(resultInfo.description);
                // sessionStorage.setItem('invalidPageFullPath', VueApp.$route.fullPath);  //存储失效页面的完整域名路径
                // VueApp.$router.push({ name: 'Login'});
                return false;
            }
            // if (resultInfo.code == 'BC0001' && resultInfo.description == '客户信息不存在') { //客户信息不存在
            //     Toast(resultInfo.description);
            //     localStorage.clear();
            //     VueApp.$router.push({ name: 'Login'});
            //     location.href = '/login';
            //     return false;
            // }
            if (resultInfo.code == 'BC0001' && resultInfo.description == '商品（产品）ID信息不存在') { //商品信息不存在
                location.href = '/goodsExpired';
                return false;
            }
            if (resultInfo.code == '9998' && resultInfo.description == '支付密码错误次数过多,请稍后再试') { //支付次数过多
                Toast(resultInfo.description);
                return resultInfo;
            }
            if (resultInfo.code == '9998' && resultInfo.description == '支付密码错误，请重试!') { //支付密码错误（升级商品购买）
                Toast(resultInfo.description);
                return '支付密码错误';
            }
            if (resultInfo.code == '9998' && resultInfo.description == '登录失败！登录手机号或密码错误！') { //登录手机号或密码错误
                return '账号或密码错误';
            }
            if (resultInfo.code == '9998' && resultInfo.description == '该商品已下架！') { //商品过期、下架、删除
                return '商品过期';
            }
            if (resultInfo.code == 'BC0091' && resultInfo.description == '请绑定手机号码') { //商品过期、下架、删除
                VueApp.$router.push({ name: 'BindMobile' });
            }
            Toast(resultInfo.description);
            return false;
        }
        var successData = resData.data;
        if (successData == 0) { successData = 'success' }
        return successData;
    }

    function(error) {
        return Proise.reject(error)
    }
)
