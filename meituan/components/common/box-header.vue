<template>
  <div class="box-header clear-fix">
    <div class="title main-title">
      <slot name="maintitle"></slot>
    </div>
    <div class="title sub-title">
      <slot name="subtitle"></slot>
    </div>
    <div class="title right-title">
      <slot name="righttitle"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class BoxHeader extends Vue {

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

.title {
  color: #fff;
  float: left;
  line-height: 44px;
  padding-bottom: 0;
}

.main-title {
  font-size: 18px;
  margin-right: 10px;
}

.sub-title {
  font-size: 13px;
  position: relative;
}

.right-title {
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  float: right;
  cursor: pointer;

}
.box-container {
  padding: 10px;
}


</style>