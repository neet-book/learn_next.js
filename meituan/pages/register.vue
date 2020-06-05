<template>
  <div class="container">
    <header>
      <img>
      <nuxt-link>已有美团账号?</nuxt-link>
      <button>登录</button>
    </header>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  layout: 'register'
})
export default class  extends Vue {

}
</script>

<style scoped>

</style>