<template>
  <div class="main-body">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'nuxt-property-decorator'
import instance from '~/static/script/network/index'
interface detail {
  cat_id: number
  detail_id: number
  index: string
  text: string
  href: string
}

interface detailCategory {
  cat_id: number
  index: string
  title: string
  details: detail
}

@Component({
  async asyncData() {
    const detailCategorys = await 
  } 
})
export default class MainBody extends Vue {
  detailCategorys: any[] = []
  provide() {
    return {
      detailCats: this.detailCategorys
    }
  }
}
</script>

<style scoped>

</style>