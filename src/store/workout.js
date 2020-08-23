import data from '@/data.json'

const state = {
  exerciseIdx: 0,
  variantIdx: 0,
  groupIdx: 0,
  workout: {},
  isLoading: true,
  error: null
}

const mutations = {
  setWorkout: (state, workout) => (state.workout = workout),
  prevVariant: state => {
    if (state.variantIdx <= 1) return (state.variantIdx = 0)
    state.variantIdx--
  },
  nextVariant: state => {
    const variantsLength =
      state.workout.groups[state.groupIdx].exercises[state.exerciseIdx].variants
        .length
    if (variantsLength <= state.variantIdx) return
    state.variantIdx++
  },
  prevExercise: state => {
    if (state.exerciseIdx <= 1) return (state.exerciseIdx = 0)
    state.exerciseIdx--
  },
  nextExercise: state => {
    const exercisesLength =
      state.workout.groups[state.groupIdx].exercises.length
    if (exercisesLength <= state.exerciseIdx) return
    state.exerciseIdx++
  },
  prevGroup: state => {
    if (state.groupIdx <= 1) return (state.groupIdx = 0)
    state.groupIdx--
  },
  nextGroup: state => {
    const groupsLength = state.workout.groups.length
    if (groupsLength <= state.groupIdx) return
    state.groupIdx++
  },
  setLoading: (state, bool) => (state.isLoading = bool),
  setError: (state, err) => (state.error = err),
  setExerciseIdx: (state, idx) => (state.exerciseIdx = idx),
  setVariantIdx: (state, idx) => (state.variantIdx = idx),
  setGroupIdx: (state, idx) => (state.groupIdx = idx)
}

const getters = {
  getGroup: state => state.workout.groups[state.groupIdx],
  getExercise: (state, getters) =>
    getters.getGroup.exercises[state.exerciseIdx],
  getVariant: (state, getters) =>
    getters.getExercise.variants[state.variantIdx],
  getGroupsLength: state => state.workout.groups.length,
  getExercisesLength: (state, getters) => getters.getGroup.exercises.length,
  getVariantsLength: (state, getters) => getters.getExercise.variants.length,
  isLastGroup: (state, getters) =>
    getters.getGroupsLength - 1 === state.groupIdx,
  isLastExercise: (state, getters) =>
    getters.getExercisesLength - 1 === state.exerciseIdx,
  isLastVariant: (state, getters) =>
    getters.getVariantsLength - 1 === state.variantIdx,
  getExerciseGlobalIdx: state => {
    let re = -1
    // eslint-disable-next-line no-labels
    groupsLoop: for (let i = 0; i <= state.groupIdx; i++) {
      for (let j = 0; j <= state.workout.groups[i].exercises.length; j++) {
        re++
        // eslint-disable-next-line no-labels
        if (i === state.groupIdx && j === state.exerciseIdx) break groupsLoop
      }
    }
    return re
  }
}

const actions = {
  fetchWorkout: async ({ commit }, type) => {
    const workout = data[`workout_${type}`]
    await commit('setWorkout', workout)
    console.log('Workout loaded')
  },
  updateType: ({ commit }, { type, direction }) => {
    type = type[0].toUpperCase() + type.slice(1)
    direction > 0 ? commit(`next${type}`) : commit(`prev${type}`)
  },
  updateVariant: ({ dispatch }, direction) =>
    dispatch('updateType', { type: 'variant', direction }),
  updateExercise: ({ dispatch, commit }, direction) => {
    dispatch('updateType', { type: 'exercise', direction })
    // if updating exercise, it doesn't make sense to keep variant index, so it is reset
    commit('setVariantIdx', 0)
  },
  updateGroup: ({ dispatch, commit }, direction) => {
    dispatch('updateType', { type: 'group', direction })
    // if updating group, it doesn't make sense to keep exercise index and variant index, so these are also reset
    commit('setExerciseIdx', 0)
    commit('setVariantIdx', 0)
  },
  updateLoading: ({ commit }, bool) => {
    commit('setLoading', bool)
  },
  updateError: ({ commit }, err) => {
    commit('setError', err)
  },
  handleNextExercise: ({ dispatch, getters }) => {
    if (getters.isLastGroup && getters.isLastExercise) {
      return
    }
    if (getters.isLastExercise) {
      return dispatch('updateGroup', 1)
    }
    dispatch('updateExercise', 1)
  },
  handlePrevExercise: ({ dispatch, getters, state }) => {
    if (getters.exerciseGlobalIdx === 0) return
    if (state.exerciseIdx === 0) return dispatch('updateGroup', -1)
    dispatch('updateExercise', -1)
  }
}

export const workout = { namespaced: true, state, mutations, getters, actions }
