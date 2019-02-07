import { db } from '../../firebase'

// initial state
const state = {
  items: []
}

// getters
const getters = {}

// actions
const actions = {
  // Fetch all prices
  fetchPrices ({ commit }) {
    db.collection('prices').get().then((querySnapshot) => {
      const docs = querySnapshot.docs.map(doc => Object.assign({ uuid: doc.id }, doc.data()))
      commit('setPrices', docs)
    })
  }
}

// mutations
const mutations = {
  setPrices (state, data) {
    state.items = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
