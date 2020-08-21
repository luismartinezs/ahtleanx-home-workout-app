<template>
  <div>
    <div>
      <ExerciseVideo />
    </div>
    <div>
      <TheTimer />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import ExerciseVideo from '@/components/ExerciseVideo.vue'
import TheTimer from '@/components/TheTimer.vue'
const { mapGetters, mapActions } = createNamespacedHelpers('workout')

export default {
  name: 'Workout',
  components: { ExerciseVideo, TheTimer },
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
