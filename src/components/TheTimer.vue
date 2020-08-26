<template>
  <div class="flex flex-col items-center flex-1 mb-16 lg:mb-0">
    <div class="my-auto flex flex-col text-center">
      <span class="text-10xl leading-tight">
        {{ timer }}
      </span>
      <span class="text-xl">
        {{ message }}
      </span>
    </div>
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
