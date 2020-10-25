<template>
  <transition appear name="slideFromBottom">
    <div
      v-if="showModal"
      class="mx-auto w-full w-screen lg:max-w-md absolute bottom-0 left-0 right-0 bg-red-700 py-3 px-3 sm:px-16 md:px-32 lg:px-3  shadow-md text-center"
    >
      <p>
        This website sends anonymous navigation data to Google Analytics. It
        helps me see how many people are using it and where they come from.
      </p>
      <div class="flex flex-col">
        <button
          @click.prevent="disallowTracking"
          class="normal-case mt-3 py-3 underline text-sm"
        >
          No. Don't send data to Google Analytics
        </button>
        <button
          @click.prevent="acceptTracking"
          class="btn btn-secondary bg-black normal-case mt-3"
        >
          Yes, I'm OK with sending anonymous<br />data to Google Analytics
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { ACCEPT_GA_TRACKING } from '@/constant.js'
import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('app')

export default {
  name: 'CookiesModal',
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    ...mapMutations(['setUpdateCookies']),
    acceptTracking () {
      localStorage.setItem(ACCEPT_GA_TRACKING, 'true')
      this.closeModal()
      this.setUpdateCookies()
    },
    disallowTracking () {
      localStorage.setItem(ACCEPT_GA_TRACKING, 'false')
      this.closeModal()
      this.setUpdateCookies()
    },
    closeModal () {
      this.showModal = false
    }
  },
  created () {
    if (!localStorage.getItem(ACCEPT_GA_TRACKING)) {
      this.showModal = true
    }
  }
}
</script>

<style lang="scss" scoped>
.slideFromBottom-enter,
.slideFromBottom-leave-to {
  transform: translate(0px, 12.5em);
}
.slideFromBottom-enter-to,
.slideFromBottom-leave {
  transform: translate(0px, 0px);
}
.slideFromBottom-enter-active,
.slideFromBottom-leave-active,
.slideFromTop-enter-active,
.slideFromTop-leave-active {
  transition: transform 0.4s ease-in;
}
</style>
