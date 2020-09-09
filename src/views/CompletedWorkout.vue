<template>
  <div class="text-center text-2xl m-6">
    <p>
      Good job, you have completed one round of the workout!
    </p>
    <button class="btn btn-primary mt-6 w-full" @click.prevent="newRound">
      Do another round
    </button>
    <router-link class="btn btn-secondary mt-6 w-full" to="{name: 'Home'}"
      >I'm finished</router-link
    >
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('workout')

export default {
  name: 'CompletedWorkout',
  methods: {
    ...mapActions(['resetWorkout']),
    newRound () {
      this.resetWorkout()
      this.$router.push({ name: 'Workout', params: this.$route.params })
    }
  },
  mounted () {
    localStorage.setItem('last-workout', this.$route.params.day)
  }
}
</script>
