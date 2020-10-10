<template>
  <div class="container">
    <common-header />
    <main>
      <div id="main-container">
        <nuxt />
      </div>
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
#main-container {
  max-width: 1190px;
  min-width: 950px;
  margin: 0 auto;
}



@media screen and (max-width: 1190px){
  #main-container {
    width: 950px;
  }
}
</style>
