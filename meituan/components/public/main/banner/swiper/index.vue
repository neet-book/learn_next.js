<template>
  <div class="swiper">
    <div class="swiper-conteier" ref="conRef">
      <a
        v-for="(i, index) of items"
        :key="i.id"
        :href="i.href"
        target="_blank"
        :class="{
          current: currentIndex === index,
          next: nextIndex === index
        }"
        class="swiper-item"
      >
        <img :src="i.src" :alt="i.dis">
      </a>
      <!-- 按钮 -->
      <div class="btn btn-pre" @click="toPre"><i class="el-icon-arrow-left"></i></div>
      <div class="btn btn-next" @click="toNext"><i class="el-icon-arrow-right"></i></div>
      <!-- 指示器 -->
      <indicator class="swiper-indicator" :count="count" :currentItem="currentIndex" @click="toItem($event)" />
    </div>
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
  nextIndex: number = 1
  count: number = 0
  timer: number | undefined
  // prop
  @Prop(Array)items: any[] | undefined
  @Prop({ type: Number, default: 3300 }) layout: number | undefined
  // hook
  mounted() {
    // 操作DOM获取轮播图数量
    this.handleDom()
    this.start()
  }

  // methods
  start(): void {
    // 检查index与next
    let index = this.currentIndex
    let next = this.nextIndex

    this.timer = window.setInterval(() => {
      index++
      next++
      [index, next] = this.checkIndex(index, next)
      this.setIndex(index, next)
    }, this.layout)
  }

  stop(): void {
    window.clearInterval(this.timer)
  }

  setIndex(index: number, next: number) {
    // 设置index
    this.currentIndex = index
    this.nextIndex = next
  }

  handleDom(): void {
    const container: Element = this.$refs.conRef as Element
    this.count = container.querySelectorAll('.swiper-item').length
  }

  checkIndex(index: number, next: number): number[] {
    // 检查index，next
    switch(true) {
      case index === this.count - 1:
        next = 0
      break

      case index > this.count - 1:
        next = 1
        index = 0
      break

      case index < 0:
        index = this.count - 1
        next = 1
      break

      case index === 0:
        next = 1
      break
    }

    return [index, next]
  }

  toNext() {
    this.stop()
    let [index, next] = this.checkIndex(this.currentIndex + 1, this.nextIndex + 1)
    this.setIndex(index, next)
    this.start()
  }

  toPre() {
    this.stop()
    let [index, next] = this.checkIndex(this.currentIndex - 1, this.nextIndex - 1)
    this.setIndex(index, next)
    this.start()
  }

  toItem(index: number) {
    this.stop() 
    let next: number
    [index, next] = this.checkIndex(index, index + 1)
    this.setIndex(index, next)
    this.start()
  }
}
</script>

<style scoped>
.swiper {
  position: relative;
}

.btn {
  display: inline-block;
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  color: white;
  opacity: 0.5;
  border-radius: 50%;
  background: black;
  z-index: 100;
}

.btn-pre {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px
}

.btn-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px
}

.swiper-container {
  position: relative;
}

.swiper-item {
  position: absolute;
  opacity: 0;
  transition: opacity 0.8s;
}

.current {
  opacity: 1;
  z-index: 99
}

.pre {
  z-index: 90
}

.swiper-item img{
  width: 100%;
  height: 100%;
}

.swiper-indicator {
  position: absolute;
  left: 50%;
  bottom: 3%;
  transform: translateX(-50%);
  z-index: 100;
}
</style>