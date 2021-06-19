<!-- 博客底部内容 -->
<template>
  <div class="m-footer">
    <div class="ui inverted vertical footer segment">
      <div class="ui center aligned container">
        <div class="ui inverted section divider"></div>
        <p class="m-text-thin m-text-spaced m-opacity-tiny">
          沪ICP备2021011235号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogFooter",
  data() {
    return {};
  },
};
</script>

<style  scoped>
.ui.vertical.segment {
  position: absolute;
  bottom: 100;
  left: 0;
  right: 0;
  margin-bottom: 0px;
  margin-top: 100px;
}
</style>
