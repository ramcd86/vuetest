<template>
  <div id="app">
    <div id="nav" class="container">
    <div class="row">
      <div class="col-12 nav-row">
            <router-link to="/">Home</router-link> | 
            <router-link to="/about">About</router-link> | 
            <router-link :to="{ name: 'shop', params: { queryData } }">Shop</router-link>
      </div>
    </div>

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

      queryData: ''
    };
  },

  created() {
    this.get("http://localhost:3000/employees").then(resp => {
      this.queryData = JSON.parse(resp);
    });
  },

  methods: {},

  mounted() {
    console.log(this.queryData);
  }
};
</script>


<style lang="scss">

.nav-row {
  background-color: #111;
}

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
    color: #42b983;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
