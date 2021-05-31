<!-- 博客首页头部 -->
<template>
  <div class="home-banner">
    <div>
      <ul class="m-navigationBar">
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
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
.home-banner {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 100vh;
  background: url("../assets/home/bg.png") center center / cover no-repeat;
  background-color: #49b1f5;
  background-attachment: fixed;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s !important;
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

// 顶部水平导航栏
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

@media (min-width: 760px) {
  .blog-title {
    font-size: 2.5rem;
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
}
</style>
