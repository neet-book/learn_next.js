<template>
  <div class="user-entry">
    <!-- 已登录 -->
    <template v-if="isLoging">
      <nuxt-link to="/user" class="logup-loging" target="_blank">{{ user }}</nuxt-link>
      <nuxt-link to="/" class="signout-logon" target="_blank">退出</nuxt-link>
    </template>
    <!-- 未登录 -->
    <template v-else>
      <nuxt-link to="/loging" class="logup-loging" target="_blank">立即登录</nuxt-link>
      <nuxt-link to="/register" class="signout-logon" target="_blank">注册</nuxt-link>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
interface User {
  name: string
}
@Component
export default class UserEntry extends Vue {
  @Prop({
    default: false,
    type: Boolean
  })
  isLoging: boolean | undefined
  @Prop(String) user: string | undefined
}
</script>


<style scoped>
.user-entry {
  display: inline-block;
}

.logup-loging, .signout-logon {
  cursor: pointer;
  color: var(--color-tint);
  font-size: 12px;
  text-decoration: none;
}

.logup-loging:hover, .signout-logon:hover {
  color: var(--color-hover);
}
</style>