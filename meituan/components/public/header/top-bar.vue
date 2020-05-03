<template>
<div class="top-bar">
  <div class="top-bar-container">
    <!-- 位置与用户入口 -->
    <div class="top-bar-position">
      <position current="深圳" :nearby="nearbyCity" />
      <user-entry user="suer" :is-loging="false" class="user-entry" />
    </div>
      <!-- 导航栏 -->
    <div class="top-bar-nav">
      <header-nav-bar />
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Position from './position.vue'
import UserEntry from './user-entry.vue'
import HeaderNavBar from './header-nav-bar.vue'

@Component({
  components: {
    Position,
    UserEntry,
    HeaderNavBar
  }
})
export default class TopBar extends Vue {
    nearbyCity = [
    {
      id: 0,
      link: '#',
      city: '惠州'
    },
    {
      id: 1,
      link: '#',
      city: '东莞'
    }
  ]

  firstMenu = [
    { title: '我的信息', link: '#' },
    { title: '我的订单', link: '#' },
    { title: '我的收藏', link: '#' },
    { title: '抵用券', link: '#' },
    { title: '账户设置', link: '#' }
  ]
}
</script>

<style scoped>
.top-bar {
  height: 40px;
}

.top-bar-container {
  max-width: 1190px;
  margin: 0 auto;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.user-entry {
  margin-left: 30px;
}
</style>