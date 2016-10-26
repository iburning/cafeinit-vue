<template>
  <div id="app">
    <h1>{{message}}</h1>
    <!-- <hello></hello> -->
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  name: 'app',
  data() {
    return {
      message: 'hello vue'
    }
  }
  // components: {
  //   Hello
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
