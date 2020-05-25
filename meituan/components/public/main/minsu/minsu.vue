<template>
  <div class="minshu">
    <show-box>
      <template v-slot:mainTitle>
        民宿
      </template>
    </show-box>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import ShowBox from '~/componnets/common/show-box.vue'
@Component
export default class Minsu extends Vue {

}
</script>

<style scoped>

</style>