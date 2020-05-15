<template>
  <div class="recommend">
    <div class="recommend-header">
      <span>推荐</span><span>为你甄选最适合的</span>
    </div>
    <div class="recommend-content">
      <recommend-item
        v-for="recommendItem of recommendItemList"
        :key="recommendItem.itemId"
        :item="recommendItem"
      />
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class  extends Vue {

}
</script>


<style scoped>
.recommend {
  height: 800px;
}
</style>