<template>
  <div class="loging">
    <!-- 未登录 -->
    <div class="loging-contaier" v-show="!isLoging">
      <!-- 用户信息 -->
      <div class=header-img-row>
        <img src="/image/icon/avatar.jpg" alt="用户头像">
        <p class="user-name">Hi! 你好</p>
      </div>
      <button class="btn btn-logup">注册</button>
      <button class="btn btn-loging">登录</button>
    </div>
    <!-- 已登录 -->
    <div class="loging-contaier" v-show="true">
      <div class="setting-row"><a><i class="el-icon-setting"></i></a></div>
      <!-- 用户信息 -->
      <a>
        <div class=header-img-row><img src="/image/icon/avatar.jpg" alt="用户头像"></div>
        <p class="user-name">你好 {{ username }}</p>
      </a>
      <!-- 功能 -->
      <div class="fn-row clear-fix">
        <a target="_blank" href="/user/orders">
          <i class="icon el-icon-s-order"></i>
          <p>订单</p>
        </a>
        <a target="_blank" href="/user/collections">
          <i class="icon el-icon-star-on"></i>
          <p>收藏</p>
        </a>
        <a target="_blank" href="'/user/vouchers/">
          <i class="icon el-icon-s-ticket"></i>
          <p>抵用卷</p>
        </a>
      </div>
      <div class="fn-row clear-fix">
        <a target="_blank" href="/user/info/">
            <i class="icon el-icon-s-finance"></i>
            <p>余额</p>
        </a>
        <a target="_blank" href="/user/info/">
          <i class="icon el-icon-more"></i>
          <p>更多</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Loging extends Vue {
  username: string = 'user'
  get isLoging(): boolean {
    return false
  }
}
</script>


<style scoped>
.loging {
  width: 228px;
  background: white;
  border: solid 1px #e5e5e5;
  text-align: center
}

.fn-row > a {
  width: 33.3%;
  text-align: center;
  text-decoration: none;
  float:left;
}

.fn-row > a > p {
  color: black;
}

.fn-row > a > i {
  color: #FFC300;
}
</style>