<template>
  <a class="movie-slide" :to="`http://localhost:3000/movie/${movie.id}`" target="_blank">
    <div class="slide-container">
    <img :src="movie.imgSrc" alt="movie.nm">
    <div class="info-box">
      <p>{{ movie.nm }}</p>
      <p><span>{{ movie.wish }}</span> 人想看</p>
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
</style>