<!-- 博客首页 -->
<template>
  <BlogMenu></BlogMenu>
  <div class="pusher">
    <div
      class="ui inverted vertical masthead center aligned segment home_banner"
    >
      <div class="ui text container">
        <h1 class="ui inverted header">大橙子</h1>
        <h2>一个面向百度CV码农</h2>
        <h2>爱好广泛</h2>
        <h2>人很懒</h2>
      </div>
      <!-- 向下滚动 -->
      <div class="scroll-down" @click="scrollDown">
        <i id="scroll-down" class="el-icon-arrow-down"></i>
      </div>
    </div>

    <div class="ui vertical stripe segment home_content">
      <div class="ui container">
        <div class="ui stackable grid">
          <!-- 左边博客列表 -->
          <div class="eleven wide column">
            <!-- header -->
            <div class="ui top attached segment">
              <div class="ui middle aligned two column grid">
                <div class="column">
                  <h3 class="ui teal header">博客</h3>
                </div>
                <div class="right aligned column">
                  共
                  <h2 class="ui orange header m-inline-block m-text-thin">2</h2>
                  篇
                </div>
              </div>
            </div>

            <!-- content -->
            <div class="ui attached segment">
              <div class="ui padded vertical segment m-padded-tb-large">
                <div class="ui mobile reversed stackable grid">
                  <div class="ui eleven wide column">
                    <h3 class="ui header">你真的理解什么是财富自由吗?</h3>
                    <p class="m-text">
                      正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是大家都那么做而已…...
                    </p>
                    <div class="ui grid">
                      <div class="eleven wide column">
                        <div class="ui mini horizontal link list">
                          <div class="item">
                            <img
                              src="https://unsplash.it/100/100?image=1005"
                              alt=""
                              class="ui avatar image"
                            />
                            <div class="content">
                              <a href="#" class="header">大橙子</a>
                            </div>
                          </div>
                          <div class="item">
                            <i class="calendar icon"></i> 2021-03-23
                          </div>
                          <div class="item"><i class="eye icon"></i>1</div>
                        </div>
                      </div>

                      <div class="right aligned five wide column">
                        <a
                          href="#"
                          target="_blank"
                          class="
                            ui
                            teal
                            basic
                            label
                            m-padded-tb-tiny m-text-thin
                          "
                          >认知升级</a
                        >
                      </div>
                    </div>
                  </div>

                  <div class="five wide column">
                    <a href="#" target="_blank">
                      <img
                        src="https://unsplash.it/800/450?image=1005"
                        alt=""
                        class="ui rounded image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="ui padded vertical segment m-padded-tb-large">
                <div class="ui mobile reversed stackable grid">
                  <div class="ui eleven wide column">
                    <h3 class="ui header">你真的理解什么是财富自由吗?</h3>
                    <p class="m-text">
                      正确做好任何一件事情的前提是清晰、正确的理解目标。而事实是，我们很多人很多时候根本没有对目标正确的定义，甚至根本从来就没有想过，只是大家都那么做而已…...
                    </p>
                    <div class="ui grid">
                      <div class="eleven wide column">
                        <div class="ui mini horizontal link list">
                          <div class="item">
                            <img
                              src="https://unsplash.it/100/100?image=1005"
                              alt=""
                              class="ui avatar image"
                            />
                            <div class="content">
                              <a href="#" class="header">大橙子</a>
                            </div>
                          </div>
                          <div class="item">
                            <i class="calendar icon"></i> 2021-03-23
                          </div>
                          <div class="item"><i class="eye icon"></i>1</div>
                        </div>
                      </div>

                      <div class="right aligned five wide column">
                        <a
                          href="#"
                          target="_blank"
                          class="
                            ui
                            teal
                            basic
                            label
                            m-padded-tb-tiny m-text-thin
                          "
                          >认知升级</a
                        >
                      </div>
                    </div>
                  </div>

                  <div class="five wide column">
                    <a href="#" target="_blank">
                      <img
                        src="https://unsplash.it/800/450?image=1005"
                        alt=""
                        class="ui rounded image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!--footer-->
            <div class="ui bottom attached segment">
              <div class="ui middle aligned two column grid">
                <div class="column">
                  <a href="#" class="ui mini teal basic button">上一页</a>
                </div>
                <div class="right aligned column">
                  <a href="#" class="ui mini teal basic button">下一页</a>
                </div>
              </div>
            </div>
          </div>

          <!--右边的TOP -->
          <div class="five wide column">
            <!-- 分类 -->
            <div class="ui segments">
              <div class="ui secondary segment">
                <div class="ui two column grid">
                  <div class="column"><i class="idea icon"></i>分类</div>
                  <div class="right aligned column">
                    <a href="#" target="_blank"
                      >more <i class="angle double right icon"></i
                    ></a>
                  </div>
                </div>
              </div>
              <div class="ui teal segment">
                <div class="ui fluid vertical menu">
                  <a href="#" class="item"
                    >学习日志
                    <div class="ui teal basic left pointing label">1</div>
                  </a>
                  <a href="#" class="item"
                    >思想感悟
                    <div class="ui teal basic left pointing label">1</div>
                  </a>
                  <a href="#" class="item"
                    >生活分享
                    <div class="ui teal basic left pointing label">1</div>
                  </a>
                </div>
              </div>
            </div>

            <!-- 标签 -->
            <div class="ui segment">
              <div class="ui secondary segment">
                <div class="ui two column grid">
                  <div class="column"><i class="tags icon"></i>标签</div>
                  <div class="right aligned column">
                    <a href="#" target="_blank"
                      >more <i class="angle double right icon"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div class="ui teal segement">
                <a
                  href="#"
                  target="_blank"
                  class="ui teal basic left pointing label m-margin-tb-tiny"
                >
                  方法论
                  <div class="detail">1</div>
                </a>
                <a
                  href="#"
                  target="_blank"
                  class="ui teal basic left pointing label m-margin-tb-tiny"
                  >LeetCode
                  <div class="detail">1</div>
                </a>
              </div>
            </div>
            <!-- 最新推荐 -->
            <div class="ui segments m-margint-top-large">
              <div class="ui secondary segment">
                <i class="bookmark icon"></i>最新推荐
              </div>

              <div class="ui segment">
                <a href="#" target="_blank" class="m-blak m-text-thin">
                  你真的理解什么是财富自由吗?
                </a>
              </div>
              <div class="ui segment">
                <a href="#" target="_blank" class="m-blak m-text-thin">
                  时光时光慢些吧
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ui inverted vertical footer segment">
      <div class="ui container">
        <div class="ui stackable inverted divided equal height stackable grid">
          <div class="three wide column">
            <h4 class="ui inverted header">关于</h4>
            <div class="ui inverted link list">
              <a href="homepage.php#" class="item">Sitemap</a>
              <a href="homepage.php#" class="item">Contact Us</a>
              <a href="homepage.php#" class="item">Religious Ceremonies</a>
              <a href="homepage.php#" class="item">Gazebo Plans</a>
            </div>
          </div>
          <div class="three wide column">
            <h4 class="ui inverted header">服务</h4>
            <div class="ui inverted link list">
              <a href="homepage.php#" class="item">Banana Pre-Order</a>
              <a href="homepage.php#" class="item">DNA FAQ</a>
              <a href="homepage.php#" class="item">How To Access</a>
              <a href="homepage.php#" class="item">Favorite X-Men</a>
            </div>
          </div>
          <div class="seven wide column">
            <h4 class="ui inverted header">页脚</h4>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
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
.home_banner {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 100vh;
  background: url("http://r.photo.store.qq.com/psc?/V53KcXfb1umonn4HbITu3rINxs43TczD/45NBuzDIW489QBoVep5mcQaBtLM2yTpYe999VZqnRjqLW3e23.UCR78O5Km8SpsknNgOGpEzdY7QHY1usDO6pbksfeQBV5CqlMGgsjJVV9s!/r")
    center center / cover no-repeat !important;
  background-color: #49b1f5;
  background-attachment: fixed;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s !important;
}
.home_content {
  height: 105vh;
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
</style>
