<template>
  <div>
    <div>
    Exercise
    </div>
    <div>
    Timer
    </div>
    <div>
      <span>Previous</span>
      <span>Exit</span>
      <span>Next</span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('workout')

export default {
  name: 'Workout',
  computed: {
    ...mapGetters({
      currentExercise: 'getCurrentExercise'
    })
  },
  methods: {
    ...mapActions(['fetchExercise'])
  },
  async mounted () {
    await this.fetchExercise()
  }
}
</script>
