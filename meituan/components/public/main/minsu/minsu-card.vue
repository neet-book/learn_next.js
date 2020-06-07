<template>
  <div class="minsu-card">
    <a :href="`husion/${minsu.productId}`">
      <div class="image-box">
        <img class="product-img" :src="minsu.imgSrc">
        <img class="head-img" src="/image/icon/head-img.png">
      </div>
      <div class="info-box">
        <h3 class="title-line">{{ minsu.title }}</h3>
        <p class="area-line">整套{{ minsu.layoutRoom }}居室·可住{{ minsu.maxGuestNumber }}人|{{ minsu.locationArea }}</p>
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
.minsu-card {
  display: inline-block;
  width: 370px;
}
.minsu-card a {
  text-decoration: none;
}

.image-box {
  width: 370px;
  height: 208px;
  position: relative;
  margin-bottom: 11px;
}

.product-img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}

.head-img {
  position: absolute;
  bottom: 0px;
  transform: translateY(50%);
  right: 20px;
  width: 49px;
  height: 49px;
  border-radius: 50%;
  border: solid 2px #fff;
  background-color: #fff;
}

.info-box {
  color: #222222;
  font-size: 16px;
}

.title-line {
  width: 297px;
  text-indent: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 7px 0;
}

.area-line {
  font-size: 13px;
  color: var(--color-tint)
}

.price-line {
  font-size: 13px;
  color: var(--color-price);
  padding: 4px;
}

.price {
  font-weight: 600;
  font-size: 16px;
}

@media screen and (max-width: 950px) {
  .img-box {
    width: 445px;
    height: 250px;
  }
}
</style>
