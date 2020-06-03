<template>
  <dl class="nav-list">
    <dt>{{ title }}</dt>
    <div class="nav-item-container">
      <dd
        v-for="i of listItems"
        :key="i.c_id"
      >
        <nuxt-link :to="i.href" target="_blank">{{ i.text }}</nuxt-link>
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
export default class NavList extends Vue {
  @Prop(String) title: string | undefined
  @Prop(Object) items: NavItem[] | undefined
}
</script>


<style scoped>

</style>