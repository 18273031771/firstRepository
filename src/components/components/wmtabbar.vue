<template>
  <div class="container">
    <!-- <div class="tab">
            <img src="" alt="">
            <span></span>
        </div> -->
    <van-tabbar v-model="active">
      <van-tabbar-item class="iconfont icon-1" to="/waimai"
        ><span>首页</span></van-tabbar-item
      >
      <van-tabbar-item class="iconfont icon-quanbudingdan" to="/wmOrder"
        ><span>订单</span></van-tabbar-item
      >
      <van-tabbar-item class="iconfont icon-meituan" @click="change()"
        ><span>我的</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home",
    };
  },
  methods: {
    change() {
      var token = localStorage.getItem("token");
      if (token) {
        this.$router.push("/mySnack");
      } else {
        this.$router.push("/account");
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.iconfont {
  font-size: 20px;
}
.iconfont span {
  font-size: 12px;
  position: relative;
  bottom: 3px;
}
</style>