<template>
  <div class="banner-content">
    <swiper :items="swiperItems" />
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'nuxt-property-decorator'
import Swiper from '~/components/public/main/banner/swiper/index.vue'
@Component({
  components: {
    Swiper
  }
})
export default class BannerContent extends Vue {
  swiperItems: Object[] = [
    {
      id: 0,
      href: '#',
      dis: '吃美食',
      src: '/image/banner/banner-swiper-0.jpg'
    },
    {
      id: 1,
      href: '#',
      dis: '点外卖',
      src: '/image/banner/banner-swiper-1.jpg'
    },
    {
      id: 2,
      href: '#',
      dis: '住酒店',
      src: '/image/banner/banner-swiper-2.jpg'
    },
    {
      id: 3,
      href: '#',
      dis: '看电影',
      src: '/image/banner/banner-swiper-3.jpg'
    },
    {
      id: 4,
      href: '#',
      dis: '美团排队',
      src: '/image/banner/banner-swiper-4.png'
    },
  ]
}
</script>

<style scoped>

</style>