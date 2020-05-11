<template>
  <div class="banner-content">
    <swiper />
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'nuxt-property-decorator'
import Swiper from '~/components/public/main/banner/swiper/index.vue'
@Component({
  components: {
    Swiper
  }
})
export default class BannerContent extends Vue {

}
</script>

<style scoped>

</style>