<!-- 博客详情 -->
<template>
  <div>
    <BlogMenu></BlogMenu>
    <!-- banner -->
    <div class="home-banner banner">
      <div class="ui text container banner_context">
        <h1 class="blog-title ui inverted header">博客详情</h1>
        <h2>不积小流</h2>
        <h2>无以成江河</h2>
      </div>
      <!-- 向下滚动 -->
      <ScrollDown />
    </div>
    <div class="m-content">
      <div class="ui container">
        <div class="ui top attached segment">
          <div class="ui horizontal link list">
            <div class="item">
              <img v-bind:src="dataList.avatar" class="ui avatar image" />
              <div class="content">
                <a class="header">{{ dataList.nickname }}</a>
              </div>
            </div>
            <div class="item">
              <i class="calendar icon"></i> {{ dataList.createTime }}
            </div>
          </div>
        </div>
        <div class="ui attached segment">
          <!--图片区域-->
          <img
            v-bind:src="dataList.firstPicture"
            class="ui fluid rounded image"
          />
        </div>
        <div class="ui attached padded segment">
          <!-- 博客内容 -->
          <div class="ui right aligned basic segment">
            <div class="ui orange basic label">
              {{ dataList.shareStatement }}
            </div>
          </div>
          <h2 class="ui center aligned header" v-text="dataList.title"></h2>
          <br />
          <div class="blog_content" v-html="dataList.content"></div>
          <!--标签-->
          <!-- <div class="m-padded-lr-responsive">
            <div
              class="ui basic teal left pointing label"
              v-for="item in dataList.tagList"
              :key="item.tagId"
            >
              {{ item.tagName }}
            </div>
          </div> -->
          <!--赞赏-->
          <div class="ui center aligned basic segment">
            <button id="payButton" class="ui orange basic circular button">
              赞赏
            </button>
          </div>
          <div class="ui payQR flowing popup transition hidden">
            <div class="ui orange basic label">
              <div class="ui images" style="font-size: inherit !important">
                <div class="image">
                  <img
                    src="http://r.photo.store.qq.com/psc?/V53KcXfb1umonn4HbITu3rINxs43TczD/45NBuzDIW489QBoVep5mcUTT*ciAgjJ0cppZCI5w1ILm3Q2J4WJdIQXJXdXVu5HUtU4pM3n8zAHqY3rf6z3B415ulY*M0Dp.HBBJhfDaF*E!/r"
                    alt=""
                    class="ui rounded bordered image"
                    style="width: 120px"
                  />
                  <div>支付宝</div>
                </div>
                <div class="image">
                  <img
                    src="http://r.photo.store.qq.com/psc?/V53KcXfb1umonn4HbITu3rINxs43TczD/45NBuzDIW489QBoVep5mcaapv*CZPLor9HYeVrOOiVJnvoxLW18OIo4.CeFhPXXRsV3xEfxMyKMRodIkn6GwaENGRnt8bkvhKT7JrLFzM.w!/r"
                    alt=""
                    class="ui rounded bordered image"
                    style="width: 120px"
                  />
                  <div>微信</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 博客描述 -->
          <div class="ui divider"></div>
          <div class="ui relaxed items">
            <div class="item">
              <div class="ui small image">
                <img
                  src="http://r.photo.store.qq.com/psc?/V53KcXfb1umonn4HbITu3rINxs43TczD/45NBuzDIW489QBoVep5mcaapv*CZPLor9HYeVrOOiVLnyRm8OUpwb6xeJ6lITPL.CQBAMN*ufWnqF4BJBqO4o0iDboC.V.GwA1i2AehYs7g!/r"
                />
              </div>
              <div class="content">
                <div class="description">
                  <ui class="list">
                    <li>作者：{{ dataList.nickname }}（联系作者）</li>
                    <li>发表时间：{{ dataList.createTime }}</li>
                    <li>
                      版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）
                    </li>
                    <li>公众号转载：请在文末添加作者公众号二维码</li>
                  </ui>
                </div>
              </div>
            </div>
          </div>
          <div class="ui divider"></div>
        </div>
        <div id="comment-container" class="ui bottom attached segment">
          <!--留言区域列表-->
          <div class="ui segment">
            <div class="ui threaded comments" style="max-width: 100%">
              <h3 class="ui dividing header">留言</h3>
              <div
                class="comment"
                v-for="item in dataList2"
                :key="item.commentId"
              >
                <a class="avatar">
                  <img v-bind:src="item.avatar" />
                </a>
                <div class="content">
                  <a class="author">{{ item.nickname }}</a>
                  <div class="metadata">
                    <span class="date">{{ item.createTime }}</span>
                  </div>
                  <div class="text" v-text="item.content"></div>
                  <div class="actions">
                    <a class="reply" @click="replyComment(item)">回复</a>
                    <a
                      class="reply"
                      @click="deleteComment(item)"
                      v-show="item.uid == uid"
                      >删除</a
                    >
                  </div>
                </div>
                <div class="comments">
                  <div
                    class="comment"
                    v-for="item2 in item.children"
                    :key="item2.commentId"
                  >
                    <a class="avatar">
                      <img v-bind:src="item2.avatar" />
                    </a>
                    <div class="content">
                      <a class="author">{{ item2.nickname }}</a>
                      <div class="metadata">
                        <span class="date">{{ item2.createTime }}</span>
                      </div>
                      <div class="text" v-text="item2.content"></div>
                      <div class="actions">
                        <a class="reply" @click="replyComment(item2)">回复</a>
                        <a
                          class="reply"
                          @click="deleteComment(item2)"
                          v-show="item2.uid == uid"
                          >删除</a
                        >
                      </div>
                    </div>
                    <div class="comments">
                      <div
                        class="comment"
                        v-for="item3 in item2.children"
                        :key="item3.commentId"
                      >
                        <a class="avatar">
                          <img v-bind:src="item3.avatar" />
                        </a>
                        <div class="content">
                          <a class="author">{{ item3.nickname }}</a>
                          <div class="metadata">
                            <span class="date">{{ item3.createTime }}</span>
                          </div>
                          <div class="text" v-text="item3.content"></div>
                          <div class="actions">
                            <a class="reply" @click="replyComment(item3)"
                              >回复</a
                            >
                            <a
                              class="reply"
                              @click="deleteComment(item3)"
                              v-show="item3.uid == uid"
                              >删除</a
                            >
                          </div>
                        </div>
                        <div class="comments">
                          <div
                            class="comment"
                            v-for="item4 in item3.children"
                            :key="item4.commentId"
                          >
                            <a class="avatar">
                              <img v-bind:src="item4.avatar" />
                            </a>
                            <div class="content">
                              <a class="author">{{ item4.nickname }}</a>
                              <div class="metadata">
                                <span class="date">{{ item4.createTime }}</span>
                              </div>
                              <div class="text" v-text="item4.content"></div>
                              <div class="actions">
                                <a class="reply" @click="replyComment(item4)"
                                  >回复</a
                                >
                                <a
                                  class="reply"
                                  @click="deleteComment(item4)"
                                  v-show="item4.uid == uid"
                                  >删除</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ui form">
            <el-form ref="addForm" :model="formData">
              <div class="field">
                <textarea name="content"></textarea>
              </div>
            </el-form>
            <div class="fields">
              <div class="field m-margin-tb-tiny m-mobile-wide">
                <button
                  class="ui blue button m-mobile-wide"
                  @click="addComment"
                >
                  <i class="edit icon"></i>发布
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 页面底栏 -->
      <BlogFooter />
    </div>
  </div>
