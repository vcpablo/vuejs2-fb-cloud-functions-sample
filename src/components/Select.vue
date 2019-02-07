<template>
  <div>
    <select
      v-model="model"
      :name="name"
      :class="$style.select"
      @change="handleChange">
      <option value="">
        Selecione uma opção
      </option>
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id">
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true,
      defaut: []
    }
  },
  data () {
    return {
      model: '',
      validation: {
        valid: true,
        message: ''
      }
    }
  },
  mounted () {
    if (this.value) {
      this.model = this.value
    }
  },
  methods: {
    handleChange () {
      const entity = this.options.find(option => option.id === this.model)
      const data = {
        entity,
        value: this.model
      }
      this.$emit('change', data)
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/layout.scss';

.select {
  height: 40px;
  background-color: $white;
  border-radius: 0;
  font-size: 14px;
  width: 100%;
}

</style>
