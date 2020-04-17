<template>
  <div>
    <header>
      <city current="深圳" />
    </header>
    <main>
      <nuxt/>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import City from '~/components/public/header/city.vue'
@Component({
  components: {
    City
  }
})
export default class  extends Vue {

}
</script>


<style scoped>

</style>