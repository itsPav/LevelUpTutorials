<template>
  <div id="app" v-if="status == 'Ready'">
    <Header :title="title"  />
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{ hello }}</h1>
    <!-- <ul>
      <li v-for="(item, index) in list">
        {{index + 1}} {{item}}  
      </li> 
      <li v-for="person in people">
        {{person.name}}  
      </li> 
      <li v-for="(value, key) in profile">
        {{key}}: {{value}}  
      </li> 
    </ul> -->
    <HelloWorld
      msg="Welcome to Your Vue.js App"
    />
  </div>
  <div v-else-if="status == 'Loading'">
    Loading
  </div>
  <div v-else>
    Error
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return { 
      hello: 'Hello World',
      title: 'Vue Movie DB',
      isTrue: true,
      status: "Ready"
      // list: [
      //   "Penguin",
      //   "Turtle",
      //   "Red Panda"
      // ],
      // people: [{
      //   id: "1",
      //   name: 'Val',
      // }, {
      //   id: "2",
      //   name: 'Pav'
      // }],
      // profile: {
      //   name: "Pav",
      //   age: 25,
      //   job: 'Developer'
      // }
    };
  },
  methods: {

  },
  components: {
    HelloWorld,
    Header
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
