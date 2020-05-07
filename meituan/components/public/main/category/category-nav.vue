<template>
  <div class="category">
    <h3 class="category-title">全部分类</h3>
    <div class="category-container">
      <ul>
        <li class="category-li"
          v-for="category of categoryList"
          :key="category.cat_id"
          @mouseover="currentCat = category.cat_id"
          @mouseleave="currentCat = false"
        >
          <nuxt-link
            v-for="(cat, index) of category.cats"
            :to="cat.link"
            :key="cat.index"
            target="_blank"
          >
            <!-- 如果索引加一比分类数量小则显示分隔符 -->
            {{ category.cats.length > index + 1  ?  cat.text + " /" : cat.text }}
          </nuxt-link>
          <i class="el-icon-arrow-right"></i>
        </li>
      </ul>
      <category-nav-detail
      v-for="cat of detailCategorys"
      :key="cat.cat_id"
      :catDetails="cat.details"
      class="category-nav-detail"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'nuxt-property-decorator'
import CategoryNavDetail from './category-nav-detail.vue'
@Component({
  components: {
    CategoryNavDetail
  }
})
export default class CategoryNav extends Vue {
  currentCat: number | boolean = 0
  inject: string[] = ['detailCategorys']
  categoryList = [
    {
      cat_id: 1,
      cats:
      [{
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
      }]
    },
    {
      cat_id: 2,
      cats:
      [{
        cat_id: 2,
        index: '2.1',
        text: '美食',
        link: '#'
      },
      {
        cat_id: 2,
        index: '2.2',
        text: '小吃',
        link: '#'
      }]
    }
  ]

  catDetails = [
    {
      cat_id: 1,
      details: [
        {
          title: '机票',
          cat_id: 1,
          details: [
            { 
              "cat_id" : 1,
              "detail_id" : 1,
              "index" : "1_1_0",
              "text" : "代金券",
              "href" : "https://sz.meituan.com/meishi/c393/"
            },
            {
              "cat_id" : 1,
              "detail_id" : 1,
              "index" : "1_1_1",
              "text" : "甜点饮品",
              "href" : "https://sz.meituan.com/meishi/c11/"
            }
          ]
        }
      ]
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
  position: absolute;
  left: 100.5%;
  top: 0;
}
</style>