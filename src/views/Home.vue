<template>
  <div class="flex flex-col items-center justify-center mx-12">
    <div
      class="text-3xl mt-12 uppercase text-gray-400 flex flex-col items-center justify-center lg:text-2xl"
    >
      <router-link to="/workout/a" class="btn btn-secondary"
        >Start Day
        <span class="text-gray-300 font-semibold">A</span>
        Workout</router-link
      >
      <router-link to="/workout/b" class="btn btn-secondary mt-6"
        >Start Day
        <span class="text-gray-300 font-semibold">B</span>
        Workout</router-link
      >
    </div>
    <div class="mt-10 text-xl text-gray-700 text-center leading-relaxed">
      <p>
        Looks like it's time for workout
        <span class="uppercase text-gray-400">{{ nextWorkout }}</span
        >!
      </p>
      <p class="mt-4">
        If it's the first time you use this app, watch the Athlean-X video that
        explains the workout:
        <a
          href="https://www.youtube.com/watch?v=vc1E5CfRfos"
          target="_blank"
          alt="The PERFECT Home Workout"
          class="underline text-gray-600 hover:text-gray-400"
          >The PERFECT Home Workout</a
        >
      </p>
      <p class="mt-4">Install the app in your phone for an optimal experience.</p>
    </div>
  </div>
</template>

<script>
const lastWorkout = localStorage.getItem('last-workout') || 'b'

export default {
  name: 'Home',
  data () {
    return {
      lastWorkout
    }
  },
  computed: {
    nextWorkout () {
      const workoutSuccession = { a: 'b', b: 'a' }
      return workoutSuccession[this.lastWorkout]
    }
  }
}
</script>
