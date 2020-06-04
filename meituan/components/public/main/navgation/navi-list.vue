<template>
  <dl class="navigation-list">
    <dt>标题</dt>
    <div class="nav-item-container">
      <dd>
        <nuxt-link>{{  }}</nuxt-link>
      </dd>
    </div>
  </dl>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export interface NavItem {
  c_id: number
  index: number | string
  href: string
  text: string
}
@Component
export default class NavigationList extends Vue {
  @Prop(String) title: string | undefined
  @Prop(Object) listItems: NavItem[] | undefined
}
</script>


<style scoped>

</style>