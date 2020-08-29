<template>
  <div id="timerToggler" :class="{hidden: !enabled, 'bg-white opacity-25': started && paused}" @click="handleTimer" />
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapState } = createNamespacedHelpers('timer')

export default {
  name: 'TimerToggler',
  computed: mapState(['enabled', 'paused', 'started']),
  methods: {
    ...mapActions(['handleTimer'])
  }
}
</script>
