<!-- 博客头部菜单按钮 -->
<template>
  <el-affix :offset="10">
    <el-button
      v-show="!drawer"
      class="menu-btn"
      size="mini"
      @click="drawer = true"
      plain
    >
      <i class="el-icon-menu"></i>
    </el-button>
    <div class="menu-drawer">
      <el-drawer
        title="菜单"
        v-model="drawer"
        :with-header="false"
        size="80%"
        :before-close="handleClose"
        :show-close="true"
      >
        <div class="ui inverted secondary stackable menu">
          <h3 class="ui header center aligned item">菜单</h3>
          <a href="#" class="m-item item m-mobile-hide"
            ><i class="mini home icon"></i>首页</a
          >
          <a href="#" class="m-item item m-mobile-hide"
            ><i class="mini idea icon"></i> 分类</a
          >
          <a href="#" class="m-item item m-mobile-hide"
            ><i class="mini tags icon"></i>标签</a
          >
          <a href="#" class="m-item item m-mobile-hide"
            ><i class="mini clone icon"></i>归档</a
          >
          <a href="#" class="m-item item m-mobile-hide"
            ><i class="mini info icon"></i>关于我</a
          >
          <div class="right m-item item m-mobile-hide">
            <div class="ui icon inverted transparent input">
              <input type="text" placeholder="搜索..." />
              <i class="search icon"></i>
            </div>
          </div>
        </div>
      </el-drawer>
    </div>
  </el-affix>
</template>

<script>
export default {
  name: "BlogMenu",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style  scoped>
.menu-btn {
  float: right;
  margin-right: 10px;
  border: none;
}
.el-drawer__body {
  background-color: rgb(0, 0, 0, 0.3) !important;
  height: 100px;
}
.el-drawer {
  background-color: rgb(0, 0, 0, 0.3) !important;
}
</style>
