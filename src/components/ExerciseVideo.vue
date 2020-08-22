<template>
  <div class="py-6 px-16">
    <div class="relative bg-red-500 pb-2/3">
      <video
        loop="true"
        preload="auto"
        autoplay="true"
        class="absolute h-full w-full object-cover rounded-lg shadow-md"
      >
        <source src="/video/a-1a-adv.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseVideo'
}
</script>
