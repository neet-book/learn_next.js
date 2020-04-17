<template>
  <div class="user">
    <nuxt-link :to="link" class="user">{{ user ? "立即登录" : user }}</nuxt-link>
    <nuxt-link :to="out" class="ini">{{ user ? "退出" : "注册" }}</nuxt-link>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class User extends Vue {
  user: string = ''
}
</script>


<style scoped>

</style>