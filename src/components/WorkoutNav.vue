<template>
  <div class="w-full flex justify-between px-3 pb-3">
    <a class="btn btn-secondary w-3/10" href="#" @click.prevent="handlePrev">
      <span>Previous</span>
    </a>
    <a class="btn btn-secondary w-3/10" href="/">
      <span>Exit</span>
    </a>
    <a class="btn btn-secondary w-3/10" href="#" @click.prevent="handleNext">
      <span>Next</span>
    </a>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus.js'

export default {
  name: 'WorkoutNav',
  methods: {
    handlePrev () {
      eventBus.$emit('prev-exercise')
    },
    handleNext () {
      eventBus.$emit('next-exercise')
    }
  }
}
</script>
