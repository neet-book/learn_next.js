<template>
  <a class="item-card" :href="item.detailUrl" target="_blank">
    <div class="card-container">
      <div class="image-box">
        <img :src="item.imgSrc">
      </div>
      <div class="inof-box">
        <h3>{{ item.title }}</h3>
        <div class="score">
          <!-- 评价星数 -->
          <rate-star class="rate-star-box" :max="5" :score="item.score" />
            <!-- 评论数 -->
          <div class="comment-line">{{ item.commentNum }}个评价</div>
          <div class="area-line">{{ item.areaName }}</div>
          <div class="price-line">￥<span class="price">{{ item.lowPrice }}</span>起</div>
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import RateStar from './rate-star.vue'
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
@Component({
  components: {
    RateStar
  }
})
export default class RecommendCard extends Vue {
  @Prop({ type: Object, default: () => {}})
  item: Recommend | undefined
}
</script>

<style scoped>
.card-container {
  box-sizing: border-box;
  width: 235px;
  display: inline-block;
  text-decoration: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 13px;
  color: var(--color-tint);
}
.card-container:hover {
  background-color: #f4f4f4;

}
.image-box img {
  width: 100%;
  border-radius: 4px;
}

/* .rate-star-box {
  
} */

.inof-box {
  margin-top: 10px;
}

.inof-box h3 {
  width: 100%;
  height: 22px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: black;
}

.comment-line {
  display: inline-block;
  margin-left: 5px;
  height: 24px;
  line-height: 24px;
  font-size: 13px;
  color: var(--color-tint);
}

.area-line {
  height: 18px;
  line-height: 18px;
}

.price-line {
  color: #f60;
}

.price {
  font-size: 22px; 
}
</style>
