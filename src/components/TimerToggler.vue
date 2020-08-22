<template>
  <div id="timerToggler" @click="handleTimerToggle" />
</template>

<script>
import { eventBus } from '@/eventBus.js'

export default {
  name: 'TimerToggler',
  methods: {
    handleTimerToggle () {
      eventBus.$emit('toggle-timer')
    }
  }
}
</script>
