<template>
  <div id="app">
    <div id="nav" class="container">
    <div class="row">
      <div class="col-12 block text-right">
            <router-link to="/">Home</router-link> | 
            <router-link to="/about">About</router-link> | 
            <router-link :to="{ name: 'shop', params: { queryData } }">Shop</router-link>
      </div>
    </div>
        <router-view />
    </div>

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

.block {
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.03);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin-bottom: 20px
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
