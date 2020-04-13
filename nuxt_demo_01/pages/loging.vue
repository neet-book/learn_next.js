<template>
  <div class="container">
    <form class="loging-form">
      <label for="user">User Name: </label><br>
      <input type="text" name="username" v-modle="userName" id="user"><br>
      <label for="pwd">Password: </label><br>
      <input type="password" name="pwd" v-modle="pwd" id="pwd">
      <button type="submit" name="loging" @click.prevent="loging">Loging</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Logo from '~/components/Logo.vue'
import axios from 'axios'
@Component({
  components: {
    Logo
  }
})
export default class Loging extends Vue {
  userName: string = ''
  pwd: string = ''
  async loging(): Promise<void> {
    this.$nuxt.$loading.start()
    const { data: { result, meta } } = await axios.post('/loging', {
      data: {
        userName: this.userName,
        pwd: this.pwd
      }
    })
    this.$nuxt.$loading.finish()
    if (meta.status !== 200) return alert(meta.msg)
    this.$router.push('/index')
  }
}
</script>

<style>

</style>
