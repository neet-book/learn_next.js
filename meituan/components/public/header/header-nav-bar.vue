<template>
  <nav>
    <ul class="header-nav-first clear-fix">
      <li>
        <header-nav-menu :list="list"/>
      </li>
      <li>
        <header-nav-menu :list="list2"/>
      </li>
      <li>
        <a href="#" target="_blank" class="app">手机app</a>
      </li>
      <li class="header-nav-last-title" @mouseover="visibal = true" @mouseout="visibal = false">
        <span>网站导航</span>
        <header-nav-site class="head-nav-site-extend" v-show="visibal"/>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HeaderNavMenu from './header-nav-menu.vue'
import HeaderNavSite from './header-nav-site.vue'
@Component({
  components: {
    HeaderNavMenu,
    HeaderNavSite
  }
})
export default class HeaderNavBar extends Vue {
  visibal: boolean = false
  list = [
    { title: '我的美团', link: '#' },
    { title: '我的订单', link: '#' },
    { title: '我的收藏', link: '#' },
    { title: '抵用卷', link: '#' },
    { title: '账号设置', link: '#' },
  ]

  list2 = [
    { title: '美团餐饮商户中心', link: '#' },
    { title: '登录商家中心', link: '#' },
    { title: '智能收银', link: '#' },
    { title: '我想合作' ,link: '#' },
    { title: '手机免费开店' ,link: '#' }
  ]
}
</script>

<style scpoed>
  .header-nav-first {
    position: relative;
  }

  .header-nav-first > li{
    list-style: none;
    height: 40px;
    font-size: 12px;
    float: left;
    box-sizing: border-box;
  }
  .header-nav-last-title > span, .app{
  height: 40px;
  padding: 12px 14px;
  font-size: 12px;
  line-height: 40px;
  text-decoration: none;
  color: var(--color-tint);
  list-style: none;
  box-sizing: border-box;
  }

  .header-nav-last-title > span:hover, .app:hover {
    color: var(--color-hover)
  }

  .header-nav-last-title:hover {
    overflow: visible;
    background-color: #fff;
    border-color: #E5E5E5;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
  }
  .head-nav-site-extend {
    position: absolute;
    top: 40px;
    right: 0;
  }
</style>