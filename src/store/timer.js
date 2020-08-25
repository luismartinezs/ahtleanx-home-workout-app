const INITIAL_TIME = 6 * 1000 + 999 // miliseconds. Add 999 ms so that one second elapses when toggling timer, before switching to next second
const REFRESH_RATE = 100 // ms
const ALARMS_COUNT = 5 // number of lasting seconds that will have alarm (if set to 5, last 5 seconds will have alarm)

const state = {
  currentTime: INITIAL_TIME,
  paused: true,
  started: false,
  alarmsCount: ALARMS_COUNT,
  enabled: true
}

const mutations = {
  setPaused: (state, bool) => (state.paused = bool),
  setStarted: (state, bool) => (state.started = bool),
  setCurrentTime: (state, val) => (state.currentTime = val),
  setAlarmsCount: (state, val) => (state.alarmsCount = val),
  setEnabled: (state, val) => (state.enabled = val)
}

const getters = {
  getMessage: state => {
    return state.paused
      ? state.started
        ? 'tap anywhere to resume'
        : 'tap anywhere to start'
      : 'tap anywhere to pause'
  },
  getTimer: state => parseTime(state.currentTime)
}

let countdown = null

const actions = {
  togglePause: ({ commit, state }) => commit('setPaused', !state.paused),
  handleTimer: ({ dispatch, commit, state }) => {
    commit('setStarted', true)
    commit('setPaused', !state.paused)
    clearInterval(countdown)

    // Timer loop
    if (!state.paused) {
      countdown = setInterval(() => {
        // handle countdown alarm
        // would break if initial seconds count is less than alarm count. It's not a use case so not covered
        if (
          state.alarmsCount >= 1 &&
          state.alarmsCount * 1000 > state.currentTime
        ) {
          playAlarm()
          commit('setAlarmsCount', state.alarmsCount - 1)
        }
        // handle timer end
        if (state.currentTime <= 1000) {
          dispatch('handleTimerEnd')
        }
        commit('setCurrentTime', state.currentTime - REFRESH_RATE)
      }, REFRESH_RATE)
    }
  },
  handleTimerEnd: ({ dispatch, state, commit }) => {
    commit('setEnabled', false)
    clearInterval(countdown)
    commit('setPaused', true)
    playAlarm(true)
    setTimeout(() => {
      dispatch('workout/handleNextExercise', {}, { root: true })
    }, 1000)
  },
  resetTimer: ({ commit }) => {
    countdown = null
    commit('setPaused', true)
    commit('setStarted', false)
    commit('setCurrentTime', INITIAL_TIME)
    commit('setAlarmsCount', ALARMS_COUNT)
    commit('setEnabled', true)
  }
}

// helpers

// Will only work for inputs up to 60000 ms, which is enough for our app (we never set timers above 1 minute)
function parseTime (numberOfMiliseconds) {
  const numberOfSeconds = Math.floor(numberOfMiliseconds / 1000)
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

function playAlarm (long = false) {
  const alarm = new Audio(`/audio/beep-${long ? 'long' : 'short'}.ogg`)
  alarm.volume = 1 // set max volume
  alarm.currentTime = 0
  alarm.play()
}

export const timer = { namespaced: true, state, mutations, getters, actions }
