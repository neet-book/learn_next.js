<template>
  <a class="item-card" :href="item.detailUrl" target="_blank">
    <div class="image-box">
      <img :src="item.imgSrc">
    </div>
    <div class="inof-box">
      <h3>{{ item.title }}</h3>
      <div class="score">
        <!-- 评价星数 -->
        <!-- <rate-star :max="5" :score="item.socre" /> -->
          <!-- 评论数 -->
        <div class="comment-line">{{ item.commentNumber }}个评价</div>
        <div class="area-line">{{ item.areaName }}</div>
        <div class="price-line">￥<span class="price">{{ item.lowPrice }}</span>起</div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

interface Recommend {
  itemId: number
  title: string
  imgSrc: string
  // 商店链接
  detailUrl: string
  lowPrice: number
  // 评论数
  commentNumber: number
  // 人均价格
  avgPrice: number
  // 星评
  score: number
  // 地区
  areaName: string
  [key: string]: number | string
}
@Component
export default class  extends Vue {
  @Prop({ type: Object, default: () => {}})
  item: Recommend | undefined
}
</script>

<style scoped>
.item-card {
  display: inline-block;
  text-decoration: none;
}
</style>
