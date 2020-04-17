<template>
  <div class="city">
    <span class="el-icon-location"></span>
    [{{ current }}]
    <a class="change-city">切换城市</a>
    [
    <a
      v-for="guess of nearby"
      :key="guess.id"
      :href="guess.link"
      class="guess-city"
      >
      {{ guess.city }}
    </a>
    ]
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

interface city {
  id: number
  link: string
  city: string
}

@Component
export default class City extends Vue {
  @Prop({ default: '' }) current!: string | undefined
  @Prop({ default: [] }) nearby: city[] | undefined
}
</script>

<style scoped>

</style>