<template>
  <div class="recommend">
    <div class="recommend-header">
      <span>推荐</span><span>为你甄选最适合的</span>
    </div>
    <div class="recommend-content">
      <recommend-item
        v-for="rec of recommends"
        :key="rec.itemId"
        :item="rec"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RecommendItem from './recommend-item.vue'
@Component({
  components: {
    RecommendItem
  },
  inject: ['recommends']
})
export default class  extends Vue {
  recommendList = []
  mounted() {
    console.log(this.$data.recommends)
  }
}
</script>

<style scoped>
.recommend {
  height: 800px;
}
</style>