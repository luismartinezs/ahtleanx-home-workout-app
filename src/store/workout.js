import data from '@/data.json'

const state = {
  currentExercise: {}
}

const mutations = {
  setCurrentExercise: (state, exercise) => (state.currentExercise = exercise)
}

const getters = {
  getCurrentExercise: state => state.currentExercise
}

const actions = {
  fetchExercise: ({ commit }) => {
    console.log(data)
    const exercise = data.workout_a.groups[0].exercises[0]
    commit('setCurrentExercise', exercise)
  }
}

export const workout = { namespaced: true, state, mutations, getters, actions }
