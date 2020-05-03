<template>
  <div class="category">
    <div class="category-container">
      <h3 class="category-nav-title">全部分类</h3>
      <ul>
        <li class="category-li">
          <nuxt-link
            v-for="(cat, index) of category"
            :to="cat.link"
            :key="cat.index"
            target="_blank"
          >
            <!-- 如果索引加一比分类数量小则显示分隔符 -->
            {{ category.length > index + 1  ?  cat.text + " / " : cat.text }}
          </nuxt-link>
          <i class="el-icon-arrow-right"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'nuxt-property-decorator'

@Component
export default class CategoryNav extends Vue {
  category = [
    {
    cat_id: 1,
    index: '1.1',
    text: '美食',
    link: '#'
    },
    {
    cat_id: 2,
    index: '1.2',
    text: '小吃',
    link: '#'
  }
  ]
}
</script>

<style scoped>
.category {
  width: 230px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
}

.category-title {
  color: #666;
  font-size: 16px;
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
  color: var(--color-normal);
}

/* .category-li > i {
  position: absolute;
  right: 12px;
} */

.category-li:hover {
  background: rgba(255,150,0,0.08);
}
</style>