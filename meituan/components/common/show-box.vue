<template>
  <div class="show-box">
    <div class="box-header clear-fix">
      <div class="title main-title">
        <slot name="maintitle"></slot>
      </div>
      <div class="title sub-title">
        <slot name="subtitle"></slot>
      </div>
      <div class="title right-title">
        <slot name="righttitle">
      
        </slot>
      </div>
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

.title {
  display: inline-block;
  color: #fff;
  /* height: 44px; */
  line-height: 44px;
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
  line-height: 44px;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  float: right;

}
.box-container {
  padding: 10px;
}


</style>