<template>
  <div class="menu">
    <div class="menu-container">
      <div>
        <ul class="menu-list">
          <li v-for="item of list" :key="item.title">
            <nuxt-link to="item.link" target="_blank" class="item">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
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
export default class NavMenu extends Vue {
  @Prop({
    type: Array, default: () => []
  })
  list: MenuItem[] | undefined
}
</script>

<style scoped>
.menu {
  width: 78px;
  height: 40px;
  display: inline-block;
}

.menu-container {
  display: flex;
  height: 40px;
  overflow: hidden;
  transition: ease-out 0.4s;
}

.menu-container:hover {
  overflow: visible;
}

.menu-list:hover {
  overflow: visible;
    background-color: #fff;
  border-color: #E5E5E5;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
}

.menu-list li {
  list-style: none;
}

.item {
  display: block;
  width: 78px;
  height: 40px;
  font-size: 12px;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  color: var(--color-tint);
  list-style: none;
}

.item:hover {
  color: var(--color-hover);
}
</style>
