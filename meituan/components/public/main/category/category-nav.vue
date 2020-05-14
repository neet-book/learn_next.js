<template>
  <div class="category">
    <h3 class="category-title">全部分类</h3>
    <div class="category-container" @mouseleave="currentCat = false">
      <ul>
        <li class="category-li"
          v-for="category of categorys"
          :key="category.cat_id"
          @mouseover="currentCat = category.cat_id"
        >
          <nuxt-link
            v-for="(cat, index) of category.cats"
            :to="cat.href"
            :key="cat.index"
            target="_blank"
          >
            <!-- 如果索引加一比分类数量小则显示分隔符 -->
            {{ category.cats.length > index + 1  ?  cat.text + " /" : cat.text }}
          </nuxt-link>
          <i class="el-icon-arrow-right"></i>
        </li>
      </ul>
      <!-- 详细分类 -->
      <category-nav-detail
        v-for="cat of detailCategorys"
        :key="cat.cat_id"
        :detail-cats="cat.details"
        class="category-nav-detail"
        v-show="currentCat === cat.cat_id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'nuxt-property-decorator'
import CategoryNavDetail from './category-nav-detail.vue'
@Component({
  components: {
    CategoryNavDetail
  },
  inject: ['categorys', 'detailCategorys'],
})
export default class CategoryNav extends Vue {
  currentCat: number | boolean = false
  categorys: undefined
}
</script>

<style scoped>
.category {
  box-sizing: border-box;
  width: 230px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
}
.category-container {
  position: relative;
  padding-bottom: 8px;
}
.category-title {
  color: #666;
  font-size: 16px;
  padding: 15px 15px 20px;
}

.category-li {
  color: var(--color-normal);
  font-size: 13px;
  line-height: 20px;
  padding: 2px 12px;
  position: relative;
}

.category-li > a {
  text-decoration: none;
  color: inherit;
}

.category-li > i {
  position: absolute;
  line-height: 24px;
  right: 12px;
}

.category-li:hover {
  background: rgba(255,150,0,0.08);
  color: #222;
}

/* 详细分类 */
.category-nav-detail {
  height: 100%;
  position: absolute;
  left: 100.5%;
  top: 0;
}
</style>