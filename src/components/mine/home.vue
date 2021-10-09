<template>
  <div class="home">
    <div class="top">
      <div style="margin-left: 5px">
        <i class="iconfont icon-fanhui-" @click="go('/index')"></i>
      </div>
      <div style="margin-left: 20px; font-size: 17px">我的美团</div>
      <div class="third" style="margin-right: 5px">
        <i class="iconfont icon-1" @click="go('/index')"></i>
        <i class="iconfont icon-chazhao"></i>
      </div>
    </div>

    <!-- mid -->
    <div class="mid">
      <div class="container">
        <div class="msgInfo">
          <div class="msgImg">
            <img :src="msg.url" alt="" />
          </div>
          <div style="margin: auto 0; margin-left: 20px">
            <div class="name">{{msg.name}}</div>
            <div class="money">
              账号余额：<span style="color: #ff9712">0</span>元
            </div>
          </div>
        </div>
        <div style="margin: auto 0">
          <i class="iconfont icon-jinrujiantou" @click="go('/mes')"></i>
        </div>
      </div>
    </div>

    <!-- 订单 -->
    <div class="order">
      <div class="orderTop">
        <div style="display: flex; margin: auto 0">
          <div class="icon-order"><i class="iconfont icon-quanbudingdan"></i></div>
          <div style="margin: auto 0; padding-left: 10px; font-size: 14px" @click="go('/allOrder')">
            全部订单
          </div>
        </div>
        <div style="margin: auto 0"><i class="iconfont icon-jinrujiantou"></i></div>
      </div>
      <hr />
      <div class="orderBot">
        <div>
          <i class="iconfont icon-daifukuan"></i>
          <div>待付款</div>
        </div>
        <div>
          <i class="iconfont icon-dingdandaifukuan"></i>
          <div>待使用</div>
        </div>
        <div>
          <i class="iconfont icon-daipingjia20"></i>
          <div>待评价</div>
        </div>
        <div>
          <i class="iconfont icon-shouhoutuikuan"></i>
          <div>退款/售后</div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="tab">
      <ul>
        <li class="dd">
          <div style="display: flex; margin: auto 0">
            <div style="background-color: #0092de" class="icons">
              <i class="iconfont icon-shoucang"></i>
            </div>
            <div class="tit">我的收藏</div>
          </div>
          <div><i class="iconfont icon-jinrujiantou"></i></div>
        </li>
        <li class="dd">
          <div style="display: flex">
            <div style="background-color: #eb2c00" class="icons">
              <i class="iconfont icon-daishiyong"></i>
            </div>
            <div class="tit">我的抵用券</div>
          </div>
          <div><i class="iconfont icon-jinrujiantou"></i></div>
        </li>
        <li class="dd">
          <div style="display: flex">
            <div style="background-color: #f5b345" class="icons">
              <i class="iconfont icon-liwulipin"></i>
            </div>
            <div class="tit">我的抽奖单</div>
          </div>
          <div><i class="iconfont icon-jinrujiantou"></i></div>
        </li>
        <li class="dd">
          <div style="display: flex">
            <div style="background-color: purple" class="icons">
              <i class="iconfont icon-jifen"></i>
            </div>
            <div class="tit">积分换礼品</div>
          </div>
          <div><i class="iconfont icon-jinrujiantou"></i></div>
        </li>
      </ul>
      <!-- foot -->
      <footer-bot/>
    </div>
  </div>
</template>


<script>
import FooterBot from '../components/footerBot.vue';
export default {
  components:{
    FooterBot
  },
  data() {
    return {
      msg:{}
    };
  },
  mounted() {
    this.msg=JSON.parse(localStorage.getItem("obj")) 
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
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

.mid {
  width: 100%;
  height: 80px;
  background: url(../../assets/img/bgs.png) no-repeat;
  background-size: 100% 100%;
}
.mid .icon-jinrujiantou{
  font-size: 18px;
}
.container {
  width: 92%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.msgImg {
  width: 60px;
  height: 60px;
}
.msgImg img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.msgInfo {
  display: flex;
  margin: auto 0;
  margin-left: 15px;
}
.money {
  color: #666666;
  font-size: 12px;
  margin-top: 12%;
}
.name {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #333333;
}
.order {
  width: 100%;
  height: 130px;
  background-color: white;
  margin-top: 15px;
  border-top: 1px solid #e7e5e5;
  border-bottom: 1px solid #e2e0e0;
}
.icon-order {
  width: 25px;
  height: 30px;
  background-color: #fe8c00;
  text-align: center;
  line-height: 30px;
}
.icon-order .iconfont {
  color: white;
}
.orderTop {
  width: 92%;
  margin: auto auto;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.orderTop .icon-jinrujiantou{
  font-size: 23px;
}
.orderBot {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}
.orderBot > div {
  text-align: center;
}
.orderBot .iconfont {
  font-size: 30px;
  color: #666666;
}
.orderBot > div > div {
  color: #333333;
  font-size: 14px;
  margin-top: 5px;
}
.tab {
  margin-top: 25px;
  background-color: white;
  border-top: #eeecec;
  border-bottom: #eeecec;
}
.dd {
  display: flex;
  height: 50px;
  line-height: 50px;
  justify-content: space-between;
  border-bottom: 1px solid #e4e3e3;
}
.icons {
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  margin: auto 0;
  color: white;
  margin-left: 15px;
}
.tit {
  color: #333333;
  font-size: 15px;
  margin-left: 15px;
}
.tab .icon-jinrujiantou {
  margin-right: 15px;
  font-size: 20px;
}

</style>

