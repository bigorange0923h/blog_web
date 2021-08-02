<!-- 登录页 -->
<template>
  <div id="login" class="m-container-small m-padded-tb-massive" style="">
    <div class="ur container">
      <div class="ui middle aligned center aligned grid">
        <div class="column">
          <h2 class="ui teal image header">
            <div class="content">管理后台登录</div>
          </h2>
          <div class="ui segment">
            <form class="ui large form" method="post" action="#">
              <div class="field">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input
                    type="text"
                    name="username"
                    v-model="username"
                    placeholder="用户名"
                  />
                </div>
              </div>
              <div class="field">
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    v-model="password"
                    placeholder="密码"
                  />
                </div>
              </div>

              <div class="ui error mini message"></div>
            </form>
            <button @click="login" class="ui fluid large teal button">
              登 录
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    //校验用户
    login() {
      $(".ui.form").form("validate form");
      this.$axios.post("/admin/login", JSON.stringify(this.user)).then(
        function (responnse) {
          var result = responnse.data;
          if (result.status === 200) {
            window.location.href = "admin/index";
          } else {
            alert("登录失败:" + result.msg);
          }
        },
        function (err) {
          alert("未知错误,请联系管理员!");
        }
      );
    },
  },
};
</script>

<style  scoped>
#login {
  margin-top: 20%;
}
</style>
