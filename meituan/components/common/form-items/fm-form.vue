<template>
    <form>
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  provide() {
    return {
      $fm_form: this
    }
  }
})
export default class FmForm extends Vue {
  // validator(): boolean {
  //   for (item in this.formItems) {

  //   }
  // }
  formItems = {}
}
</script>

<style scoped>

</style>