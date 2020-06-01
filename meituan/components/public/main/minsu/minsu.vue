<template>
  <div class="minshu">
    <box-header class="header">
      <template v-slot:maintitle>
        城市
      </template>
      <template v-slot:subtitle>
        <div class="cities">
          <!-- 所有城市 -->
          <ul class="clear-fix">
            <li
              v-for="city of cities"
              :key="city.cityId"
              :class="{ current: city.cityId === current }"
              @click="changeCity(city.cityId)"
              class="city"
            >{{ city.cityName }}</li>
          </ul>
        </div>
      </template>
      <template v-slot:righttitle>
        全部<i class="el-icon-allow-right"></i>
      </template>
    </box-header>
    <!-- 民宿 -->
    <div class="minsu-content">
      <minsu-card
        v-for="ms of minsu[current]"
        :key="ms.productId"
        :minsu="ms"
        class="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
export interface City {
  _id: string
  cityId: number
  cityName: string
}
interface MinsuList {
  [cityId: number]: any
}
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import BoxHeader from '~/components/common/box-header.vue'
import MinsuCard from './minsu-card.vue'
@Component({
  components: {
    BoxHeader,
    MinsuCard
  },
  async mounted() {
    const cityId = this.$props?.cities[0]?.cityId || 0
    this.$data.minsu[cityId] = await this.$net.getMinsu(cityId)
    this.$data.current = cityId
    console.log(this.$data.minsu, cityId)
  }
})
export default class Minsu extends Vue {
  @Prop({ type: Array, default: () => [] })
  cities: City[] | undefined
  current: number = 0
  minsu: MinsuList = {}

  async changeCity(cityId:number): Promise<void> {
    console.log(cityId)
    const minsu: MinsuList = this.minsu
    if (minsu[cityId] === undefined) {
      minsu[cityId] = await this.$net.getMinsu(cityId)
      this.current = cityId
    } else {
      this.current = cityId
    }
  }
}
</script>

<style scoped>
.city {
  float: left;
  padding: 0 5px;
  line-height: 44px;
  position: relative;
  cursor: pointer;
}

.card {
  padding-bottom: 25px;
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
  background: linear-gradient(
    to right,
    rgb(243, 182, 74) 2%,
    rgb(242, 197, 69) 97%),
    rgb(243, 182, 74
  );
}

.minsu-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-top: 10px;
}
</style>