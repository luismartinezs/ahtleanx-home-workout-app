<template>
  <div class="text-center text-2xl m-6">
    <p>
      Good job, you have completed one round of the workout!
    </p>
    <a class="btn btn-primary mt-6 w-96" :href="`/workout/${$route.params.day}`">Do another round</a>
    <a class="btn btn-secondary mt-6 w-96" href="/">I'm finished</a>
  </div>
</template>

<script>
export default {
  name: 'CompletedWorkout'
}
</script>
