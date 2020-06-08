<template>
  <div class="container">
    <header>
      <img src="/image/logo.png" alt="logo">
      <span >已有账号?</span>
      <button>登录</button>
    </header>
    <main>
      <form>
        <!-- <label for="phone">手机号</label>
        <input type="text" name="phone"> -->

<<<<<<< HEAD
        <fm-input label="手机号码" />
=======
        <fm-input label="手机号码" v-model="phoneNumber"/><br>
        <div>{{ phoneNumber }}</div>
>>>>>>> ebdbd1be82aa316804d02208f86595d3fe546f63
        <label for="verifycode">短信动态验证码</label>
        <input type="text" name='verifycode'>
        <button>获取短信验证码</button>

        <label for="password">创建密码</label>
        <input type="password" name="password">

        <label for="password2">确认密码</label>
        <input type="password" name="password2">

        <button>同意以下协议并注册</button>
      </form>
      <a href="#" class="protocol">用户服务协议</a><a href="#" class="protocol">用户隐私协议</a>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'blank'
})
export default class Register extends Vue {
  phoneNumber: number | string = ''
}
</script>

<style scoped>

</style>
