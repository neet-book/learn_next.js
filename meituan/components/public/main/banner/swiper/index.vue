<template>
  <div class="swiper">
    <div class="swiper-conteier" ref="conRef">
      <a>
        <img>
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
    let count = this.$refs.conRef.querySelectorAll('.swiper-item')
  }
}
</script>

<style scoped>
.swiper {
  position: relative;
}

.swiper-indicator {
  position: absolute;
  left: 50%;
  transform: translateX(-50%)
}
</style>