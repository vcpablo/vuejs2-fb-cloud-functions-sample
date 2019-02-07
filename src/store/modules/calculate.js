import { fn } from '../../firebase'

// initial state
const state = {
  result: null,
  loading: false
}

// getters
const getters = {}

// actions
const actions = {
  // Calculate call prices
  calculate ({ commit }, data) {
    commit('setResult', null)
    commit('setLoading', true)
    const calculate = fn.httpsCallable('calculate')
    calculate(data).then(result => {
      commit('setResult', result.data)
      commit('setLoading', false)
    })
  },
  setResult ({ commit }, data) {
    commit('setResult', data)
  }
}

// mutations
const mutations = {
  setResult (state, data) {
    state.result = data
  },
  setLoading (state, data) {
    state.loading = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
