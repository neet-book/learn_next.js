<template>
  <div class="container">
    <!-- banner区域 -->
    <div class="banner">
      <div class="banner-left">
        <category-nav />
      </div>
      <div class="banner-right">
        <banner-nav-bar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getCategory, getDetails } from '~/static/script/network/index'

import BannerNavBar from '~/components/public/main/banner/banner-nav-bar.vue'
import CategoryNav from '~/components/public/main/category/category-nav.vue'

@Component({
  components: {
    CategoryNav,
    BannerNavBar
  },
  // 通过provied为子组件提供数据
  provide() {
    return {
      categorys: this.$data.categorys,
      detailCategorys: this.$data.detailCategorys
    }
  }
})
export default class Index extends Vue {
  detailCategorys: any[] | undefined
  categorys: any[] | undefined
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
    
    return {
      categorys,
      detailCategorys
    }
  }
}
</script>

<style scoped>
.banner {
  max-width: 1190px;
  margin: auto;
}
.banner-left {
  position: relative;
  top: -53px;
}
</style>
