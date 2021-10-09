<template>
  <div class="mes">
    <!-- 顶部标签 -->
    <div class="top">
      <div style="margin-left: 5px">
        <i class="iconfont icon-fanhui-" @click="go('/home')"></i>
      </div>
      <div>我的账户</div>
      <div class="third" style="margin-right: 5px">
        <i class="iconfont icon-caidan"></i>
      </div>
    </div>

    <!-- 表格 -->
    <div class="tab">
      <ul>
        <li class="dd">
          <div class="liDv">
            <i class="iconfont icon-wode"></i>
            <div class="tit">{{msg.name}}</div>
          </div>
          <div>
            <span style="font-size: 12px; color: #666" @click="go('/editUserName')">修改</span
            ><i class="iconfont icon-jinrujiantou"></i>
          </div>
        </li>
        <li class="dd">
          <div class="liDv">
            <i class="iconfont icon-mima"></i>
            <div class="tit">修改登录密码</div>
          </div>
          <div><i class="iconfont icon-jinrujiantou"></i></div>
        </li>
        <li class="dd">
          <div class="liDv">
            <i class="iconfont icon-shouji"></i>
            <div class="tit">已绑定手机号</div>
          </div>
          <div>
            <span style="font-size: 12px; color: #666">修改</span
            ><i class="iconfont icon-jinrujiantou"></i>
          </div>
        </li>
        <li class="dd">
          <div class="liDv" @click="go('/address')">
            <i class="iconfont icon-huoche_delivergoods"></i>
            <div class="tit">收货地址管理</div>
          </div>
          <div><i class="iconfont icon-jinrujiantou"></i></div>
        </li>
      </ul>
      <button class="btn" @click="entire()">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:{}
    };
  },
  mounted() {
    this.msg=JSON.parse(localStorage.getItem("obj"));
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    entire() {
      if (confirm("您确定要退出吗？")) {
        localStorage.removeItem("token");
        localStorage.removeItem("obj");
        alert("成功");
        this.$router.push("/index");
      }
    },
  },
};
</script>

<style scoped>
.mes {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.top {
  display: flex;
  justify-content: space-between;
  background-color: rgb(250, 199, 59);
  width: 100%;
  height: 50px;
}
.top div {
  margin: auto 0;
}
.top .iconfont {
  font-size: 20px;
}
.third i {
  padding-right: 10px;
}
.dd {
  display: flex;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
  border-bottom: 1px solid #e4e3e3;
}
.liDv {
  display: flex;
  margin-left: 20px;
}
.liDv .iconfont {
  font-size: 22px;
  color: #666;
}
.tab .icon-jinrujiantou {
  margin-right: 10px;
  font-size: 20px;
}
.tit {
  color: #333;
  font-size: 14px;
  margin-left: 15px;
}
.btn {
  display: block;
  width: 94%;
  height: 40px;
  margin: 20px auto;
  color: white;
  border: 0;
  border-radius: 6px;
  background-color: #f97150;
  font-size: 15px;
}
</style>
