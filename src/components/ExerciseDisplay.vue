<template>
  <div class="py-3 mx-auto text-center flex flex-col items-center" style="max-width: 240px;">
    <span class="uppercase block mb-1">{{ group.name }}</span>
    <div
      class="relative bg-gray-900 pb-1/2 border-red-300 rounded-lg overflow-hidden mb-1 w-56"
    >
      <video
        :key="variant.video"
        loop="true"
        preload="auto"
        autoplay="true"
        class="absolute h-full w-full object-cover"
      >
        <source :src="videoSrc" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
    <div>
      <span class="text-gray-400">{{ variant.name }}&nbsp;</span>
      <span class="inline-block text-gray-600"
        >&nbsp;-&nbsp;{{ variant.label }}
      </span>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters, mapState } = createNamespacedHelpers('workout')

export default {
  name: 'ExerciseDisplay',
  computed: {
    ...mapState(['variantIdx, groupIdx']),
    ...mapGetters({ group: 'getGroup', variant: 'getVariant' }),
    videoSrc () {
      return `/video/${this.variant.video}.mp4`
    }
  },
  methods: {
    ...mapActions(['updateVariant'])
  }
}
</script>
