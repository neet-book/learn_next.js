<template>
  <div class="container">
    <!-- banner区域 -->
    <div class="banner">
      <div class="banner-left">
        <category-nav />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { getDetails } from '~/static/script/network/index'

import CategoryNav from '~/components/public/main/category/category-nav.vue'

@Component({
  components: {
    CategoryNav
  },
  // 获取各组件需要的数据
  async asyncData() {
    const detailCategorys = await getDetails()

    return {
      detailCategorys
    }
  },
})
export default class Index extends Vue {
  detailCategorys: any[] = []
  // 通过provied为子组件提供数据
  provied() {
    return {
      detailCategorys: this.detailCategorys
    }
  }
}
</script>


<style scoped>

</style>