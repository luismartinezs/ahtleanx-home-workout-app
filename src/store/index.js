import Vue from 'vue'
import Vuex from 'vuex'

import { workout } from './workout.js'
import { timer } from './timer.js'

Vue.use(Vuex)

const strict = process.env.NODE_ENV === 'development'
export default new Vuex.Store({
  strict,
  modules: { workout, timer }
})
