<template>
  <div class="container">
    <!-- banner区域 -->
    <div class="banner clear-fix">
      <div class="banner-left">
        <category-nav />
      </div>
      <div class="banner-right">
        <banner-nav-bar class="home-header-nav"/>
        <banner-content />
      </div>
    </div>
    <!-- 推荐区域 -->
    <recommend />
    <!-- 电影推荐区域 -->
    <movie-list />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getCategory, getDetails, getRecommend } from '~/static/script/network/index'

import BannerNavBar from '~/components/public/main/banner/banner-nav-bar.vue'
import CategoryNav from '~/components/public/main/category/category-nav.vue'
import BannerContent from '~/components/public/main/banner/banner-content.vue'
import Recommend from '~/components/public/main/recommend/recommend.vue'
import MovieList from '~/components/public/main/movie/movie-list.vue'

@Component({
  components: {
    CategoryNav,
    BannerNavBar,
    BannerContent,
    Recommend,
    MovieList
  },
  // 通过provied为子组件提供数据
  provide() {
    return {
      categorys: this.$data.categorys,
      detailCategorys: this.$data.detailCategorys,
      recommends: this.$data.recommends
    }
  }
})
export default class Index extends Vue {
  detailCategorys: any[] | undefined
  categorys: any[] | undefined
  recommends: any[] | undefined
  // 获取数据
  async asyncData () {
    let detailCategorys: any = await getDetails().catch(e => {
      console.log(e.message)
      return []
    })

    let categorys: any = await getCategory().catch(e => {
      console.log(e.message)
      return []
    })
    
    let recommends: any = await getRecommend().catch(e => {
      console.log(e.message)
      return []
    })

    return {
      categorys,
      detailCategorys,
      recommends
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  min-width: 1030px;
  margin: 0 auto;
}

.banner-left {
  float: left;
  position: relative;
  top: -53px;
}

.banner-right {
  float: left;
  margin: 10px 0 0 10px;
  position: relative;
}

.home-header-nav {
  top: -50px;
  left: 20px;
  position: absolute;
}
</style>
