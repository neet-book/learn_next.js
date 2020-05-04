<template>
  <div class="detail-container">
    <div
      class="detail-are"
      v-for="cat of catDetails"
      :key="cat.index"
    >
      <div class="detail-title-wrapper">
        <h3>{{ cat.title }}</h3>
        <i class="cl-icon-arrow-right">更多</i>
      </div>
      <div class="detail-content">
        <nuxt-link
          v-for="detail of cat.details"
          :to="detail.href"
          :key="detail.index"
          target="_blank"
        >
          {{ detail.text }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CategoryNavDetail extends Vue {
  @Prop(Array) catDetails: any[] | undefined
  mounted() {
    console.log(this.catDetails)
  }
}
</script>

<style scoped>
.detail-container {
  width: 400px;
  background-color: #fff;
}
</style>