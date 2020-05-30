<template>
  <div class="minsu-card">
    <a :href="`husion/${minsu.productId}`">
      <div class="image-box">
        <img class="product-img" :src="minsu.imgSrc">
        <img class="head-img" src="/image/icon/head-.png">
      </div>
      <div class="info-box">
        <h3 class="title-line">{{ minsu.title }}</h3>
        <p class="area-line">{{ minsu.locationArea }}</p>
        <p class="price-line">￥<span class="price">{{ minsu.price }}</span></p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
export interface Minsu {
  productId: string | number
  title: string
  price: number
  locationArea: string
  [key: string]: number | string
}
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class  extends Vue {
  @Prop({ type: Object, default: () => {} })
  minsu: Minsu | undefined
}
</script>


<style scoped>

</style>