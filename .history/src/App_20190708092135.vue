<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/shop">Shop</router-link>
    </div>
    <router-view />
  </div>
</template>


<script>
import { get, post } from "@/helpers/Utilities.js";

export default {


  data() {
    return {
      get: get,
      post: post,

      queryData: []
    };
  },

  created() {},

  methods: {},

  mounted() {
    // this.Util.log();
    // this.logger("testys");
    this.get("http://localhost:3000/employees").then(resp => {
      this.queryData = resp;
    }).then(() => {
      console.log('queryData', this.queryData);
    }) ;
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
