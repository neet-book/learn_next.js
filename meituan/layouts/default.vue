<template>
  <div class="container">
    <common-header />
    <main>
      <nuxt />
    </main>
    <footer>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import CommonHeader from '~/components/public/header/index.vue'

@Component({
  components: {
    CommonHeader
  }
})
export default class DefaultLayout extends Vue {

}
</script>

<style scoped>
.container {
  min-width: 660px;
}
</style>
