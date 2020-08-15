<template>
  <div>
    <div>
      <exercise-video />
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
import ExerciseVideo from '@/components/ExerciseVideo.vue'
const { mapGetters, mapActions } = createNamespacedHelpers('workout')

export default {
  name: 'Workout',
  components: { ExerciseVideo },
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
