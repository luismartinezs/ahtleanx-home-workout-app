<template>
  <div class="video-wrapper">
    <video loop="true" preload="auto" autoplay="true" class="responsive-video">
      <source src="/video/a-1a-adv.mp4" type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
</template>

<script>
export default {
  name: 'ExerciseVideo'
}
</script>

<style lang="scss" scoped>
.video-wrapper {
  padding: 20px;
.responsive-video {
  /* override other styles to make responsive */
  width: 100%    !important;
  height: auto   !important;
}
}
</style>
