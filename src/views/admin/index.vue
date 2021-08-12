<!-- 后台首页 -->
<template>
  <!-- 首页头 -->
  <el-container>
    <el-header name="header">
      <el-row style="height: 100%">
        <el-col :span="6">
          <div><h1 class="m-margin-top-small">BigOrange</h1></div></el-col
        >
        <!-- 
         <el-avatar
              class="m-margin-top-small"
              style="float: right"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar> -->
        <el-col :span="6" :offset="12">
          <el-dropdown
            trigger="click"
            class="m-margin-top-small"
            style="float: right"
          >
            <span class="el-dropdown-link">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item class="clearfix">
                  评论
                  <el-badge class="mark" :value="12" />
                </el-dropdown-item>
                <el-dropdown-item class="clearfix"> 设置 </el-dropdown-item>
                <el-dropdown-item class="clearfix"> 注销 </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
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
  border-bottom: 1px solid #dcdfe6 !important;
  color: #409eff;
  height: 80px;
}

.el-aside {
  color: #333;
}
</style>
