<template>
  <div class="fm-input">
    <input v-if="!label" type="text" v-bind="$attrs" v-on="$listeners">
    <label v-else>{{ label }}<input type="text" v-bind="$attrs" v-on="$listeners"></label>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'nuxt-property-decorator'

@Component
export default class  extends Vue {
  @Prop(String) label: string | undefined
}
</script>

<style scoped>

</style>