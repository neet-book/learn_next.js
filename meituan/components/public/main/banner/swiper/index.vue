<template>
  <div class="swiper">
    <div class="swiper-conteier" ref="conRef">
      <a
        v-for="i of items"
        :key="i.id"
        :href="i.href"
        target="_blank"
        class="swiper-item"
      >
        <img :src="i.src" :alt="i.dis">
      </a>
    </div>
    <div class="btn-pre"></div>
    <div class="btn-next"></div>
    <indicator class="swiper-indicator" :count="5" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Indicator from './indicator.vue'
@Component({
  components: {
    Indicator
  }
})
export default class Swiper extends Vue {
  currentIndex: number = 0
  count: number = 0

  // prop
  @Prop(Array)items: any[] | undefined

  // hook

  mounted() {
    this.start()
  }

  start(): void {
    // 操作DOM获取轮播图数量
    this.handleDom()
  }

  handleDom(): void {
    const container: Element = this.$refs.conRef as Element
    this.count = container.querySelectorAll('.swiper-item').length
  }

  setOpacity() {
    
  }
}
</script>

<style scoped>
.swiper {
  position: relative;
}

.swiper-container {
  position: relative;
}

.swiper-item {
  position: absolute;
}

.swiper-item img{
  width: 550px;
}

.swiper-indicator {
  position: absolute;
  left: 50%;
  transform: translateX(-50%)
}
</style>