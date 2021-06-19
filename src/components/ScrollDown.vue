<!-- 向下滚动 -->
<template>
  <div class="scroll-down" @click="scrollDown">
    <i id="scroll-down" class="el-icon-arrow-down"></i>
  </div>
</template>

<script>
export default {
  name: "ScrollDown",
  data() {
    return {};
  },
  methods: {
    scrollDown() {
      window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.clientHeight,
      });
    },
  },
};
</script>

<style  scoped>
.scroll-down {
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  width: 100%;
  z-index: 1;
}
.scroll-down i {
  font-size: 2rem;
}
</style>
