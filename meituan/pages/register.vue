<template>
  <div class="container">
    <header>
      <!-- <div class="logo"></div> -->
      <!-- <img src="/image/logo.png" alt="logo"> -->
      <span >已有账号?</span>
      <button>登录</button>
    </header>
    <main>
      <fm-form>
        <!-- <label for="phone">手机号</label>
        <input type="text" name="phone"> -->
       
        <fm-input label="手机号码" :rule="rule" name="phone" /><br>
        
        <div>{{ phoneNumber }}</div>
        <label for="verifycode">短信动态验证码</label>
        <input type="text" name='verifycode'>
        <button>获取短信验证码</button>

        <label for="password">创建密码</label>
        <input type="password" name="password">

        <label for="password2">确认密码</label>
        <input type="password" name="password2">

        <button>同意以下协议并注册</button>
      </fm-form>>
      <a href="#" class="protocol">用户服务协议</a><a href="#" class="protocol">用户隐私协议</a>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import FmForm from '~/components/common/form-items/fm-form.vue'
import FmInput from '~/components/common/form-items/fm-input.vue'
@Component({
  layout: 'blank',
  components: {
    FmForm,
    FmInput
  }
})
export default class Register extends Vue {
  phoneNumber: number | string = ''
  rule = {required: true, type: 'phone', max: 11, msg: '请输入正确的号码'}
}
</script>

<style scoped>
.logo {
  background-image: url("/image/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 128px;
  height: 36px;
}
</style>
