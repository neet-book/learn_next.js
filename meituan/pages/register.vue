<template>
  <div class="container">
    <header>
      <div class="header-container clear-fix">
        <div class="logo"></div>
        <div class="load-container">
          <span>已有账号?</span><button class="btn load-btn">登录</button>
        </div>
      </div>
    </header>
    <main>
      <div class="form-container">
        <fm-form>
          <fm-input  class="item" label="手机号码" :rule="phoneRule" name="phone" />
          <button class="code-btn">获取短信验证码</button>
          <fm-input  class="item" label="短信动态码" v-model="pw" :rule="pwRule" name="code" />
          <fm-input  class="item" label="创建密码" v-model="pw" :rule="pwRule" name="password" />
          <fm-level-bar class="level-bar" :pw="pw" />
          <fm-input class="item" label="确认密码" v-model="pwCheck" :rule="pwRule" name="password-check" />
          <button class="btn agree-btn">同意以下协议并注册</button>
          <div class="protocol-box">
            <a href="#" class="protocol">用户服务协议</a><a href="#" class="protocol">用户隐私协议</a>
          </div>
        </fm-form>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import FmForm from '~/components/common/form-items/fm-form.vue'
import FmInput from '~/components/common/form-items/fm-input.vue'
import FmLevelBar from '~/components/common/form-items/fm-level-bar.vue'
@Component({
  layout: 'blank',
  components: {
    FmForm,
    FmInput,
    FmLevelBar
  }
})
export default class Register extends Vue {
  phoneNumber: number | string = ''
  phoneRule = {required: true, type: 'phone', max: 11, msg: '请输入正确的号码'}
  pwRule = {required: true, type: 'password', max: 18, msg: '请输入格式正确的密码'}
  pw = ''
  pwCheck = ''
}
</script>

<style scoped>
.header-container, .form-container {
    max-width: 980px;
    margin: 0 auto;
}

header {
  border-bottom: 1px solid #696969;
}

.header-container {
  height: 40px;
  padding: 10px 0;
}

.form-container {
  margin-top: 35px;
}

.logo {
  display: inline-block;
  background-image: url("/image/logo.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 128px;
  height: 36px;
}

.load-container {
  padding: 0 10px;
  line-height: 36px;
  float: right;
}

.load-container span {
  color: var(--color-tint);
  font-size: 13px;
  padding-right: 10px;
}

.item {
  margin: 10px 0;
}

.btn {
  border: none;
  border-radius: 2px;
  padding: 7px 20px;
  outline: none;
  background-image: linear-gradient(135deg,#FFD000 0,#FFBD00 100%);
  box-shadow: 0 2px 1px rgba(191,105,0,.15);
}

.load-btn {
  font-size: 12px;
  padding: 5px;
  color: #666;
}

.agree-btn {
  color: #222;
  font-size: 14px;
  font-weight: 700;
  margin-left: 110px;
}

.code-btn {
  outline: none;
  font-size: 12px;
  border: solid 1px #b4aaaa35;
  border-radius: 2px;
  margin-left: 110px;
  padding: 3px 10px;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0, rgb(210, 210, 210) 100%);
}

.protocol-box {
  margin-top: 10px;
  margin-left: 110px;
}

.protocol {
  color: #FE8C00;
  font-size: 13px;
  text-decoration: none;
}

.protocol::before {
  content: '《';
  color: #FE8C00;
  font-size: 13px;
}

.protocol::after {
  content: '》';
  color: #FE8C00;
  font-size: 13px;
}

.level-bar {
  margin:5px 0 5px 110px;
}


@media screen and (max-width: 580px) {
  .form-container {
    padding: 0 50px;
    width: 300px;
    margin-left: 0;
    margin-right: 0;
  }
  
  .code-btn, .level-bar, .protocol-box, .agree-btn {
    margin-left: 0;
  }
}
</style>
