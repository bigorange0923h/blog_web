<!-- 博客头部菜
单按钮 -->
<template>
  <el-affix :offset="10">
    <el-button
      :style="style"
      v-show="!drawer"
      class="menu-btn"
      size="mini"
      @click="drawer = true"
      plain
    >
      <i class="el-icon-menu"></i>
    </el-button>
  </el-affix>
  <div class="menu-drawer">
    <el-drawer title="菜单" v-model="drawer" :with-header="false" size="10">
      <div class="ui fluid inverted vertical menu m-menu">
        <h3 class="ui header center aligned item">菜单</h3>
        <a href="#" class="m-item item m-mobile-hide"
          ><i class="mini home icon"></i>首页</a
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
</template>

<script>
export default {
  name: "BlogMenu",
  data() {
    return {
      drawer: false,
      style: {},
    };
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll); //监听页面滚动
  },

  methods: {
    windowScroll() {
      let clientH = $(window).height(); //视窗大小
      let menubtnTop = $(".menu-btn").offset().top; //按钮距离顶部距离
      if (menubtnTop - clientH >= 8) {
        this.style = {
          border: `1px solid #000000`,
          backgroundColor: `#000000`,
          marginRight: `0px`,
        };
      } else {
        this.style = { color: `#ffffff`, border: `1px solid #ffffff` };
        this.size = "medium";
      }
      // 执行到变色的部分磁吸页面到顶部
      if (menubtnTop - clientH <= 5 && menubtnTop - clientH >= 3) {
        window.scrollTo({
          behavior: "smooth",
          top: document.documentElement.clientHeight,
        });
      }
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll); //销毁滚动事件
  },
};
</script>

<style  scoped>
.menu-btn {
  float: right;
  margin-right: 10px;
  border: 1px solid #fff;
  background-color: rgb(0, 0, 0, 0);
  color: #fff;
}
.menu-btn .el-button.is-plain:hover,
.el-button.is-plain:focus {
  color: #000;
}

.el-drawer__body {
  background-color: rgb(0, 0, 0, 0.3) !important;
}
.el-drawer {
  background-color: rgb(0, 0, 0, 0.3) !important;
}
.m-menu {
  background-color: rgb(0, 0, 0, 0.3) !important;
}
.menu-drawer {
  z-index: 100;
  position: absolute;
  right: 0;
}
</style>
