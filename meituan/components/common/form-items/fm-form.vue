<template>
    <form>
        <slot></slot>
    </form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

export interface FormItem {
  result: boolean
  value: any
  rule: string
  inst: Vue
}

export interface FormItems {
  [name: string]: FormItem
}

@Component({
  provide() {
    return {
      $fm_form: this
    }
  }
})
export default class FmForm extends Vue {
  formItems: FormItems = {}
  
  validater (): FormItem[] {
    const failedItems: FormItem[] = [] 
    for (const [key, item] of Object.entries(this.formItems)) {
      if (!item.result) {
        failedItems.push(item)
      }
    }

    return failedItems
  }
  
}
</script>

<style scoped>

</style>