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
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export interface Minsu {
  productId: string | number
  title: string
  price: number
  locationArea: string
  [key: string]: number | string
}

@Component
export default class MinsuCard extends Vue {
  @Prop({ type: Object, default: () => {} })
  minsu: Minsu | undefined
}
</script>

<style scoped>
.minsu-card a {
  text-decoration: none;
}
.image-box {
  height: 210px
}

.image-box img {
  width: 100%;
  height: 100%;
}

.info-box {
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: black;
}

.title-line {

}
</style>
