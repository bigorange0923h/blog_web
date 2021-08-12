<!-- 后台首页左侧菜单 -->
<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <template #title>
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-menu-item v-for="item of MenuList" :key="item.url" :index="item.url">
      <i :class="item.icon"></i>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      MenuList: [
        {
          title: "用户管理",
          url: "admin/index/user",
          icon: "el-icon-s-custom",
        },
        {
          title: "博客管理",
          url: "admin/index/blog",
          icon: "el-icon-document",
        },
        {
          title: "消息管理",
          url: "admin/index/message",
          icon: "el-icon-message",
        },
      ],
    };
  },
};
</script>

<style  scoped>
</style>
