<template>
  <div class="container">
    <!-- <div class="tab">
            <img src="" alt="">
            <span></span>
        </div> -->
    <van-tabbar v-model="active">
      <van-tabbar-item class="iconfont icon-1" to="/index"
        ><span>首页</span></van-tabbar-item
      >
      <van-tabbar-item class="iconfont icon-shangpin" to="/goods"
        ><span>商品</span></van-tabbar-item
      >
      <van-tabbar-item class="iconfont icon-shop" to="/shopCar"
        ><span>购物车</span></van-tabbar-item
      >
      <van-tabbar-item class="iconfont icon-wode" to="/mine"
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