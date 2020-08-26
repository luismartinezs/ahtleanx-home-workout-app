const state = {
  isOpen: false
}

const mutations = {
  toggleMenu: state => (state.isOpen = !state.isOpen)
}

export const menu = { namespaced: true, state, mutations }
