<!-- 后台首页 -->
<template>
  <!-- 首页头 -->
  <el-container>
    <el-header name="header">Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style  scoped>
.el-header {
  border-bottom: brown 1px solid !important;
  color: #333;
  height: 80px;
}

.el-aside {
  color: #333;
}
</style>
