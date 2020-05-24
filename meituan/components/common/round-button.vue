<template>
  <div class="round-button" v-on="$listeners">
    <i :class="'el-icon-arrow-' + direction"></i>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class  extends Vue {
  @Prop({ type: String, default: 'left' }) direction: string | undefined
}
</script>

<style scoped>
.round-button {
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
  cursor: point;
}
</style>