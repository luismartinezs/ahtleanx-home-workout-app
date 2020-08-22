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
import { eventBus } from '@/eventBus.js'

const initialTime = 60 * 1000 // miliseconds

// seconds is never larger than 60
function parseSeconds (numberOfSeconds) {
  let minutes = '0'
  let seconds = `00${numberOfSeconds}`.slice(-2)
  if (numberOfSeconds > 59) {
    minutes = '1'
    seconds = '00'
  }

  if (numberOfSeconds < 0) {
    seconds = '00'
  }

  return `${minutes}:${seconds}`
}

function playAlarm (times) {
  const alarm = new Audio('/audio/beep_short.ogg')
  alarm.volume = 1 // set max volume
  alarm.currentTime = 0
  alarm.play()
}

export default {
  name: 'TheTimer',
  data () {
    return {
      currentTime: initialTime, // initial time in seconds
      countdown: null,
      paused: true,
      started: false
    }
  },
  computed: {
    message () {
      return this.paused
        ? this.started
          ? 'tap anywhere to resume'
          : 'tap anywhere to start'
        : 'tap anywhere to pause'
    },
    timer () {
      return parseSeconds(Math.floor(this.currentTime / 1000))
    }
  },
  methods: {
    handleTimer () {
      this.started = true
      this.paused = !this.paused
      clearInterval(this.countdown)

      if (!this.paused) {
        const refreshRate = 100 // miliseconds
        this.countdown = setInterval(() => {
          if (this.currentTime === 0) {
            this.handleTimerEnd()
          }
          this.currentTime -= refreshRate
        }, refreshRate)
      }
    },
    handleTimerEnd () {
      clearInterval(this.countdown)
      this.paused = true
      // Play sound

      playAlarm()

      // Prevent subtracting from the timer due to still going countdown
      this.$nextTick(() => {
        this.currentTime = initialTime
      })
      eventBus.$emit('timer-end')
    }
  },
  mounted () {
    eventBus.$on('toggle-timer', this.handleTimer)
  },
  beforeDestroy () {
    eventBus.$off('toggle-timer', this.handleTimer)
  }
}
</script>
