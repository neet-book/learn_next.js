<template>
  <div class="swiper">
    <div class="swiper-conteier" ref="conRef">
      <div
        v-for="(i, index) of items"
        :key="i.id"
        :class="{
          current: currentIndex === index,
          next: nextIndex === index
        }"
        :style="{ backgroundImage: `url(${i.src})` }"
        class="swiper-item"
      >
        <a :href="i.href" target="_blank">
        </a>
      </div>
      <!-- 按钮 -->
      <round-button direction="left" class="btn-pre" @click="toPre" />
      <round-button direction="right" class="btn-next" @click="toNext" />
      <!-- 指示器 -->
      <indicator class="swiper-indicator" :count="count" :currentItem="currentIndex" @click="toItem($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Indicator from './indicator.vue'
import RoundButton from '~/components/common/round-button.vue'
@Component({
  components: {
    Indicator,
    RoundButton
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

/* 按钮 */
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
  right: 10px;
}

/* 轮播图容器 */
.swiper-container {
  position: relative;
}

.swiper-item {
  width: 100%;
  height: 100%;
  background-repeat: no-repeatl;
  background-position: 50%;
  background-size: cover;
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
  position: relative
}

.swiper-indicator {
  position: absolute;
  left: 50%;
  bottom: 3%;
  transform: translateX(-50%);
  z-index: 100;
}
</style>