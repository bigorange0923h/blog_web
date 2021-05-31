<template>
  <HomeHead></HomeHead>
  <div class="m-home"></div>
</template>

<script>
// @ is an alias to /src
import HomeHead from "@/components/HomeHead.vue";

export default {
  name: "Home",
  components: {
    HomeHead,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.m-home {
  padding-top: 100vh !important;
  padding-bottom: 0px !important;
  height: 100vh;
}
el-container {
  top: 0px !important;
}
</style>
