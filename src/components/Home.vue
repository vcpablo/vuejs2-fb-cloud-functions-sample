<template>
  <div>
    <h1 :class="$style.title">FaleMais</h1>
    <div :class="$style.container">
      <app-form
        @calculate="handleCalculate"
        @cancel="handleCancel"/>
      <app-results
        v-if="loading || result"
        :class="$style.results"
        :loading="loading"
        :result="result"/>
    </div>
  </div>
</template>

<script>
import Form from './Form'
import Results from './Results'
import { calculateComputed, calculateMethods } from '../store/helpers'

export default {
  name: 'Home',
  components: {
    AppForm: Form,
    AppResults: Results
  },
  data () {
    return {
      model: {}
    }
  },
  computed: {
    ...calculateComputed
  },
  methods: {
    ...calculateMethods,
    handleCalculate (data) {
      this.model = Object.assign({}, data)
      this.calculate(this.model)
    },
    handleCancel () {
      this.setResult(null)
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/layout.scss';

.title {
  font-weight: normal;
}

.container {
  width: 80%;
  margin: 0 auto;

  @include mq($until: desktop) {
    width: 100%;
  }
}

.results {
  margin-top: 10px;
}
</style>
