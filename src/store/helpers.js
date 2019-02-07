import { mapState, mapActions } from 'vuex'

export const areaCodesComputed = {
  ...mapState('areaCodes', {
    areaCodes: state => state.items
  })
}

export const areaCodesMethods = mapActions('areaCodes', ['fetchAreaCodes'])

export const plansComputed = {
  ...mapState('plans', {
    plans: state => state.items
  })
}

export const plansMethods = mapActions('plans', ['fetchPlans'])

export const pricesComputed = {
  ...mapState('prices', {
    prices: state => state.items
  })
}

export const pricesMethods = mapActions('prices', ['fetchPrices'])

export const calculateComputed = {
  ...mapState('calculate', {
    result: state => state.result,
    loading: state => state.loading
  })
}

export const calculateMethods = mapActions('calculate', ['calculate', 'setResult'])
