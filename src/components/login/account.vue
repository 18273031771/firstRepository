<template>
  <div class="con">
    <!-- 顶部logo -->
    <div class="logo">
      <img src="../../assets/img/logo.png" alt="" />
    </div>

    <!-- 中间布局 -->
    <div class="mid">
      <div class="content">
        <div class="nation">中国 +86 ></div>

        <!-- 登录表格 -->
        <van-form @submit="onSubmit" class="a-form">
          <div style="display: flex">
            <van-field
              v-model="phoneYzm"
              name="phoneYzm"
              v-if="yzm"
              class="phone"
              placeholder="请输入手机号"
            /><span v-if="yzm" class="getYzm">获取验证码</span>
          </div>

          <van-field
            name="phone"
            v-if="account"
            v-model="phone"
            class="phone"
            placeholder="请输入手机号"
          />
          <van-field
            v-if="yzm"
            name="yzmLogin"
            v-model="yzmLogin"
            class="yzm"
            placeholder="请输入验证码"
          />
          <div style="display: flex">
            <van-field
              v-if="account"
              v-model="password"
              class="yzm"
              placeholder="请输入密码"
              name="password"
            /><span v-if="account" class="pas">忘记密码</span>
          </div>

          <van-button round block type="info" id="login" native-type="submit"
            >登录</van-button
          >
        </van-form>

        <p class="tips">未注册的手机号验证后自动创建美团账户</p>
        <div class="register">
          <router-link to="/register">
            立即注册
          </router-link>
        </div>

        <label for="">
          <input type="checkbox" class="checkbox" />
          <p class="recommend">
            我已阅读并同意<a href="">《美团用户协议》、《隐私政策》</a
            >,并授权美团使用该美团账号信息(如昵称,头像,收货地址)进行统一管理
          </p>
        </label>
      </div>
    </div>

    <!-- 底部登录切换 -->
    <div class="foot-l">
      <span class="tog" v-if="yzm" @click="togA">账号登录</span>
      <span class="tog" v-if="account" @click="togY">验证码登录</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: false,
      yzm: true,
      phoneYzm: "",
      phone: "",
      yzmLogin: "",
      password: "",
      obj:null
    };
  },
  methods: {
    togA() {
      this.account = true;
      this.yzm = false;
    },
    togY() {
      this.account = false;
      this.yzm = true;
    },
    async onSubmit(values) {
      const result = await this.$http.post("/api/login", {
        admin: values,
      });
      console.log(result);
      var token=result.data.token
      // console.log(result.data.message[0]);
      var obj=JSON.stringify(result.data.message[0]) 
      localStorage.setItem("obj",obj)
      if (result.data.status === 200) {
        alert(result.data.info);
        localStorage.setItem("token",token)
        this.$store.commit('setToken',token)
        this.$router.push({path:"/home",query:{obj:obj}})
      } else {
        alert(result.data.info);
      }
    },
  },
};
</script>

<style scoped>
.con {
  width: 100%;
  height: 100%;
  background-color: white;
}
.logo {
  width: 100%;
  height: 140px;
  text-align: center;
  line-height: 187px;
}
.logo img {
  width: 76px;
  height: 76px;
}
.mid {
  width: 100%;
  height: 360px;
}
.content {
  width: 88%;
  height: 100%;
  margin: 0 auto;
}
.nation {
  color: #414244;
  font-size: 16px;
}
.phone {
  width: 70%;
}
.yzm {
  width: 80%;
}
.getYzm {
  color: #333333;
  font-size: 16px;
  font-family: PingFangSC-Regular;
}
.pas {
  color: rgb(68, 67, 67);
  font-size: 15px;
}
#login {
  border-radius: 6px;
  margin-top: 10%;
  border: 0;
  margin-left: 5%;
  width: 90%;
  height: 40px;
  background-color: #ffe77b;
}
.tips {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-weight: 400;
}
.recommend {
  font-weight: 400;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
  width: 80%;
}
label {
  display: flex;
  justify-content: center;
}
.checkbox {
  margin-top: 30px;
}
.recommend a {
  color: #3488ff;
}
.foot-l {
  text-align: center;
}
.register{
  /* color: #3488ff; */
  font-size: 12px;
  text-align: center;
}
</style>