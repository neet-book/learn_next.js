<template>
  <div class="menu">
    <div class="menu-container" @mouseover="visible = true" @mouseout="visible = false">
      <div class="menu-first">
        <nuxt-link :to="list[0].link" target="_blank" class="item">{{ list[0].title }}</nuxt-link>
      </div>
      <ul class="menu-second" v-show="visible">
        <li v-for="item of list.slice(1)" :key="item.title">
          <nuxt-link :to="item.link" target="_blank" class="item">{{ item.title }}</nuxt-link>
        </li>
      </ul>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
interface MenuItem {
  title: string
  link: string
}
@Component
export default class HeaderNavMenu extends Vue {
  visible: boolean = false
  @Prop({
    type: Array, default: () => []
  })
  list: MenuItem[] | undefined
}
</script>

<style scoped>
.menu {
  height: 40px;
  display: inline-block;
}

.menu-container {
  text-align: center;
  z-index: 999;
}

.menu-container:hover {
  background-color: #fff;
  border-color: #E5E5E5;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
}

.item {
  height: 40px;
  padding: 12px 14px;
  font-size: 12px;
  line-height: 40px;
  text-decoration: none;
  color: var(--color-tint);
  list-style: none;
  box-sizing: border-box;
}
.item:hover {
  color: var(--color-hover);
}
</style>
