<template>
  <div>
    <button class="btn btn-secondary z-20" @click.prevent="prevVersion">
      Prev version
    </button>
    <button class="btn btn-secondary z-20" @click.prevent="nextVersion">
      Next version
    </button>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus.js'

export default {
  name: 'VersionToggler',
  props: {
    versionLength: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevVersion () {
      eventBus.$emit('prev-version')
    },
    nextVersion () {
      eventBus.$emit('next-version')
    }
  }
}
</script>
