<template>
  <div class="minshu">
    <show-box>
      <template v-slot:maintitle>
        民宿
      </template>
      <template v-slot:subtitle>
        <div class="cities">
          <ul>
            <li></li>
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
import { Vue, Component } from 'nuxt-property-decorator'
import ShowBox from '~/components/common/show-box.vue'
@Component({
  components: {
    ShowBox
  }
})
export default class Minsu extends Vue {

}
</script>

<style scoped>

</style>