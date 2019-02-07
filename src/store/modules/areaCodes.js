import { db } from '../../firebase'

// initial state
const state = {
  items: []
}

// getters
const getters = {}

// actions
const actions = {
  // Fetch all area codes
  fetchAreaCodes ({ commit }) {
    db.collection('area_codes').orderBy('id').get().then((querySnapshot) => {
      const docs = querySnapshot.docs.map(doc => Object.assign({ uuid: doc.id }, doc.data()))
      commit('setAreaCodes', docs)
    })
  }
}

// mutations
const mutations = {
  setAreaCodes (state, data) {
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
