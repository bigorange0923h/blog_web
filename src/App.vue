<template>
  <router-view />
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
  margin: 0px;
  padding: 0px;
}
</style>
