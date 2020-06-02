<template>
  <div class="recommend">
    <div class="recommend-header">
      <span class="main-title">推荐</span><span class="subtitle">为你甄选最适合的</span>
    </div>
    <div class="recommend-content">
      <recommend-card
        v-for="rec of recommends"
        :key="rec.itemId"
        :item="rec"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RecommendCard from './recommend-card.vue'
@Component({
  components: {
    RecommendCard
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
  /* margin-top: 30px; */
  max-width: 1200px;
  height: 800px;
}
/* 头部 */
.recommend-header{
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;
  height: 44px;
  padding: 0 20px;
  background: linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%) rgb(88, 174, 221);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

/* 组件头部内容 */
.recommend-header span {
  display: inline-block;
  color: #fff;
  height: 44px;
  line-height: 44px;
}

.main-title {
  font-size: 18px;
  margin-right: 10px;
}

.subtitle {
  font-size: 13px;
  position: relative;
}

.subtitle::after {
  content: "";
  display: block;
  width: 2px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid white;
  position: absolute;
  bottom: 0;
  right: 50%;
}
.recommend-content {
  box-sizing: border-box;
  height: 760px;
  overflow: hidden;
  padding: 5px;
  background-color: white;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
</style>