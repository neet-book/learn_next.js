<template>
  <div class="show-box">
    <div class="box-hearder">
      <span class="main-title">
        <slot name="maintitle"></slot>
      </span>
      <span class="sub-title">
        <slot name="subTitle"></slot>
      </span>
    </div>
    <div class="box-container">
      <slot name="container"></slot>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class ShowBox extends Vue {

}
</script>


<style scoped>
.box-header {
  height: 44px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0 20px;
  background: linear-gradient(
  to right,
  rgb(88, 174, 221) 2%,
  rgb(66, 191, 205) 97%), 
  rgb(88, 174, 221);
}
</style>