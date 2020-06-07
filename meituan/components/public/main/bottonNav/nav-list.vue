<template>
  <dl class="b-n-list clear-fix">
    <dt class="b-n-list-title">{{ title }}</dt>
    <div class="b-n-items-container clear-fix">
      <dd
        v-for="i of items"
        :key="i.c_id"
        class="b-n-item"
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
  @Prop(Array) items: NavItem[] | undefined
}
</script>

<style scope>
.b-n-list {
  height: 73px;
}

.b-n-list-title {
  width: 100px;
  padding-top: 10px;
  float: left;

  text-align: center;
  color: #222;
  font-size: 14px;
  font-weight: 400;
}

.b-n-items-container {
  width: 1088px;
  height: auto;
  overflow: hidden;
  padding-top: 10px;
  float: left;
}

.b-n-item {
  float: left;
  width: 100px;

  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  margin-bottom: 13px;
}
.b-n-item a{
  text-decoration: none;
  color: #666;
}
</style>