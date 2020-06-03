<template>
  <div class="botton-nav">
    <nav-list
      v-for="n of navList"
      :key="n.c_id"
      :title="n.title"
      :items="n.items"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import NavList from './nav-list.vue'

@Component({
  components: {
    NavList
  }
})
export default class BottonNav extends Vue {
  @Prop({ type: Array, default() { return []} }) navList: any[] | undefined
}
</script>

<style scoped>

</style>
