<!-- 博客顶部导航栏 -->
<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template #title>我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template #title>选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HomeHead",
  data() {
    return {};
  },
  methods: {
    // 初始化
    scrollDown() {
      window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.clientHeight,
      });
    },
  },
  components: {},
  created() {},
};
</script>

<style scoped lang="scss">
// 顶部水平导航栏
.el-menu {
  background-color: rgba(0, 0, 0, 0.5);
}
.el-menu el-menu-item {
  float: right;
}
ul.m-navigationBar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

ul.m-navigationBar li {
  float: right;
  margin: 0;
}

ul.m-navigationBar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

ul.m-navigationBar li a:hover:not(.active) {
  background-color: #111;
}

ul.m-navigationBar li a.active {
  background-color: #4caf50;
}
</style>
