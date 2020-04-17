<template>
  <div class="header">
    <positiongot></position>
    <user />
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Position from './position.vue'
@Component({
  components: {
    Position
  }
})
export default class Header extends Vue {

}
</script>


<style scoped>

</style>