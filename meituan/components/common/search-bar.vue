<template>
  <div class="search-bar">
    <input
      v-model="content"
      :placeholder="placeholder"
      @focus="showSuggest = true"
      @blur="showSuggest = false"
      @input="getSuggest"
      class="search-input"
    >
    <button class="search-button" @click="submitSearch"><span class="el-icon-search"></span></button>
    <!-- 搜索建议 -->
    <div class="search-bar-suggest" v-show="showSuggest">
      <!-- 搜索历史 -->
      <div class="search-history" v-show="showHistory">
        <h6>搜索历史</h6>
        <ul class="search-result-list">
          <li v-for="his of history" :key="his.id">
           <nuxt-link :to="his.link" target="_blank">{{ his.text }}</nuxt-link>
          </li>
        </ul>
      </div>
      <!-- 搜索推荐 -->
      <div class="search-suggest-content" v-show="!showHistory">
        <ul class="search-result-list">
          <li v-for="sug of suggests" :key="sug.id" @click="choseSuggest(sug)">
            <nuxt-link :to="sug.link" target="_blank">{{ sug.text }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { throttle } from '~/static/script/util'
interface Suggest {
  id: string | number
  text: string
  link?: string
}
@Component
export default class SearchBar extends Vue {
  @Prop(String) placeholder: string | undefined
  content: any = ''
  showSuggest: boolean = false;
  suggests: Suggest[] = [{ id: 0, text: 'o', link: '#' }]
  history: Suggest[] = []
  // hook
  mounted() {
    const localHistory = window.localStorage.getItem('search-history')
    this.history =  localHistory ?  JSON.parse(localHistory) : []
  }

  // methods

  // 提交搜索内容
  submitSearch(): void {
    const serchContent: string = this.content
    this.history.push({
      id: this.history.length,
      text: serchContent
    })
    this.saveHistory()
  }
  // 获得搜索推荐
  getSuggest =  throttle(function () {

  }, 1000)
  // 选择推荐项
  choseSuggest(sug: Suggest): void {
    let has: boolean = false
    // 如果已经有相同的历史则不添加
    for (const his of this.history) {
      if (his.text === sug.text) {
        has = true
        break
      }
    }

    if (has) this.history.unshift(sug)
    this.saveHistory()
  }

  // 存储历史记录
  saveHistory(): void {
    window.localStorage.setItem('search-history', JSON.stringify(this.history))
  }
  // computed
  get showHistory() {
    return this.content === ''
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
