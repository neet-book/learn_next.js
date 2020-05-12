<template>
  <div class="indicator clear-fix">
    <div
      v-for="n of count"
      :key="n"
      :class="{ acitve: currentItem === n - 1 }"
      @click="$emit('click', n - 1)"
      class="indicator-slider"
    ></div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Indicator extends Vue {
  @Prop(Number)count: number | undefined
  @Prop(Number)currentItem: number | undefined
}
</script>


<style scoped>
.indicator-slider {
  width: 10px;
  height: 5px;
  background: white;
  opacity: 0.5;
  transform: opacity 0.3s easy;
  float: left;
  margin: 0 5px;
}

.acitve {
  opacity: 1;
}
</style>