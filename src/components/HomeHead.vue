<!-- 博客首页头部 -->
<template>
  <div class="home-banner">
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
      <div class="mobile-navbar pc-hidden">
        <el-button
          class="mobile-navbar-btn"
          @click="drawer = true"
          type="primary"
          style="margin-left: 16px"
        >
          <i class="el-icon-menu"></i>
        </el-button>
      </div>
      <el-drawer class="menu_drawer" v-model="drawer" :with-header="false">
        <div class="top-navbar-context"></div>
      </el-drawer>
    </el-affix>

    <div class="banner-container">
      <h1 class="blog-title animated zoomIn">欢迎</h1>
      <h2>来到大橙子的博客</h2>
      <!-- 向下滚动 -->
      <div class="scroll-down" @click="scrollDown">
        <i id="scroll-down" class="el-icon-arrow-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/animates.css";
import TopNavBar from "@/components/TopNavBar.vue";

export default {
  name: "HomeHead",
  data() {
    return {
      drawer: false,
      scrollTopTemp: 0,
    };
  },
  methods: {
    // 初始化
    scrollDown() {
      window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.clientHeight,
      });
    },

    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var scroll = scrollTop - this.scrollTopTemp;
      if (scroll > 0) {
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
.home-banner {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 100vh;
  background: url("../assets/home/tree.jpg") center center / cover no-repeat;
  // background: black;
  background-attachment: fixed;
  text-align: center;
}
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

.banner-container {
  margin-top: 43vh;
  line-height: 1.5;
  color: #eee;
}
#scroll-down {
  width: 20px;
  height: 20px;
  position: relative;
  animation: mymove 2s infinite;
  -webkit-animation: mymove 2s infinite; /*Safari and Chrome*/
}
@keyframes mymove {
  0% {
    bottom: 0px;
  }
  25% {
    bottom: 5px;
  }
  50% {
    bottom: 10px;
  }
  75% {
    bottom: 5px;
  }
  100% {
    bottom: 0px;
  }
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
  0% {
    bottom: 0px;
  }
  25% {
    bottom: 5px;
  }
  50% {
    bottom: 10px;
  }
  75% {
    bottom: 5px;
  }
  100% {
    bottom: 0px;
  }
}
.scroll-down {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.scroll-down i {
  font-size: 2rem;
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
.el-menu {
}
// 隐藏elementui导航栏整体下划线
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

//================================================================  顶部水平导航栏 end ================================================================

//================================================================  垂直导航栏 start ================================================================
.mobile-navbar-btn {
  background-color: rgba(255, 251, 251, 0);
  color: #ffffff;
  font: 0.5em;
}

.el-drawer__body {
  background-color: black !important;
  color: green;
}

//.el-drawer.ltr, .el-drawer.rtl
.el-drawer {
  background-color: rgb(44, 44, 44, 0) !important;
}

//修改按钮获取焦点时的样式
.el-button--primary:hover,
.el-button--primary:focus {
  background-color: rgb(44, 44, 44, 0);
}
// .top-navbar-context {
//   width: 100%;
//   height: 100%;
//   background-color: black !important;
// }
//================================================================  垂直导航栏 end ================================================================
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
@media (max-width: 759px) {
  .blog-title {
    font-size: 24px;
  }
  .blog-contact {
    font-size: 1.25rem;
    line-height: 2;
  }
  .home-container {
    width: 100%;
    margin: calc(100vh - 66px) auto 0 auto;
  }
  .article-card {
    margin-top: 1rem;
  }
  .article-cover {
    border-radius: 8px 8px 0 0 !important;
    height: 230px !important;
    width: 100%;
  }
  .article-cover div {
    border-radius: 8px 8px 0 0 !important;
  }
  .article-wrapper {
    padding: 1.25rem 1.25rem 1.875rem;
  }
  .article-wrapper a {
    font-size: 1.25rem;
    transition: all 0.3s;
  }
  .mobile-hidden {
    display: none;
  }
}
</style>
