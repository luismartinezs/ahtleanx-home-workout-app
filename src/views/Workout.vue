<template>
  <div class="relative h-full">
    <div v-if="isLoading">
      LOADING....
    </div>
    <template v-else>
      <VariantToggler class="z-20 w-full flex justify-around mt-2 text-xs" />
      <ExerciseDisplay class="h-1/2" />
      <TheTimer />
      <TimerToggler class="absolute h-full w-full z-10 bg-transparent top-0" />
    </template>
  </div>
</template>

<script>
// Load data first of all because the store cannot work without it, if data is ever loaded asynchronously, there will be need to add loading state and error handling
// A best practice would be to load data asynchronously right from the start

import { createNamespacedHelpers } from 'vuex'
import ExerciseDisplay from '@/components/ExerciseDisplay.vue'
import TheTimer from '@/components/TheTimer.vue'
import TimerToggler from '@/components/TimerToggler.vue'
import VariantToggler from '@/components/VariantToggler.vue'

const { mapActions, mapState } = createNamespacedHelpers('workout')

export default {
  name: 'Workout',
  components: { ExerciseDisplay, TheTimer, TimerToggler, VariantToggler },
  computed: {
    ...mapState(['isLoading']),
    currentWorkout () {
      return this.workouts[`workout_${this.$route.params.day}`]
    },
    exerciseVariants () {
      return this.currentWorkout.groups[this.groupIndex].exercises[
        this.exerciseIndex
      ].variants
    }
  },
  methods: {
    ...mapActions(['fetchWorkout', 'updateLoading', 'updateError']),
    handleNext () {
      const isLastExerciseOfGroup =
        this.currentWorkout.groups[this.groupIndex].exercises.length <=
        this.exerciseIndex
      const isLastGroup = this.currentWorkout.groups.length <= this.groupIndex

      if (isLastExerciseOfGroup) {
        if (isLastGroup) {
          this.$router.push({
            name: 'CompletedWorkout',
            params: {
              day: this.$route.params.day
            }
          })
        } else {
          this.groupIndex++
        }
      } else {
        this.exerciseIndex++
      }
    }
  },
  async mounted () {
    try {
      await this.fetchWorkout(this.$route.params.day)
    } catch (err) {
      this.updateError(err)
    } finally {
      this.updateLoading(false)
    }
  }
}
</script>
