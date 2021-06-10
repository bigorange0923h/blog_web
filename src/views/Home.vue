<!-- 博客首页 -->
<template>
  <BlogMenu></BlogMenu>
  <div>首页</div>
</template>

<script>
import BlogMenu from "@/components/BlogMenu.vue";
export default {
  name: "Home",
  components: {
    BlogMenu,
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
</style>
