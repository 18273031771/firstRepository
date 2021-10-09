<template>
  <div>
    <!-- 顶部 -->
    <div class="top">
      <div style="margin-left: 5px">
        <i class="iconfont icon-fanhui-" @click="go('/home')"></i>
      </div>
      <div style="margin-left: 20px; font-size: 17px">全部订单</div>
      <div class="third" style="margin-right: 5px">
        <i class="iconfont icon-1" @click="go('/index')"></i>
      </div>
    </div>

    <van-tabs v-model="active" line-width="50px">
      <van-tab title="全部">
        <all-order />
      </van-tab>
      <van-tab title="待付款">内容 2</van-tab>
      <van-tab title="待使用">内容 3</van-tab>
      <van-tab title="待评价">内容 4</van-tab>
      <van-tab title="退款/售后">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import allOrder from "../components/allOrder.vue";
export default {
  components: { allOrder },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #f1f0f0;
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
.van-tab {
  width: 12%;
}
</style>
