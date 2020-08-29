<template>
  <div class="w-full flex justify-between px-3 pb-3">
    <button
      class="btn btn-secondary w-3/10"
      :disabled="exerciseGlobalIdx === 0"
      @click.prevent="handlePrev"
    >
      <span>&lt;&lt;</span>
    </button>
    <a class="btn btn-secondary w-3/10" href="/">
      <span>Exit</span>
    </a>
    <button
      class="btn btn-secondary w-3/10"
      @click.prevent="handleNext"
    >
      <span>&gt;&gt;</span>
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapState, mapActions } = createNamespacedHelpers('workout')

export default {
  name: 'WorkoutNav',
  computed: {
    ...mapState(['exerciseIdx']),
    ...mapGetters({ exerciseGlobalIdx: 'getExerciseGlobalIdx' }),
    ...mapGetters(['isLastGroup', 'isLastExercise'])
  },
  methods: {
    ...mapActions(['handleNextExercise', 'handlePrevExercise']),
    handlePrev () {
      this.handlePrevExercise()
    },
    handleNext () {
      // if (this.isLastGroup && this.isLastExercise) {
      //   return this.$router.push({ name: 'CompletedWorkout', params: { ...this.$route.params } })
      // }
      this.handleNextExercise()
    }
  }
}
</script>
