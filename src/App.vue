<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import "./assets/css/m-css.css";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0px;
  padding: 0px;
}
</style>
