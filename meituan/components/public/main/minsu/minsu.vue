<template>
  <div class="minshu">
    <!-- 城市列表 -->
    <box-header class="header">
        城市
      <template v-slot:subtitle>
        <div class="cities">
          <!-- 所有城市 -->
          <ul class="clear-fix">
            <li
              v-for="city of cities"
              :key="city.cityId"
              :class="{ current: city.cityId === current }"
              @mouseover="changeCity(city.cityId)"
              class="city"
            >{{ city.cityName }}</li>
          </ul>
        </div>
      </template>
      <template v-slot:righttitle>
        全部<i class="el-icon-arrow-right"></i>
      </template>
    </box-header>
    <!-- 民宿卡片 -->
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
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import MinsuCard from './minsu-card.vue'
import BoxHeader from '~/components/common/box-header.vue'

export interface City {
  _id: string
  cityId: number
  cityName: string
}
interface MinsuList {
  [cityId: number]: any
}

@Component({
  components: {
    BoxHeader,
    MinsuCard
  },
  async mounted() {
    const cityId = this.$props?.cities[0]?.cityId || 0
    try {
      this.$data.minsu[cityId] = await this.$net.getMinsu(cityId)
    } catch (e) {
      this.$data.minsu[cityId] = []
    }
    this.$data.current = cityId
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
.minshu {
  margin-top: 40px;
}
.city {
  float: left;
  padding: 0 5px;
  line-height: 44px;
  position: relative;
  cursor: pointer;
}

.card {
  padding: 11px 10px 25px;
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
  height: 645px;
  overflow: hidden;
  border: solid 1px #e5e5e5;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 9px;
}
</style>
