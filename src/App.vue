<template>
  <div id="app" class="text-gray-100 bg-gray-900 h-screen">
    <the-header />
    <default>
      <router-view />
    </default>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Default from '@/layouts/Default.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    Default
  }
}
</script>

<style src="./style/tailwind.css"></style>
