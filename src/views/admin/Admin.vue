<!-- 后台首页 -->
<template >
  <div class="admin-content">
    <!-- 首页头 -->
    <el-container>
      <el-header name="header">
        <el-row style="height: 100%">
          <el-col :span="6">
            <div><h1 class="m-margin-top-small">BigOrange</h1></div></el-col
          >
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
        <!-- 侧边栏 -->
        <el-aside width="200px" style="height: 100%" class="mobile-hidden"
          ><LeftMenu
        /></el-aside>
        <el-main class="admin-main"><AdminTabs /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftMenu from "@/components/admin/LeftMenu.vue";
import AdminTabs from "@/components/admin/AdminTabs";

export default {
  name: "index",
  components: {
    LeftMenu,
    AdminTabs,
  },
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
.admin-content {
  height: 100vh;
  background: white !important;
}
.admin-main {
  height: 85vh;
}
.el-header {
  border-bottom: 1px solid #dcdfe6 !important;
  color: #409eff;
  height: 15vh;
}

.el-aside {
  color: #333;
  height: 100% !important;
}
</style>
