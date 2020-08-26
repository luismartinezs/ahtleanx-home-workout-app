<template>
  <div
    :class="isOpen ? '' : 'hidden'"
    class="bg-red-400 w-screen h-screen absolute flex flex-col items-center text-xl px-12 pt-20"
  >
    <ul>
      <li
        v-for="{ label, link, external } in menu"
        :key="label"
        class="mt-8 first:mt-0 underline"
      >
        <a :href="link" :target="external ? '_blank' : '_self'">
          <span>
            {{ label }}
          </span>

          <span v-if="external">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from '@/event-bus.js'
export default {
  name: 'TheDrawerMenu',
  data () {
    return {
      menu: [
        {
          label: 'Home',
          link: '/',
          external: false
        },
        {
          label: 'The PERFECT Home Workout ATHLEANX YouTube video',
          link: 'https://www.youtube.com/watch?v=vc1E5CfRfos',
          external: true
        },
        {
          label: 'Athlean-x channel',
          link: 'https://www.youtube.com/channel/UCe0TLA0EsQbE-MjuHXevj2A',
          external: true
        },
        {
          label: 'Athlean-x website',
          link: 'https://athleanx.com/?utm_medium=athleanx-perfect-home-workout-app&utm_source=' + window.location.href + 'utm_campaign=app-launch',
          external: true
        }
      ],
      isOpen: false
    }
  },
  methods: {
    handleMenu (shouldOpen) {
      this.isOpen = shouldOpen
    }
  },
  mounted () {
    bus.$on('handle-menu', this.handleMenu)
  },
  beforeDestroy () {
    bus.$off('handle-menu', this.handleMenu)
  }
}
</script>
