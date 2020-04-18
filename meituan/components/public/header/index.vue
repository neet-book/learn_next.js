<template>
  <header class="header">
    <div class="header-bar">
      <div class="header-bar-container">
        <position current="深圳" :nearby="nearbyCity" />
        <user-entry user="suer" :isLoging="false" />
      </div>
    </div>
    <div class="header-content">
    </div>
  </header>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Position from './position.vue'
import UserEntry from './user-entry.vue'
@Component({
  components: {
    Position,
    UserEntry
  }
})
export default class CommonHeader extends Vue {
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
.header-bar {
  height: 40xp;
  line-height: 40px;
}
.header-bar-container {
  max-width: 1190px;
  margin: 0 auto;
}

.header-content {
  background: white;
  height: 157px
}
</style>