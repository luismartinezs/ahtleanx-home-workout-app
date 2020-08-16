<template>
  <div id="app" class="text-gray-100 bg-gray-900 h-screen">
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style src="./style/tailwind.css"></style>
