<template>
  <div class="minshu">
    <show-box>
      <template v-slot:maintitle>
        民宿
      </template>
      <template v-slot:subtitle>
        <div class="cities">
          <ul class="clear-fix">
            <li
              v-for="city of cities"
              :key="city._id"
              class="city"
            >{{ city.cityName }}</li>
          </ul>
        </div>
      </template>
      <template v-slot:righttitle>
        quanbu
      </template>
    </show-box>
  </div>
</template>

<script lang="ts">
export interface City {
  _id: string
  cityId: number
  cityName: string
}

import { Vue, Component, Prop } from 'nuxt-property-decorator'
import ShowBox from '~/components/common/show-box.vue'
@Component({
  components: {
    ShowBox
  }
})
export default class Minsu extends Vue {
  @Prop({ type: Array, default: () => [] })
  cities: City[] | undefined
}
</script>

<style scoped>
.city {
  float: left;
}

.city > ul {
  display: inline-block;
}
</style>