<!-- 归档页 -->
<template>
  <div class="pusher">
    <BlogMenu></BlogMenu>
    <!-- banner -->
    <div class="home-banner banner">
      <div class="ui text container banner_context">
        <h1 class="blog-title ui inverted header">归档</h1>
        <h2 class="blog-contact">不积跬步</h2>
        <h2 class="blog-contact">无以至千里</h2>
      </div>
      <!-- 向下滚动 -->
      <ScrollDown />
    </div>
    <div class="m-content">
      <div class="ui vertical stripe segment bg-transparent">
        <div class="ui container">
          <div class="ui stackable grid">
            <!-- content -->
            <div class="ui attached segment">
              <el-timeline>
                <el-timeline-item
                  v-for="blog in blogs"
                  :key="blog.id"
                  :timestamp="blog.createDate"
                  placement="top"
                >
                  <el-card>
                    <h4>{{ blog.title }}</h4>
                    <p>{{ blog.author }}</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </div>
        </div>
      </div>
      <BlogFooter />
    </div>
  </div>
</template>

<script>
import BlogMenu from "@/components/BlogMenu.vue";
import BlogFooter from "@/components/BlogFooter.vue";
import ScrollDown from "@/components/ScrollDown.vue";
export default {
  name: "Archves",
  components: {
    BlogMenu,
    BlogFooter,
    ScrollDown,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "活动按期开始",
          createDate: "2018-04-15",
          author: "张三",
        },
        {
          id: 2,
          title: "活动按期开始",
          createDate: "2018-04-15",
          author: "张三",
        },
        {
          id: 3,
          title: "活动按期开始",
          createDate: "2018-04-15",
          author: "张三",
        },
        {
          id: 4,
          title: "活动按期开始",
          createDate: "2018-04-15",
          author: "张三",
        },
      ],
    };
  },
};
</script>

<style  scoped>
.home-banner {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 100vh;
  background: url("http://r.photo.store.qq.com/psc?/V53KcXfb1umonn4HbITu3rINxs43TczD/45NBuzDIW489QBoVep5mcQaBtLM2yTpYe999VZqnRjp1i*p*43XTdPNTx*Qw5X3kLZcdY7f2PP*HY0CLM5irJV7KRGdQZhNlKutHE4uqHzE!/r")
    center center / cover no-repeat;
  background-color: #49b1f5;
  background-attachment: fixed;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s !important;
}
.m-content {
  padding-top: 105vh !important;
  padding-bottom: 0px !important;
  position: absolute;
  left: 0;
  right: 0;
}
.right.aligned.six.wide.column {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
}
p {
  color: #909399;
}

.bg-transparent .ui.segment {
  background: rgb(0, 0, 0, 0) !important;
}
</style>
