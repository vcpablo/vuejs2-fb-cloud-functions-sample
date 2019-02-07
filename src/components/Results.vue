<template>
  <div
    class="innerContainer"
    :class="$style.overflow">

    <table
      v-if="!loading"
      :class="$style.table">
      <tr>
        <th>Origin</th>
        <th>Destination</th>
        <th>Time (in minutes)</th>
        <th>TalkMore Plan</th>
        <th>WIth TalkMore</th>
        <th>Without TalkMore</th>
      </tr>
      <tr>
        <td>{{ result.origin }}</td>
        <td>{{ result.destination }}</td>
        <td>{{ result.minutes }}</td>
        <td>{{ result.plan }}</td>
        <td>{{ result.withPlan | currency}}</td>
        <td>{{ result.withoutPlan | currency }}</td>
      </tr>
    </table>
    <app-loading v-if="loading"/>
  </div>
</template>

<script>
import Loading from './loading'

export default {
  name: 'Results',
  components: {
    AppLoading: Loading
  },
  props: {
    result: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/layout.scss';

.content {
  display: flex;

  div {
    flex: 1;
    justify-content: center;
    display: flex;
    align-items: center;
    height: 60px;
    border: 1px solid $light-grey;
    padding: 10px;
  }
}

.table {
  width: 100%;

  th, td {
    text-align: center;
    height: 60px;
    line-height: 60px;
    border: 1px solid $light-grey;

    @include mq($until: desktop) {
      height: 30px;
      line-height: 30px;
      flex: 1 1 150px;
      border: 1px solid $light-grey;
    }
  }

  tr {
    border-bottom: 1px solid $light-grey;

    @include mq($until: desktop) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0.5em 0;
      border: 1px solid $light-grey;
    }
  }
}

</style>
