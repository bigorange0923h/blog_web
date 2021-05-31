<template>
  <button v-on:click="test = !test">Toggle</button>
  <transition name="fade">
    <p v-if="test">hello</p>
  </transition>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      test: true,
    };
  },
  created() {
    this.$axios
      .get("http://rap2api.taobao.org/app/mock/283878/user/findAll")
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style  scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
