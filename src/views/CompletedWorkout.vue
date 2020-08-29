<template>
  <div class="text-center text-2xl m-6">
    <p>
      Good job, you have completed one round of the workout!
    </p>
    <router-link
      class="btn btn-primary mt-6 w-full"
      :to="{ name: 'Workout', params: $route.params }"
      >Do another round</router-link
    >
    <router-link class="btn btn-secondary mt-6 w-full" to="{name: 'Home'}"
      >I'm finished</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'CompletedWorkout',
  mounted () {
    localStorage.setItem('last-workout', this.$route.params.day)
  }
}
</script>
