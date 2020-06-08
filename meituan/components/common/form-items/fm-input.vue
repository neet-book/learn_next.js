<template>
  <div class="fm-input">
    <input
      v-if="!label"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <label v-else>{{ label }}<input
      type="text"
      :value="v"
      @input="onInput"
    ></label>
    <span class="msg">{{ msg }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export interface Rule {
  required?: boolean
  validator?: Function
  type?: ['number', 'phone', 'email']
  max?: number
  min?: number
  msg: string
}

@Component
export default class FmInput extends Vue {
  @Prop(String) label: string | undefined
  @Prop(String) value: string | undefined
  @Prop(Object) rule: Rule |undefined
  v: any = ''
  msg: string | undefined = ''

  onInput(event: any) {
    const value = event.target.value
    if (this.validate(value)) {

    }
  }

  validate(content: any): boolean {
    const rule = this.rule
    if (!rule) return true

    const items = Object.entries(rule)

    return true
  }
}
</script>

<style scoped>

</style>
