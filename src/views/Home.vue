<template>
  <div class="text-4xl flex flex-col items-center justify-center mt-12 underline">
    <div>
      <router-link to="/workout/a">Start Day A Workout</router-link>
    </div>
    <div class="mt-6">
      <router-link to="/workout/b">Start Day B Workout</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
