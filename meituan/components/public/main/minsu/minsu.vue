<template>
  <div class="minshu">
    <box-header class="header">
      <template v-slot:maintitle>
        城市
      </template>
      <template v-slot:subtitle>
        <div class="cities">
          <ul class="clear-fix">
            <li
              v-for="city of cities"
              :key="city._id"
              class="city current"
            >{{ city.cityName }}</li>
          </ul>
        </div>
      </template>
      <template v-slot:righttitle>
        quanbu
      </template>
    </box-header>
  </div>
</template>

<script lang="ts">
export interface City {
  _id: string
  cityId: number
  cityName: string
}

import { Vue, Component, Prop } from 'nuxt-property-decorator'
import BoxHeader from '~/components/common/box-header.vue'
@Component({
  components: {
    BoxHeader
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
  padding: 0 5px;
  line-height: 44px;
  position: relative;
}

.current::after {
  content: "";
  display: block;
  width: 2px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 7px solid white;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%)
}

.header {
  background-color: linear-gradient(
    to right,
    rgb(243, 182, 74) 2%,
    rgb(242, 197, 69) 97%)
    rgb(243, 182, 74
  );
}
</style>