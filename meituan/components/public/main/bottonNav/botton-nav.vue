<template>
  <div class="botton-nav">
    <h3 class="title">导航</h3>
    <nav-list
      v-for="n of navList"
      :key="n.c_id"
      :title="n.title"
      :items="n.items"
      class="list"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import NavList from './nav-list.vue'

@Component({
  components: {
    NavList
  }
})
export default class BottonNav extends Vue {
  @Prop({ type: Array, default() { return []} }) navList: any[] | undefined
}
</script>

<style scoped>
.botton-nav {
  margin: 40px 0;
  background-color: white;
  border: 1px solid #e5e5e5;
}

.title {
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  color: #222;
  font-weight: 500;
  padding: 6px 0 0 20px;
}

.list >>> .b-n-items-container {
  border-bottom: 1px solid #e5e5e5;
}

.list:last-child >>> .b-n-items-container {
  border-bottom: none;
}
</style>
