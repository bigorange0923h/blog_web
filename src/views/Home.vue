<template>
  <div class="home-banner">
    <BlogHead></BlogHead>
    <div class="home-banner-context">
      <div class="banner-container">
        <h1 class="blog-title animated zoomIn">欢迎</h1>
        <h2>来到大橙子的博客</h2>
        <!-- 向下滚动 -->
        <div class="scroll-down" @click="scrollDown">
          <i id="scroll-down" class="el-icon-arrow-down"></i>
        </div>
      </div>
    </div>
  </div>
  <div class="home-context">
    <el-container>
      <el-main class="blog-list-box">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
        </el-table>
      </el-main>

      <el-aside class="nav-box mobile-hidden" classwidth="200px"
        >Aside</el-aside
      >
    </el-container>
  </div>
</template>

<script>
import BlogHead from "@/components/BlogHead.vue";
import "../assets/css/animates.css";
export default {
  name: "Home",
  components: {
    BlogHead,
  },
  data() {
    return {};
  },
  methods: {
    scrollDown() {
      window.scrollTo({
        behavior: "smooth",
        top: document.documentElement.clientHeight,
      });
    },
  },
};
</script>
<style scoped lang="scss">
.scroll-down {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.scroll-down i {
  font-size: 2rem;
}
.home-banner-context {
  margin-top: 43vh;
  line-height: 1.5;
  color: #eee;
}
#scroll-down {
  width: 20px;
  height: 20px;
  position: relative;
  animation: dynamicFloat 2s infinite;
  -webkit-animation: dynamicFloat 2s infinite; /*Safari and Chrome*/
}
.home-banner {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 100vh;
  background: url("../assets/home/tree.jpg") center center / cover no-repeat;
  background-attachment: fixed;
  text-align: center;
}
.m-home {
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 100vh;
  background: url("../assets/home/tree.jpg") center center / cover no-repeat;
  background-attachment: fixed;
  text-align: center;
}
.home-context {
  padding-top: 110vh !important;
  padding-bottom: 0px !important;
  height: 100vh;
  .blog-list-box {
    margin: 0 auto;
    width: 80%;
    height: 100px;
  }
  .nav-box {
    float: right;
  }
  .blog-list-box {
    width: 80%;
    padding: 0 auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
}
</style>
