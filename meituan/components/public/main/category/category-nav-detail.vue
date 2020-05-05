<template>
  <div class="detail-container">
    <!-- 头部 -->
    <div
      class="detail-are"
      v-for="cat of detailCats"
      :key="cat.index"
    >
      <div class="detail-title-wrapper">
        <span>{{ cat.title }}</span>
        <span>更多<i class="el-icon-arrow-right"></i></span>
      </div>
      <!-- 主体 -->
      <div class="detail-content">
        <a
          v-for="detail of cat.details"
          :href="detail.href"
          :key="detail.index"
          target="_blank"
        >
          {{ detail.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class CategoryNavDetail extends Vue {
  @Prop(Array) detailCats: any[] | undefined
}
</script>

<style scoped>
.detail-container {
  width: 400px;
  background-color: #fff;
  padding: 0 30px;
  box-sizing: border-box;
  /* height: 100%; */
}

.detail-title-wrapper span:last-child {
  font-size: 12px;
  color: var(--color-tint);
  float: right;
}

.detail-title-wrapper {
  margin-top: 24px;
  height: 22px;
  line-height: 22px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
}

.detail-content > a {
  font-size: 12px;
  text-decoration: none;
  color: var(--color-tint);
  margin: 10px 13px 0 0;
}

.detail-content > a:hover {
  color: var(--color-hover);
}
</style>