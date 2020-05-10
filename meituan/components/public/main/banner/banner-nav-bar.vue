<template>
  <div class="nav-bar">
    <nuxt-link
      v-for="item of navs"
      :key='item.id'
      :to="item.href"
      :class="item.color "
      class="nav-item"
      target="_blank"
    >
      {{ item.text }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'nuxt-property-decorator'

interface nav {
  id: number
  href: string
  color: string
  text: string
}
@Component
export default class BannerNavBar extends Vue {
  navs: nav[] = [
    {
      id: 1,
      href: '#',
      color: 'yellow',
      text: '美团外卖'
    },
    {
      id: 2,
      href: '#',
      color: 'red',
      text: '猫眼电影'
    },
    {
      id: 3,
      href: '#',
      color: 'red',
      text: '美团酒店'
    },
    {
      id: 4,
      href: '#',
      color: 'yellow',
      text: '名宿/公寓'
    },
    {
      id: 5,
      href: '#',
      color: 'yellow',
      text: '商家入住'
    },
    {
      id: 6,
      href: '#',
      color: 'red',
      text: '美团公益'
    }
  ]
}
</script>

<style scoped>
.nav-item{
  font-weight: 700;
  font-size: 16px;
  color: #222;
  margin: 0 20px;
  text-decoration: none;
}

.yellow:hover {
  color: #fbc700;
}

.red:hover {
  color: #ed1e24;
}
</style>