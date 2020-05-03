<template>
  <header class="header">
    <!-- 头部bar -->
    <top-bar />
    <!-- 头部内容 -->
    <div class="header-content">
      <div class="header-content-container">
        <div class="logo"><img src="/image/logo.png" alt="logo"></div>
        <search-bar class="header-content-search" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import TopBar from './top-bar.vue'
import SearchBar from '~/components/common/search-bar.vue'
@Component({
  components: {
    TopBar,
    SearchBar
  }
})
export default class CommonHeader extends Vue {}
</script>

<style scoped>


.header-bar-position, .header-bar-nav {
  display: inline-block;
}



.header-content {
  background: white;
  height: 157px;
  position: relative;
}
.header-content-container {
  max-width: 1190px;
  margin: auto;
}
.header-content-search {
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translateX(-50%);
}
.logo {
  display: inline-block;
  padding-top: 28px;
}
.logo > img{
  width: 126px;
  height: 46px;
}
</style>
