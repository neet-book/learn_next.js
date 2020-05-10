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
import { Vue, Component } from 'vue-property-decorator'
import { getDetails } from '~/static/script/network/index'

import CategoryNav from '~/components/public/main/category/category-nav.vue'

@Component({
  components: {
    CategoryNav
  },
  // 通过provied为子组件提供数据
  provide() {
    return {
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

    return {
      detailCategorys
    }
  }
}
</script>

<style scoped>

</style>