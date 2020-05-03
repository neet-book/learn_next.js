<template>
  <div class="container">
    <div class="banner">
      <div class="banner-left">
        <category-nav />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import CategoryNav from '@/components/public/main/category/category-nav.vue'
@Component({
  components: {
    CategoryNav
  }
})
export default class Index extends Vue {

}
</script>


<style scoped>

</style>