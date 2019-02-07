import { db } from '../../firebase'

// initial state
const state = {
  items: []
}

// getters
const getters = {}

// actions
const actions = {
  // Fetch all plans
  fetchPlans ({ commit }) {
    db.collection('plans').orderBy('id').get().then((querySnapshot) => {
      const docs = querySnapshot.docs.map(doc => Object.assign({ uuid: doc.id }, doc.data()))
      commit('setPlans', docs)
    })
  }
}

// mutations
const mutations = {
  setPlans (state, data) {
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
