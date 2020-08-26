<template>
  <div
    id="app"
    class="text-gray-100 bg-black h-screen flex flex-col justify-between"
  >
    <TheHeader class="z-40" />
    <TheDrawerMenu class="z-30" />
    <Default class="flex-auto">
      <router-view />
    </Default>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Default from '@/layouts/Default.vue'
import TheDrawerMenu from '@/components/TheDrawerMenu.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    Default,
    TheDrawerMenu
  }
}
</script>

<style src="./style/tailwind.css">
</style>
