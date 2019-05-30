<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <Demo />
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  async mounted () {
    let data
    let ret = await this.$axios.get('/api/goods')
    console.log(ret.data)

    let mock = await this.$axios.get('/easymock/course/list')
    console.log(mock.data)

    let prod = await this.$axios.get('http://localhost:9082/api/goods')
    console.log(prod.data)
  }
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
