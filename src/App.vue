<template>
  <div
    id="app"
    class="text-gray-100 bg-black h-screen flex flex-col justify-between"
  >
    <TheHeader class="z-50" />
    <TheDrawerMenu class="z-40" />
    <Default class="flex-auto">
      <router-view />
    </Default>
    <CookiesModal class="z-30" />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Default from '@/layouts/Default.vue'
import TheDrawerMenu from '@/components/TheDrawerMenu.vue'
import CookiesModal from '@/components/CookiesModal.vue'
import { ACCEPT_GA_TRACKING } from '@/constant.js'
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('app')

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

const addGoogleAnalyticsScript = () => {
  const gaScript = document.createElement('script')
  const gaScriptPlaceholder = document.getElementById('gaScriptPlaceholder')
  gaScript.text = `window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());

        gtag("config", "UA-164945954-2");`
  gaScriptPlaceholder.replaceWith(gaScript)
}

const deleteScriptPlaceholders = () => {
  const placeholders = Array.from(
    document.querySelectorAll('[id$=Placeholder]')
  )
  placeholders.forEach(el => el.remove())
}

export default {
  name: 'App',
  components: {
    TheHeader,
    Default,
    TheDrawerMenu,
    CookiesModal
  },
  computed: mapState(['updateCookies']),
  methods: {
    handleScripts () {
      if (isLocal) {
        return deleteScriptPlaceholders()
      }
      console.log('handleScripts')
      if (localStorage.getItem(ACCEPT_GA_TRACKING) === 'true') {
        addGtmScript()
        addGoogleAnalyticsScript()
      }
      if (localStorage.getItem(ACCEPT_GA_TRACKING) === 'false') {
        deleteScriptPlaceholders()
      }
    }
  },
  mounted () {
    this.handleScripts()
  },
  watch: {
    updateCookies () {
      this.handleScripts()
    }
  }
}
</script>

<style src="./style/tailwind.css"></style>
