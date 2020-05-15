<template>
  <div class="movie-list">
    <div class="list-header">
      <span>电影</span><span>即将上映</span><a>更多<i class="el-icon-arrow-right"></i></a>
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
</style>
