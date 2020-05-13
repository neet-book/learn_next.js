<template>
  <div class="loging">
    <!-- 未登录 -->
    <div class="loging-contaier" v-show="false">
      <!-- 用户信息 -->
      <div class=header-img-row>
        <img src="/image/icon/avatar.jpg" alt="用户头像">
        <p class="user-name">Hi! 你好</p>
      </div>
      <button class="btn">注册</button>
      <button class="btn">登录</button>
    </div>
    <!-- 已登录 -->
    <div class="loging-contaier" v-show="true">
      <div class="setting-row"><a><i class="el-icon-setting"></i></a></div>
      <!-- 用户信息 -->
      <a>
        <div class=header-img-row><img src="/image/icon/head-img.png" alt="用户头像"></div>
        <p class="user-name">你好 {{ username }}</p>
      </a>
      <!-- 功能 -->
      <div class="fn">
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
  text-align: center;
  position: relative;
}

/* 头部 */
.header-img-row {
  margin-top: 38px;
}
/* 头像 */
.header-img-row img{
  width: 47px;
  height: 47px;
  border-radius: 50%;
  border: solid 4px #e5e5e5;
  margin-bottom: 5px;
}
/* 用户名 */
.header-img-row p{
  color: black;
  font-size: 16px;
  font-weight: 500;
  width: 6em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


.btn {
  width: 118px;
  border: 1px solid #e5e5e5;
  border-radius: 40px;
  outline: none;
  margin: 10px auto 15px;
  font-size: 14px;
  line-height: 38px;
  color: #333;
  text-decoration: none;
  display: block;
  transition: background 0.5s;
}

.btn:hover {
  background: #f6f6f6;
}

/* 功能 */
.fn {
  padding: 17px 15px;
}
.fn-row > a {
  width: 33%;
  text-align: center;
  text-decoration: none;
  float:left;
}

/* icon */
.fn-row > a > i {
  font-size: 20px;
  color: #FFC300;
}
/* 功能名 */
.fn-row > a > p {
  color: black;
  font-size: 12px;
  margin: 5px 0;
}

.setting-row {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  color: #666;
}
</style>