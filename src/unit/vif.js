import Vue from 'vue'

// 手机号
Vue.prototype.VerPhone = function(res) {
  const phone = /^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;
  if (!phone.test(res)) {
    return false;
  }
  return true;
}

// 数字
Vue.prototype.VerNumber = function(res) {
  const number = /^[0-9]*$/;
  if (!number.test(res)) {
    return false
  }
  return true
}

// 电子邮箱
Vue.prototype.VerEmail = function(res) {
  const email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
  if (email.test(res)) {
    return false
  }
  return true
}

// 中文
Vue.prototype.VerChinese = function(res) {
  const chinese = /[^ ^\u4e00-\u9fa5]+$/;
  if (!chinese.test(res)) {
    return false
  }
  return true
}
