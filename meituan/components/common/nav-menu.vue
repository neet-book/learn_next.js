<template>
  <div class="nav-menu">
  <div class="nav-container">
    <nuxt-link :to="list[0].link" class="item">{{ list[0].title }}</nuxt-link>
    <nuxt-link v-for=" item of list.slice(1) " :key="item.title" to="item.link" class="item">{{ item.title }}</nuxt-link>
  </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
interface MenuItem {
  title: string
  link: string
}
@Component
export default class NavMenu extends Vue {
  list: MenuItem[] = [
    { title: '我的信息', link: '#' },
    { title: '我的订单', link: '#' },
    { title: '我的收藏', link: '#' },
    { title: '抵用券', link: '#' },
    { title: '账户设置', link: '#' },
  ]
}
</script>


<style scoped>
.nav-menu {
  display: inline-block;
  width: 78px;
  height: 40px;
  overflow: hidden;
}
.nav-menu:hover {
  display: inline-block;
  overflow: visible;
}
.nav-container {
  display: inline-block;
  display: flex;
  flex-wrap: wrap;
}
.item {
  display: inline-block;
  width: 78px;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  text-align: center;
  color: var(--color-tint);
  text-decoration: none;
}
</style>