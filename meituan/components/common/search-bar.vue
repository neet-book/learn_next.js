<template>
  <div class="search-bar">
    <input
      v-model="content"
      :placeholder="placeholder"
      @focus="onFocus"
      @blur="onBlur"
      @input="getSuggest"
      @keydown.enter="submitSearch"
      class="search-box"
    >
    <button class="search-button" @click="submitSearch">
      <i class="el-icon-search"></i>
    </button>
    <!-- 搜索历史 -->
    <div class="search-history" v-show="showHistory">
      <h6>搜索历史</h6>
      <ul class="search-result-list">
        <li v-for="his of history" :key="his.id">
          <nuxt-link :to="his.link" target="_blank" class="item">{{ his.text }}</nuxt-link>
        </li>
      </ul>
    </div>
    <!-- 搜索推荐 -->
    <div class="search-suggest" v-show="showSuggest">
      <ul class="search-result-list">
        <li v-for="sug of suggests" :key="sug.id" @click="choseSuggest(sug)">
          <nuxt-link :to="sug.link" target="_blank" class="item">{{ sug.text }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { throttle } from '~/assets/script/util'
interface Suggest {
  id: string | number
  text: string
  link?: string
}

@Component
export default class SearchBar extends Vue {
  @Prop(String) placeholder: string | undefined
  content: any = ''
  isFocus: boolean = false;
  suggests: Suggest[] = [{ id: 0, text: 'o', link: '/api/city' }]
  history: Suggest[] = []

  // hook
  mounted() {
    const localHistory = window.localStorage.getItem('search-history')
    this.history =  localHistory ?  JSON.parse(localHistory) : []
  }

  // methods
  onFocus() {
    this.isFocus = true
  }

  onBlur() {
    window.setTimeout(() => this.isFocus = false, 100)
    // this.isFocus = false
  }

  // 提交搜索内容
  submitSearch(): void {
    const serchContent: string = this.content
    this.history.push({
      id: this.history.length,
      text: serchContent,
      link: '#'
    })
    this.saveHistory()
  }

  // 获得搜索推荐
  getSuggest =  throttle(function () {

  }, 1000)
  // 选择推荐项
  choseSuggest(sug: Suggest): void {
    let has: boolean = false
    const text = sug.text
    // 如果已经有相同的历史则不添加
    for (const his of this.history) {
      if (his.text === text) {
        has = true
        break
      }
    }

    if (!has) {
      const copy = Object.assign({}, sug)
      copy.id = this.history.length
      this.history.unshift(copy)
      this.saveHistory()
    }
  }

  // 存储历史记录
  saveHistory(): void {
    window.localStorage.setItem('search-history', JSON.stringify(this.history))
  }
  // computed
  get showHistory() {
    return this.content === '' && this.isFocus
  }

  get showSuggest() {
    return this.content !== '' && this.isFocus
  }
}
</script>


<style scoped>
.search-bar {
  width: 420px;
  height: 40px;
}

.search-box,.search-button {
  border: none;
  outline: none;
}

.search-box {
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

/* 搜索历史，推荐列表布局 */
.search-history, .search-suggest {
  width: 84.45%;
  background: white;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
  border-radius: 0 0 4px 4px;
  border: 1px solid #e5e5e5;
  border-top: none;
  z-index: 9999;
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

.item {
  display: block;
  height: 100%;
}
</style>
