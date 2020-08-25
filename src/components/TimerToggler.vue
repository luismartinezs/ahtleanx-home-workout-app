<template>
  <div id="timerToggler" :class="enabled ? '' : 'hidden'" @click="handleTimer" />
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions, mapState } = createNamespacedHelpers('timer')

export default {
  name: 'TimerToggler',
  computed: mapState(['enabled']),
  methods: {
    ...mapActions(['handleTimer'])
  }
}
</script>
