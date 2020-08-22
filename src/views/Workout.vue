<template>
  <div class="relative h-full">
    <ExerciseVideo class="h-1/2" />
    <TheTimer  />
    <TimerToggler class="absolute h-full w-full z-10 bg-transparent top-0" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import ExerciseVideo from '@/components/ExerciseVideo.vue'
import TheTimer from '@/components/TheTimer.vue'
import TimerToggler from '@/components/TimerToggler.vue'
const { mapGetters, mapActions } = createNamespacedHelpers('workout')

export default {
  name: 'Workout',
  components: { ExerciseVideo, TheTimer, TimerToggler },
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
