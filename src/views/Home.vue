<template>
  <div>
    <!-- <div class="page_header_div"></div> -->
    <el-container>
      <el-header style="background: black">
        <!-- 导航菜单 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="white"
          router="true"
        >
          <el-menu-item index="1" route="/home">主页</el-menu-item>
          <el-menu-item index="2">用户管理</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>
      </el-header>

      <el-main style="height: 800px">
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.page_header_div {
  background: url(../assets/home/bg.jpg);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 500px;
}
</style>
