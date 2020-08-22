<template>
  <div
    id="app"
    class="text-gray-100 bg-gray-900 h-screen flex flex-col justify-between"
  >
    <the-header class="z-20" />
    <default class="flex-auto">
      <router-view />
    </default>
    <BottomNav class="z-20" v-if="$route.meta.showBottomNav" />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Default from '@/layouts/Default.vue'
import BottomNav from '@/components/BottomNav.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    Default,
    BottomNav
  }
}
</script>

<style src="./style/tailwind.css"></style>
