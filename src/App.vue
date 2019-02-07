<template>
  <div
    id="app"
    class="app">
    <img class="logo"
      src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/assets/layout.scss';

* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 200px;
}

.innerContainer {
  border: 1px solid $light-grey;
  box-shadow: 1px 1px 1px $light-grey;
  padding: 20px;
}

</style>
