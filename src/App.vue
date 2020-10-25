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
    <CookiesModal />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Default from '@/layouts/Default.vue'
import TheDrawerMenu from '@/components/TheDrawerMenu.vue'
import CookiesModal from '@/components/CookiesModal.vue'

const isLocal = /localhost/.test(window.location.href)

const addGtmScript = () => {
  const gtmScript = document.createElement('script')
  const gtmScriptPlaceholder = document.getElementById('gtmScriptPlaceholder')
  gtmScript.async = true
  gtmScript.setAttribute(
    'src',
    'https://www.googletagmanager.com/gtag/js?id=UA-164945954-2'
  )
  gtmScriptPlaceholder.replaceWith(gtmScript)
}

export default {
  name: 'App',
  components: {
    TheHeader,
    Default,
    TheDrawerMenu,
    CookiesModal
  },
  mounted () {
    if (!isLocal) {
      addGtmScript()
    }
  }
}
</script>

<style src="./style/tailwind.css"></style>
