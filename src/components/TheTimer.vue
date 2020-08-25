<template>
  <div
    class="flex flex-col justify-center items-center"
  >
    <span class="text-10xl">
      {{ timer }}
    </span>
    <span class="text-xl">
      {{ message }}
    </span>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('timer')

export default {
  name: 'TheTimer',
  computed: {
    ...mapGetters({ timer: 'getTimer', message: 'getMessage' })
  }
}
</script>
