<template>
  <div>
    <div class="topMine">
      <i class="iconfont icon-fanhui-"></i>
      <p class="navName">猫眼电影</p>
    </div>

    <!-- 登录切换按钮 -->
    <div class="toggle">
      <div class="twos">
        <ul class="toggleUl">
          <li class="spt">美团账号登录</li>
          <li>手机验证登录</li>
        </ul>
      </div>
    </div>
    <!-- 登录切换面板 -->
    <div class="togglePale">
      <form action="" class="form">
        <div>
          <input type="text" placeholder="账户名/手机号/Email" />
        </div>
        <div>
          <input type="text" placeholder="请输入您的密码" />
        </div>
        <input type="submit" class="submit" />
      </form>
    </div>

    <div class="togglePale2">
      <van-form>
        <!-- 通过 validator 进行函数校验 -->
        <div class="getPhone">
          <van-field
            style="width:65%;"
            v-model="value2"
            name="validator"
            placeholder="请输入手机号"
            :rules="[{ validator}]"
            trigger="onBlur"
          />
          <button :disabled="flag" class="btn">发送验证码</button>
        </div>
        <van-field
          v-model="value1"
          placeholder="请输入短信验证码"
        />
        <div style="margin: 16px">
          <input type="submit" class="btn2" :disabled="flag2" />
        </div>
      </van-form>
    </div>

    <div class="login">
      <div>立即注册</div>
      <div>找回密码</div>
    </div>
    <div class="phone">
      © 猫眼电影 客服电话：<span class="call">400-670-5335</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1:"",
      value2:"",
      flag:false,
      flag2:false
    };
  },
  mounted() {
    this.getLiDom();
  },
  methods: {
    getLiDom() {
      var lis = document.getElementsByClassName("toggleUl")[0].children;
      for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
          if (lis[1].className === "spt") {
            this.nextElementSibling.setAttribute("class", "");
            this.setAttribute("class", "spt");
            document.getElementsByClassName("togglePale")[0].style.display="block"
            document.getElementsByClassName("togglePale2")[0].style.display="none"
          } else if (lis[0].className === "spt") {
            this.previousElementSibling.setAttribute("class", "");
            this.setAttribute("class", "spt");
            document.getElementsByClassName("togglePale")[0].style.display="none"
            document.getElementsByClassName("togglePale2")[0].style.display="block"
          }
        };
      }
    },
    validator(val) {
      if(/^1[3|4|5|7|8][0-9]{9}$/.test(val)==true){
        this.getPhone()
      }else{
        this.flag=false
        this.flag2=false
      }
    },
    getPhone(){
      this.flag=true
      this.flag2=true
      var btn=document.getElementsByClassName("btn")[0]
      var btn2=document.getElementsByClassName("btn2")[0]
      btn.style.border="1px solid red"
      btn.style.backgroundColor="white"
      btn.style.color="red"
      btn2.style.backgroundColor="#df2d2d"
      btn2.style.color="white"
    }

  },
};
</script>

<style scoped>
.topMine {
  width: 100%;
  height: 50px;
  background-color: #df2d2d;
  display: flex;
}
.topMine .iconfont {
  font-size: 20px;
  color: white;
  margin: auto 0;
  padding-left: 10px;
}
.navName {
  color: white;
  margin: auto auto;
  font-size: 18px;
  padding-right: 10px;
}
.toggle {
  width: 100%;
  border-bottom: 5px solid rgb(216, 215, 215);
  margin-top: 18px;
}
.twos {
  width: 80%;
  margin: 10px auto;
}
.toggleUl {
  width: 100%;
  margin: 0 auto;
  display: flex;
}
.toggleUl li {
  list-style: none;
  float: left;
  width: 50%;
  text-align: center;
  color: #222222;
  margin: -15px auto;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 13px;
  /* width: 80%; */
}

.spt {
  border-bottom: 5px solid #ffc300;
}

.togglePale div {
  height: 30px;
  width: 100%;
  border-bottom: 1px solid rgb(226, 225, 225);
}

.form > div > input {
  padding-top: 6px;
  display: block;
  width: 90%;
  margin: 0 auto;
  border: 0;
  margin-top: 3%;
}
.submit {
  display: block;
  width: 96%;
  margin: 15px auto;
  border: 0;
  background-color: #df2d2d;
  color: white;
  height: 30px;
  border-radius: 5px;
}
.login {
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin: 0 auto;
}
.login > div {
  font-size: 14px;
  color: #fe8c00;
}
.phone {
  text-align: center;
  color: #333333;
  font-size: 14px;
  margin-top: 5px;
}
.phone > .call {
  color: #df2d2d;
}
.togglePale2{
  display: none;
}
.btn2{
  display: block;
  background-color: #DCDCDC;
  border: 0;
  color: #999999;
  height: 30px;
  border-radius: 5px;
  width: 100%;
  margin: 15px auto;
}
.getPhone{
  display: flex;
}
.btn{
  border: 0;
  background-color: #DCDCDC;
  margin-left: 5%;
  border-radius: 3px;
  height: 30px;
  margin-top: auto;
  font-size: 13px;
  color: #999999;
}
</style>