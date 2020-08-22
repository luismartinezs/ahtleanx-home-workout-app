<template>
  <div class="relative h-full">
    <VersionToggler class="z-20 w-full flex justify-around mt-1 text-xs" :versionLength="exerciseVersions.length" />
    <ExerciseDisplay class="h-1/2" :versions="exerciseVersions" :groupName="currentWorkout.groups[groupIndex].name" />
    <TheTimer  />
    <TimerToggler class="absolute h-full w-full z-10 bg-transparent top-0" />
  </div>
</template>

<script>
import ExerciseDisplay from '@/components/ExerciseDisplay.vue'
import TheTimer from '@/components/TheTimer.vue'
import TimerToggler from '@/components/TimerToggler.vue'
import VersionToggler from '@/components/VersionToggler.vue'
import data from '@/data.json'
import { eventBus } from '@/eventBus.js'

export default {
  name: 'Workout',
  components: { ExerciseDisplay, TheTimer, TimerToggler, VersionToggler },
  data () {
    return {
      exerciseIndex: 0,
      groupIndex: 0,
      workouts: data
    }
  },
  computed: {
    currentWorkout () {
      return this.workouts[`workout_${this.$route.params.day}`]
    },
    exerciseVersions () {
      return this.currentWorkout.groups[this.groupIndex].exercises[this.exerciseIndex].versions
    }
  },
  methods: {
    handleNext () {
      const isLastExerciseOfGroup = this.currentWorkout.groups[this.groupIndex].exercises.length <= this.exerciseIndex
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
  mounted () {
    // eventBus.$on('prev-exercise', handlePrev)
    eventBus.$on('next-exercise', this.handleNext)
    eventBus.$on('timer-end', this.handleNext)
  },
  beforeDestroy () {
    eventBus.$off('next-exercise', this.handleNext)
    eventBus.$off('timer-end', this.handleNext)
  }
}
</script>
