<template>
  <div>
    <common-header/>
    <main>
      <nuxt/>
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
export default class  extends Vue {
  
}
</script>


<style scoped>
header {
  height: 127px;
}
</style>