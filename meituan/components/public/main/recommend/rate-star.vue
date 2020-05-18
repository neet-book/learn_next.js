<template>
  <div class="rate-star-container clear-fix">
    <div
      class="star-box clear-fix"
      v-for="n of max"
      :key="n"
    >
      <i :class="{ orange: n <= score }" class="el-icon-star-on star"></i>
      <i v-if="n === halfStar" class="el-icon-star-on half-star"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class RateStar extends Vue {
  @Prop(Number) max: number | undefined
  @Prop(Number) score: number | undefined
  get halfStar(): number {
    const score: number = this.score as number
    if (score as number % 1 === 0) return -1

    return parseInt(score.toString()) + 1
  }
}
</script>

<style scoped>
.rate-star-container {
  display: inline-block;
}

.star-box {
  font-size: 13px;
  float: left;
  margin: 0 2px;
  position: relative;
  line-height: 100%;
}

.half-star {
  overflow: hidden;
  position: absolute;
  left: 0;
  width: 50%;
  color: orange;
  z-index: 99;
}
.orange {
  color: orange;
}
</style>