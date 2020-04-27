<template>
  <div class="header-nav-site clear-flex">
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
    <dl class="sites app-site">
      <dt>手机应用</dt>
      <dd v-for="app of apps" :key="app.name">
        <nuxt-link :to="app.link" target=_blank>
          <img :src="app.src" :alt="app.name">
        </nuxt-link>
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

  apps = [
    {
      name: '美团app',
      src: '/image/icon/meituan.png',
      link: '#'
    },
    {
      name: '外卖app',
      src: '/image/icon/waimai.png',
      link: '#'
    },
    {
      name: '民宿app',
      src: '/image/icon/minsu.png',
      link: '#'
    },
    {
      name: '点评app',
      src: '/image/icon/dianping.png',
      link: '#'
    },
    {
      name: '猫眼app',
      src: 'image/icon/maoyan.png',
      link: '#'
    }
  ]
}
</script>


<style scoped>
.header-nav-site {
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  width: 1200px;
  padding: 30px 36px 36px 47px;
  
  background-color: #fff;
  border-color: #E5E5E5;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
  text-align: center;
}

.header-nav-site::after {
  content: ""
}
img {
  width: 60px;
  height: 60px;
}

.sites > dd {
  float: left;
  width: 20%;
}
.sites > dt {
  margin-bottom: 26px;
}

dd > a {
  text-decoration: none;
  color: var(--color-tint)
}
.hostel-site {
  width: 234px;
}
.hostel-site > dd {
  width: 33%;
}

.restauran-site {
  width: 156px;
}
.restauran-site > dd {
  width: 50%;
}

.movie-site {
  width: 90px;
}
.movie-site > dd {
  width: 100%;
}

.app-site {
  width: 380px;
}

.app-site > dd{
  margin: auto;
}
</style>