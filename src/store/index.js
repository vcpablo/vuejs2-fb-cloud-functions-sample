import Vue from 'vue'
import Vuex from 'vuex'
import areaCodes from './modules/areaCodes'
import plans from './modules/plans'
import prices from './modules/prices'
import calculate from './modules/calculate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    areaCodes,
    plans,
    prices,
    calculate
  },
  strict: true
})
