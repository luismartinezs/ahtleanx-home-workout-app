<template>
  <div>
    <button
      :disabled="variantIdx === 0"
      class="btn btn-secondary z-20"
      @click.prevent="prevVariant"
    >
      Prev variant
    </button>
    <button
      :disabled="isLastVariant"
      class="btn btn-secondary z-20"
      @click.prevent="nextVariant"
    >
      Next variant
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters, mapState } = createNamespacedHelpers('workout')

export default {
  name: 'VariantToggler',
  computed: {
    ...mapState(['variantIdx']),
    ...mapGetters(['isLastVariant'])
  },
  methods: {
    ...mapActions(['updateVariant']),
    prevVariant () {
      this.updateVariant(-1)
    },
    nextVariant () {
      this.updateVariant(1)
    }
  }
}
</script>
