<template>
  <div class="banner-content">
    <!-- 第一行banner -->
    <div class="banner-row clear-fix">
      <swiper :items="swiperItems" class="banner-swiper" />
        <a 
          class="baner-item banner-item-first"
          :href="bannerItem[0].href" 
          :style="{ backgroundImage: `url(${bannerItem[0].img})` }"
        >
        </a>
      <loging class="banner-loging" />
    </div>
    <!-- 第二行banner -->
    <div class="banner-row clear-fix">
        <a
          class="banner-item-second"
          :href="bannerItem[1].href" 
          :style="{ backgroundImage: `url(${bannerItem[1].img})` }"
        ></a>
        <a
          class="banner-item-second"
          :href="bannerItem[2].href" 
          :style="{ backgroundImage: `url(${bannerItem[2].img})` }"
        ></a>
        <a
          class="banner-item-second"
          :href="bannerItem[3].href" 
          :style="{ backgroundImage: `url(${bannerItem[3].img})` }"
        ></a>
        <div class="banner-download">
          <div class="qrcode-box">
            <img src="/image/download-qr.png" alt="app下载二维码">
          </div>
          <p>APP手机版</p>
          <p><span style="color: red;">1元起 </span>吃喝玩乐</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'nuxt-property-decorator'
import Swiper from '~/components/public/main/banner/swiper/index.vue'
import Loging from '~/components/public/main/banner/loging.vue'
@Component({
  components: {
    Swiper,
    Loging
  }
})
export default class BannerContent extends Vue {
  bannerItem: Object[] = [
    {
      id: 0,
      href: '#',
      img: '/image/banner/banner-first-0.jpg'
    },
    {
      id: 1,
      href: '#',
      img: '/image/banner/banner-second-1.png'
    },
    {
      id: 2,
      href: '#',
      img: '/image/banner/banner-second-2.jpg'
    },
    {
      id: 3,
      href: '#',
      img: '/image/banner/banner-second-3.jpg'
    }
  ]
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
.banner-swiper {
  width: 550px;
  height: 240px;
  float: left;
}

.banner-loging {
  float: left;
}

.banner-item-first {
  float: left;
  height: 240px;
  width:150px;
  margin: 0 10px;
  background-repeat: no-repeat;
  background-size: 150px 240px;
}

/* 第一行banner项 */
.banner-item-second {
  float: left;
  width: 270px;
  height: 165px;
  margin-top: 10px;
  background-repeat: no-repeat;
  background-size: 270px 165px;
}

/* 第二行banner项 */
.banner-item-second:nth-child(2) {
  margin: 10px 10px 0 10px;
}

.banner-item-second:nth-child(3) {
  width: 150px;
  background-size: 150px 165px;
}

.banner-download {
  float: left;
  margin-left: 10px;
  margin-top: 10px;
  width: 230px;
  height: 165px;
  box-sizing: border-box;
  border: solid 1px #e5e5e5;
  text-align: center;
  background-color: white;
}

.banner-download p:nth-child(3){
  margin-top: 3px;
  font-size: 12px;
}

.qrcode-box {
  margin: 10px 0;
}

.qrcode-box img {
  width: 95px;
  height: 95px;
}
</style>
