<template>
  <div class="header-nav-site">
    <dl class="sites hostel-site">
      <dt>酒店旅游</dt>
      <dd v-for="site of hostelSite" :key="site.title">
        <nuxt-link to="site.link" target="_blank">{{ site.title }}</nuxt-link>
      </dd>
    </dl>
    <dl class="sites restauran-site">
      <dt>吃美食</dt>
      <dd v-for="site of restaurantSite" :key="site.title">
        <nuxt-link to="site.link" target="_blank">{{ site.title }}</nuxt-link>
      </dd>
    </dl>
    <dl class="sites movie-site">
      <dt>看电影</dt>
      <dd v-for="site of movieSite" :key="site.title">
        <nuxt-link to="site.link" target="_blank">{{ site.title }}</nuxt-link>
      </dd>
    </dl>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class HeaderNavSite extends Vue {
  hostelSite = [
    { title: '国际机票', link: '#' },
    { title: '火车票', link: '#' },
    { title: '民宿', link: '#' },
    { title: '经济型酒店', link: '#' },
    { title: '主题酒店', link: '#' },
    { title: '商务酒店', link: '#' },
    { title: '公寓', link: '#' },
    { title: '豪华酒店', link: '#' },
    { title: '客栈', link: '#' },
    { title: '青年旅社', link: '#' },
    { title: '度假酒店', link: '#' },
    { title: '别墅', link: '#' },
    { title: '农家院', link: '#' },
  ]

  restaurantSite = [
    { title: '烤鱼', link: '#' },
    { title: '烧烤', link: '#' },
    { title: '火锅', link: '#' },
    { title: '特色小吃', link: '#' },
    { title: '自助餐', link: '#' },
    { title: '代金券', link: '#' },
  ]

  movieSite = [
    { title: '热映电影', link: '#' },
    { title: '热门影院', link: '#' },
    { title: '热映电影口碑榜', link: '#' },
    { title: '最受期待电影', link: '#' },
    { title: '国内票行榜', link: '#' },
    { title: '北美票房榜', link: '#' },
    { title: '电影排行榜', link: '#' },
  ]
}
</script>


<style scoped>
.header-nav-site {
  display: flex;
  width: 1200px;
  justify-content: space-between;
}

.sites {
  padding: 30px 36px 36px 47px;
}
.sites > dt {
  font-size: 14px;
  color: var(--color-title);
  margin-bottom: 26px;
}
.sites dd > a {
  display: block;
  font-size: 12px;
  color: var(--color-tint);
  text-decoration: none;
}
.sites dd > a:hover {
  color: var(--color-hover)
}
</style>