<!-- 博客头部 -->
<template>
  <div>
    <el-affix :offset="0">
      <div class="top-navbar mobile-hidden">
        <div class="top-navbar-left">
          <p>Big Orange</p>
        </div>
        <div class="top-navbar-right">
          <el-menu
            :default-active="activeIndex"
            class="el-menu"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="home"
              ><i class="el-icon-s-home"></i>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="files"
              ><i class="el-icon-files"></i>
              <span>归档</span>
            </el-menu-item>

            <el-menu-item index="user"
              ><i class="el-icon-user"></i> <span>关于我</span></el-menu-item
            >
          </el-menu>
        </div>
      </div>
      <!--  手机界面菜单打开按钮 -->
      <div class="mobile-navbar pc-hidden">
        <el-button
          v-show="mobile_show"
          class="mobile-navbar-btn"
          @click="drawer = true"
          type="primary"
          style="margin-left: 16px"
        >
          <i class="el-icon-menu"></i>
        </el-button>

        <!-- 手机界面菜单 -->
        <el-drawer
          class="mobile-drawer"
          v-model="drawer"
          :with-header="false"
          size="80%"
        >
          <div class="drawer-context">
            <el-row class="tac">
              <el-col>
                <h5>菜单</h5>
                <el-menu
                  class="el-right-menu"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-menu-item index="1">
                    <i class="el-icon-s-home"></i>
                    <template #title>首页</template>
                  </el-menu-item>

                  <el-menu-item index="2">
                    <i class="el-icon-files"></i>
                    <template #title>归档</template>
                  </el-menu-item>

                  <el-menu-item index="3">
                    <i class="el-icon-user"></i>
                    <template #title>关于我</template>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </el-drawer>
      </div>
    </el-affix>
    <div class="backtop-box pc-hidden">
      <el-backtop></el-backtop>
    </div>
  </div>
</template>

<script>
import "../assets/css/animates.css";
import TopNavBar from "@/components/TopNavBar.vue";

export default {
  name: "BlogHead",
  data() {
    return {
      drawer: false,
      mobile_show: true,
      scrollTopTemp: 0,
    };
  },
  methods: {
    // 初始化
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var scroll = scrollTop - this.scrollTopTemp;
      if (scroll > 0) {
        //向下滚动隐藏菜单
        this.mobile_show = false;
      } else {
        this.mobile_show = true;
      }
    },
  },
  components: {},
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped lang="scss">
@keyframes header-effect {
  0% {
    opacity: 0.5;
    filter: alpha(opacity=0.5);
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    filter: none;
    transform: translateY(0);
  }
}

//================================================================  顶部水平导航栏 start ================================================================
.top-navbar {
  width: 100%;
  animation: header-effect 1s !important;
  height: 60px;
  background-color: rgb(44, 43, 43);
  color: white;
  border-bottom: 2px solid transparent;
}
.top-navbar-left {
  height: 100%;
  float: left;
}
.top-navbar-left p {
  margin-top: 10px;
  margin-left: 20px;
  font-size: 22px;
}
.top-navbar-right {
  height: 100%;
  float: right;
}

.mobile-navbar-btn {
  float: right;
  background-color: rgb(0, 0, 0, 0);
  border: none;
}
// elementui 组件

// 隐藏elementui导航栏整体下划线
.top-navbar-right {
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    color: #909399;
    background-color: rgb(44, 44, 44);
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    color: #ffffff;
    border-bottom: 2px solid #ffffff;
  }
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
    i {
      color: #fdfdfd;
    }
    color: #fdfdfd;
    background-color: rgb(44, 44, 44);
    font: 0.5em;
  }
}

//================================================================  顶部水平导航栏 end ================================================================

//================================================================  右侧导航栏 start ================================================================
.mobile-navbar {
  //修改按钮获取焦点时的样式
  .el-button--primary:hover,
  .el-button--primary:focus {
    background-color: rgb(44, 44, 44, 0);
  }
  .mobile-navbar-btn {
    background-color: rgb(255, 251, 251, 0);
    color: #ffffff;
    font: 0.5em;
  }
}
.drawer-context {
  .tac {
    color: #909399 !important;
    background-color: rgb(44, 43, 43, 0.1);
  }
  .el-right-menu {
    color: #909399;
    height: 100%;
    background-color: rgb(44, 43, 43, 0.1);
    .el-menu-item {
      color: #909399;
      background-color: rgb(44, 43, 43, 0.1);
    }
    .el-menu-item:hover,
    .el-menu-item:focus {
      color: #ffffff;
      background-color: rgba(22, 22, 22);
    }
  }
}

//================================================================  垂直导航栏 end ================================================================
//================================================================  右下角回到顶部按钮 start ================================================================
.backtop-box {
  overflow-x: hidden;
  .el-backtop {
    right: 10px !important;
    margin-bottom: -20px !important;
    width: 30px !important;
    height: 30px !important;
    color: rgb(44, 43, 43);
  }
}

//================================================================  右下角回到顶部按钮 end ================================================================

@media (min-width: 760px) {
  .pc-hidden {
    display: none;
  }
  .blog-title {
    font-size: 3rem;
  }
  .blog-intro {
    font-size: 1.5rem;
  }
  .blog-contact {
    line-height: 40px;
    text-align: center;
    font-size: 1.5rem;
    margin: 6px 0 -6px;
  }
  .home-container {
    max-width: 1200px;
    margin: calc(100vh - 50px) auto 0 auto;
    padding: 0 3px;
  }
  .article-card {
    display: flex;
    align-items: center;
    height: 280px;
    width: 100%;
    margin-top: 20px;
  }
  .article-cover {
    overflow: hidden;
    height: 100%;
    width: 45%;
  }
  .on-hover {
    transition: all 0.6s;
  }
  .article-card:hover .on-hover {
    transform: scale(1.1);
  }
  .article-wrapper {
    padding: 0 2.5rem;
    width: 55%;
  }
  .article-wrapper a {
    font-size: 1.5rem;
    transition: all 0.3s;
  }
}

</style>
