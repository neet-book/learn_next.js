<template>
  <div class="position">
    <span class="el-icon-location"></span>
    <span class="current-city">{{ current }}</span>
    <nuxt-link class="change-city" to="/change" tag="a" target="_blank">
      切换城市
    </nuxt-link>
    [
    <nuxt-link
      v-for="guess of nearby"
      :key="guess.id"
      :to="guess.link"
      class="guess-city"
    >
      {{ guess.city }}
    </nuxt-link>
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
export default class Position extends Vue {
  @Prop({ default: '' }) current!: string | undefined
  @Prop({ default: () => [] }) nearby: city[] | undefined
}
</script>

<style scoped>
.position {
  color: #999;
  font-size: 12px;
  display: inline-block;
}
.change-city, .guess-city {
  text-decoration: none;
}
.change-city:hover, .guess-city:hover{
  color: #FE8C00;
  cursor: pointer;
}

.change-city {
  color: #666;
  border: 1px solid #E5E5E5;
  border-radius: 2px;
  padding: 0 2px;
  margin: 0 4px;
  background: #F4F4F4;
}

.guess-city {
  color: #999;
  margin: 0 4px;
}
</style>