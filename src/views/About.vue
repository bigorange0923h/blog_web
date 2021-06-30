<!-- 关于我页 -->
<template>
  <div class="pusher">
    <BlogMenu></BlogMenu>
    <!-- banner -->
    <div class="home-banner banner">
      <div class="ui text container banner_context">
        <div class="image content">
          <div class="ui rounde rounded image">
            <img src="https://unsplash.it/100/100?image=1005" />
          </div>
          <div class="description">
            <div class="ui header m-margin-top" style="color: #fff">大橙子</div>
            <p></p>
            <p>一个菜鸟后端程序员</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogMenu from "@/components/BlogMenu.vue";

export default {
  name: "Home",
  components: {
    BlogMenu,
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

<style  scoped>
.home-banner {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 100vh;
  background: url("http://r.photo.store.qq.com/psc?/V53KcXfb1umonn4HbITu3rINxs43TczD/45NBuzDIW489QBoVep5mcQz6a6RmGKe6G3ZOYoIoQdl9VNaSpHgiv8JNMAcpsS2xpNxouAuqFxY8uNvPxZ3qr6E798TSOFY*de6Bx*vCMlY!/r")
    center center / cover no-repeat;
  background-color: #49b1f5;
  background-attachment: fixed;

  color: #fff !important;
  animation: header-effect 1s !important;
}
.right.aligned.six.wide.column {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
}

.bg-transparent .ui.segment {
  background: rgb(0, 0, 0, 0) !important;
}
</style>
