<template>
  <div>
    <header>
      <position current="深圳" :nearby="nearbyCity" />
    </header>
    <main>
      <nuxt/>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Position from '~/components/public/header/position.vue'

@Component({
  components: {
    Position
  }
})
export default class  extends Vue {
  nearbyCity = [
    {
      id: 0,
      link: '#',
      city: '惠州'
    },
    {
      id: 1,
      link: '#',
      city: '东莞'
    },
  ]
}
</script>


<style scoped>
header {
  height: 127px;
}
</style>