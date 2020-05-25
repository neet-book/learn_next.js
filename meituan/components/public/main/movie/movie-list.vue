<template>
  <div class="movie-list">
    <div class="list-header clear-fix">
      <span class="main-title">电影</span>
      <span class="subtitle">即将上映</span>
      <a
        href="https://maoyan.com/?utm_source=meituanweb"
        class="btn-more btn-more-positoin"
      >全部<i class="el-icon-arrow-right"></i></a>
    </div>
    <div class="slide-container">
      <!-- 包裹所有电影滑块 -->
      <div
        class="slide-wrap clear-fix"
        ref="wrapRef"
        :style="{ transform: `translateX(-${distance}px)` }"
      >
        <movie-slide
          class="slide"
          v-for="movie of movieList"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <round-button class="btn-pre" @click="changePage(-1)" />
      <round-button class="btn-next" @click="changePage(1)" direction="right" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject} from 'nuxt-property-decorator'

import RoundButton from '~/components/common/round-button.vue'
import MovieSlide from './movie-slide.vue'
@Component({
  components: {
    RoundButton,
    MovieSlide
  }
})
export default class MovieList extends Vue {
  wrapWidth: number = 234 * 10
  pageWidth: number = 234 * 5
  currentPage: number = 0
  maxPage: number = 0
  distance: number = 0
  @Inject('movieList') movieList: any[] | undefined
  
  mounted() {
    let len = (this.movieList as []).length
    this.maxPage = len % 5 === 0 ? len / 5 - 1 : Number.parseInt(len / 5 + "")
    // 获取并设置包裹滑块容器的宽度
    const wrap: HTMLElement = this.$refs.wrapRef as HTMLElement
    try {
      const width = wrap.querySelectorAll('.slide').length * 234
      this.wrapWidth = width
      wrap.style.width = width + 'px'
    } catch(e) {
      wrap.style.width = this.wrapWidth + 'px'
    }
  }

  changePage(n: number): void {
    let page = this.currentPage + n
    let max = this.maxPage
    let i = 0

    if (page > max) {
      do {
        page = page - max - 1
      } while (page > max)
    }

    if (page < 0) {
      do {
        console.log(page)
        page = max + page + 1
      } while (page < 0)
    }

    this.currentPage = page
    this.distance = this.pageWidth * page
  }
}
</script>

<style scoped>
  .movie-list {
    height: 354px;
    max-width: 1200px;
  }

  .list-header {
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0 20px;
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%, rgb(250, 60, 104))
  }
  
  .slide-container {
    overflow: hidden;
    position: relative;
  }

/* 标题 */
  .list-header span {
    display: inline-block;
    color: #fff;
    height: 44px;
    line-height: 44px;
  }
  .main-title {
    font-size: 18px;
    margin-right: 10px;
  }

  .subtitle {
    font-size: 13px;
    position: relative;
  }

  .subtitle::after {
    content: "";
    display: block;
    width: 2px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 7px solid white;
    position: absolute;
    bottom: 0;
    right: 50%;
  }
/* 按钮 */
  .btn-pre {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%)
  }

  .btn-next {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%)
  }

  .btn-more {
    line-height: 44px;
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    float: right;
  }
  .slide {
    float: left;
    margin: 10px;
    margin-top: 3px;
  }

  .btn-more-positoin {
    position: relative;
    
  }
</style>