</template>

<script>
import ScrollDown from "@/components/ScrollDown.vue";
import BlogMenu from "@/components/BlogMenu.vue";
import BlogFooter from "@/components/BlogFooter.vue";
export default {
  name: "Blog",
  components: {
    BlogMenu,
    BlogFooter,
    ScrollDown,
  },
  data() {
    return {
      dataList: {
        avatar: "https://unsplash.it/100/100?image=1005",
        nickname: "大橙子",
        createTime: "2021-09-01 12:00:00",
        firstPicture: "https://unsplash.it/800/450?image=1005",
        shareStatement: "原创",
        title: "什么是财富自由",
        content:
          '<p>(入站须知)↵一.个人博客简介↵项目地址：http://www.tcefrep.site/ （源码地址在本文末尾），感谢阿里云爸爸，送了一个两个月的2核4g的服务器，现在搜索模块也用上了elasticsearch↵<img src="" alt="在这里插入图片描述" /></p>↵<h2 id="11-博客主要页面">1.1 博客主要页面：</h2>↵<h3 id="111-首页"> 1.1.1 首页</h3>↵<p></p>↵<p></p>',
        tagList: [
          { tagId: 1, tagName: "生活" },
          { tagId: 1, tagName: "体育" },
        ],
      },
    };
  },
  methods: {},

  created() {},
  mounted() {
    $("#payButton").popup({
      popup: $(".payQR.popup"),
      on: "click",
      position: "bottom center",
    });
  },
};
</script>

<style scoped >
.m-content {
  padding-top: 105vh !important;
  padding-bottom: 0px !important;
  position: absolute;
  left: 0;
  right: 0;
}
.home-banner {
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 100vh;
  background: url("http://r.photo.store.qq.com/psc?/V53KcXfb1umonn4HbITu3rINxs43TczD/45NBuzDIW489QBoVep5mcSPhM*LqG*bYzP4o2JVbahf8eHd4Yd9FO1B4n8UbWJRaQANKT1EBypIfvSNRueI1LSu6d212FUoavpm63ZrUI3E!/r")
    center center / cover no-repeat;
  background-color: #49b1f5;
  background-attachment: fixed;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s !important;
}
.blog_content {
  width: 100%;
  color: #49b1f5;
}
</style>
