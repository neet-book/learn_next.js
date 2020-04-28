<template>
  <div class="search-bar">
    <input
      v-model="content"
      :placeholder="placeholder"
      @focus="focusSearch"
      @blur="blurSearch"
      class="search-input"
    >
    <button class="search-button" @click="submitSearch"><span class="el-icon-search"></span></button>
    <!-- 搜索建议 -->
    <div class="search-bar-suggest" v-show="showSuggest">
      <!-- 搜索历史 -->
      <div class="search-history">
        <h6>搜索历史</h6>
        <ul class="search-result-list">
          <li v-for="his of history" :key="his.id">
            <nuxt-link :to="his.link" target="_blank">{{ his.text }}</nuxt-link>
          </li>
        </ul>
      </div>
      <!-- 搜索推荐 -->
      <div class="search-suggest-content">
        <ul class="search-result-list">
          <li>
            <nuxt-link to="#" target="_blank">001</nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" target="_blank">00551</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
interface Suggest {
  id: string | number
  text: string
  link: string
}
@Component
export default class SearchBar extends Vue {
  @Prop(String) placeholder: string | undefined
  content: any = ''
  showSuggest: boolean = false;
  suggests: Suggest[] = [{ id: 0, link: '#', text: '' }]
  history: Suggest[] = [{ id: 0, link: '#', text: '' }]
  focusSearch(): void {
    this.showSuggest = true
    const history: Suggest[] = JSON.parse(window.localStorage.getItem('searchHistory'))


  }

  blurSearch(): void {
    this.showSuggest = false
  }

  submitSearch(): void {

  }
}
</script>


<style scoped>
.search-bar {
  width: 420px;
  height: 40px;
}

.search-input,.search-button {
  border: none;
  outline: none;
}

.search-input {
  font-size: 14px;
  line-height: 100%;
  padding: 15px;
  height: 100%;
  width: 84.45%;
  border-radius: 4px 0 0 4px;
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  border-right: none;
}

.search-button {
  width: 15.55%;
  height: 100%;
  background: #FFC300;
  float: right;
  border-radius: 0 4px 4px 0;
}

/* 搜索推荐 */
.search-bar-suggest {
  width: 84.45%;
  background: white;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
  border-radius: 0 0 4px 4px;
  border: 1px solid #e5e5e5;
  border-top: none;
}

.search-result-list li > a {
  display: block;
  line-height: 1.6;
  font-size: 12px;
  color: #666;
  padding: 3px 10px;
  text-decoration: none;
}

.search-result-list > li > a:hover {
  background: #f8f8f8;
  color: var(--color-hover);
}

.search-history h6 {
  padding-bottom: 5px;
  color: #666;
  text-align: left;
  font-size: 14px;
  padding: 3px 10px;
}
</style>
