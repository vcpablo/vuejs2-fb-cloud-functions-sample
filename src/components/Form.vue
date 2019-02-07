<template>
<div>
  <div :class="$style.requiredWarning">
    <small :class="$style.required">
      The fields marked with * are required
    </small>
  </div>
  <div class="innerContainer">
    <div :class="$style.group">
      <!-- Origin -->
      <div :class="$style.field">
        <label
          for="origin"
          :class="$style.label">
            Origin <span :class="$style.required">*</span>
          </label>
          <app-select
            id="origin"
            :name="'origin'"
            :options="areaCodes"
            :class="$style.input"
            :value="model.origin"
            @change="handleOriginAreaCodeChange"/>
      </div>
      <!-- Destination -->
      <div :class="$style.field">
        <label
          for="destination"
          :class="$style.label">
            Destination <span :class="$style.required">*</span>
          </label>
          <app-select
            id="destination"
            :name="'destination'"
            :options="areaCodes"
            :class="$style.input"
            :value="model.destination"
            @change="handleDestinationAreaCodeChange"/>
      </div>
      <!-- Time -->
      <div :class="$style.field">
        <label
          for="minutes"
          :class="$style.label">
            Time <small>(in minutes)</small> <span :class="$style.required">*</span>
          </label>
          <div :class="$style.input">
            <input
              v-model="model.minutes"
              id="minutes"
              type="number"
            />
          </div>
      </div>
      <!-- Plan -->
      <div :class="$style.field">
        <label
          for="plan"
          :class="$style.label">
            TalkMore Plan <span :class="$style.required">*</span>
          </label>
          <app-select
            id="plan"
            :name="'plan'"
            :options="plans"
            :class="$style.input"
            @change="handlePlanChange"/>
      </div>
    </div>
    <div :class="[$style.group, $style.buttonGroup]">
      <!-- <div :class="[$style.field, $style.buttonField]"> -->
      <button
        id="calculate"
        type="button"
        :class="$style.button"
        @click="handleCalculate">
        Calculate
      </button>
      <!-- </div> -->
    </div>
  </div>
</div>
</template>

<script>
import {
  areaCodesComputed,
  areaCodesMethods,
  plansComputed,
  plansMethods,
  pricesComputed,
  pricesMethods
} from '../store/helpers'

import Select from './Select'
// import Simplert from 'vue2-simplert'

export default {
  name: 'Form',
  components: {
    AppSelect: Select
  },
  mounted () {
    this.fetchAreaCodes()
    this.fetchPlans()
    this.fetchPrices()
  },
  data () {
    return {
      model: {
        origin: '',
        destination: '',
        minutes: '',
        plan: ''
      }
    }
  },
  computed: {
    ...areaCodesComputed,
    ...plansComputed,
    ...pricesComputed
  },
  methods: {
    ...areaCodesMethods,
    ...plansMethods,
    ...pricesMethods,
    validate () {
      let error
      const properties = Object.keys(this.model)
      const someEmpty = properties.some(property => !this.model[property])

      const priceMatch = this.prices.find(price => {
        return price.origin === this.model.origin && price.destination === this.model.destination
      })

      if (someEmpty) {
        error = 'Os campos marcados com * são de preenchimento obrigatório'
      } else if (!priceMatch) {
        error = 'Nenhum valor encontrado para esta combinação'
      }

      if (error) {
        this.$swal('Atenção', error, 'error')
        this.$emit('cancel')
        return false
      }

      return priceMatch
    },
    handleOriginAreaCodeChange (data) {
      this.model.origin = data.value
    },
    handleDestinationAreaCodeChange (data) {
      this.model.destination = data.value
    },
    handlePlanChange (data) {
      this.model.plan = data.entity
    },
    handleCalculate (value) {
      const priceMatch = this.validate()

      if (priceMatch) {
        const data = Object.assign(this.model, priceMatch)
        this.$emit('calculate', data)
      }
    }
  }
}
</script>

<style lang="scss" module>

@import '@/assets/layout.scss';

.group {
  display: flex;
  justify-content: space-between;

  @include mq($until: desktop) {
    flex-direction: column;
  }
}

.buttonGroup {
  display: block;
  margin-top: 10px;
  justify-content: flex-end;
  padding: 0 10px;

  @include mq($until: desktop) {
    padding: 0;
  }

  .required {
    float: left;
  }
}

.buttonField {
  justify-content: flex-end;
}

.button {
  width: 100%;
  height: 40px;
  background-color: $success;
  color: $white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.button:focus {
  outline: none;
}

.field {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  padding: 10px;

  @include mq($until: desktop) {
    padding-left: 0;
  }
}

.input {
  margin-top: 10px;
}

.input input {
  height: 35px;
  font-size: 15px;
  width: -webkit-fill-available;
  border: 1px solid $grey;
}

.required {
  color: $danger;
}

.requiredWarning {
  text-align: right;

  @include mq($until: desktop) {
    text-align: left;
  }
}
</style>
