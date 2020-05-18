<template>
  <div class="movie-list">
    <div class="list-header">
      <span>电影</span><span>即将上映</span><a href="https://maoyan.com/?utm_source=meituanweb">全部<i class="el-icon-arrow-right"></i></a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class MovieList extends Vue {

}
</script>

<style scoped>
  .movie-list {
    height: 342px;
  }

  .list-header {
    height: 44px;
    background: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%, rgb(250, 60, 104))
  }
</style>
