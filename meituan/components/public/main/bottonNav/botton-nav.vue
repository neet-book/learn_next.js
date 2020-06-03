<template>
  <div class="botton-nav">
    <nav-list
      v-for="n of navs"
      :key="n.c_id"
      :title="n.title"
      :items="n.items"
    >
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class BottonNav extends Vue {

}
</script>


<style scoped>

</style>
