<template>
  <div class="py-6 px-16">
    <span class="uppercase block mb-1 text-center">{{ groupName }}</span>
    <div
      class="relative bg-red-500 pb-2/3 border-red-300 rounded-lg overflow-hidden mb-1"
    >
      <video
        loop="true"
        preload="auto"
        autoplay="true"
        class="absolute h-full w-full object-cover"
      >
        <source
          :src="`/video/${versions[currentVersion].video}.mp4`"
          type="video/mp4"
        />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
    <span class="text-gray-400">{{ versions[currentVersion].name }}&nbsp;</span>
    <span class="inline-block text-gray-600"
      >&nbsp;-&nbsp;{{ versions[currentVersion].label }}
    </span>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus.js'
export default {
  name: 'ExerciseDisplay',
  data () {
    return {
      currentVersion: 0
    }
  },
  props: {
    versions: {
      type: Array,
      required: true
    },
    groupName: {
      type: String,
      required: true
    }
  },
  methods: {
    prevVersion () {
      return this.currentVersion === 0 ? 0 : this.currentVersion--
    },
    nextVersion () {
      return this.currentVersion < this.versions.length ? this.currentVersion++ : this.currentVersion
    }
  },
  mounted () {
    eventBus.$on('prev-version', this.prevVersion)
    eventBus.$on('next-version', this.nextVersion)
  },
  beforeDestroy () {
    eventBus.$off('prev-version', this.prevVersion)
    eventBus.$off('next-version', this.nextVersion)
  }
}
</script>
