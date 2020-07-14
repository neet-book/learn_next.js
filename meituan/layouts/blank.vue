<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class Blank extends Vue {

}
</script>

<style scoped>
.container {
  background-color: white;
}
</style>
