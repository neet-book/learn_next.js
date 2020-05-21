<template>
  <a class="movie-slide" :href="`http://localhost:3000/movie/${movie.id}`" target="_blank">
    <div class="slide-container">
      <img :src="movie.imgSrc" :alt="movie.nm">
      <div class="info-box">
        <p><span>{{ movie.wish }}</span> 人想看</p>
        <p>{{ movie.nm }}</p>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
export interface Movie {
  id: string | number
  // 电影名字
  nm: string,
  // 希望看电影的人数
  wish: number,
  imgSrc: string,
  [key:string]: any
}
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class  extends Vue {
  @Prop(Object) movie: Movie | undefined
}
</script>

<style scoped>
.movie-slide {
  width: 214px;
  height: 297px;
}

.movie-slide {
  display: inline-block;
}

.slide-container {
  position: relative;
}

/* 电影海报 */
.slide-container > img {
  width: 100%;
  height: 100%;
  border-radius: 3px;
}
.info-box {
  position: absolute;
  bottom: 0px;
  color: white;
  font-size: 16px;
  padding: 10px;
}

.info-box p:first-child {
  font-size: 12px;
}

/* 想看人数 */
.info-box p:first-child > span {
  color: orange;
  font-size: 16px;
}

/* 电影标题 */
.info-box p:last-child {
  text-shadow: 0px 0px 3px #00000094;;
}
</style>