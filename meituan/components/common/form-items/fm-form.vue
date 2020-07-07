<template>
    <form>

    </form>
</template>

<script leng="ts">
import { Vue, Componnt, Inject } from 'nuxt-property-decorator'
@Componnt({
    provide() {
        return {
            $fm_form: this
        }
    }
})
export default class FmForm extends Vue {
    formItems = {}
}
</script>

<style scoped>

</style>