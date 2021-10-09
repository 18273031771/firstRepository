<template>
  <div class="order">
    <div class="nav">
      <div class="top1">
        <i class="iconfont icon-fanhui-" @click="go()"></i>
      </div>
      <div class="top2">我的订单</div>
    </div>

    <!-- 地址 -->
    <div class="address">
      <div style="width: 94%; margin: 0 auto">
        <div class="selAdr" style="padding-top: 15px">
          <div>
            <div v-if="this.address">
              <div
                style="margin-left: 15px; font-size: 16px; font-weight: bold"
              >
                <span>{{ this.address.addressDetail }}</span>
              </div>
              <div style="margin: 10px 15px; font-size: 15px">
                <span>{{ address.name }}</span>
                <span>{{ address.tel }}</span>
              </div>
            </div>
            <div
              v-else
              style="font-size: 16px; color: #ffb000; font-weight: 600"
            >
              选择收货地址
            </div>
            <div style="font-size: 13px; margin-top: 6px; color: #ff8000">
              为减少接触，降低风险，推荐使用无接触配送
            </div>
          </div>
          <div style="line-height: 35px">
            <i
              style="font-size: 20px"
              class="iconfont icon-jinrujiantou"
              @click="go('/address')"
            ></i>
          </div>
        </div>
        <div class="selTime" style="margin-top: 15px">
          <div style="font-size: 16px; font-weight: 600">立即送出</div>
          <div style="font-size: 14px">
            (大约{{ this.hour }}:{{ this.minu + 30 }}送达)
          </div>
        </div>
      </div>
    </div>

    <!-- 订单详情 -->
    <div class="orderDetail">
      <div class="orderCon">
        <div style="display: flex; height: 40px">
          <div class="orderImg">
            <img :src="orderObj.url" alt="" />
          </div>
          <div
            style="
              margin-left: 8px;
              font-size: 16px;
              margin: auto 8px auto;
              color: #666;
            "
          >
            {{ orderObj.name }}
          </div>
        </div>
        <!-- 订单表格 -->
        <div style="width: 100%">
          <ul style="width: 100%">
            <li class="orderLi" v-for="(item, index) in this.list" :key="index">
              <div style="display: flex">
                <div class="proImg">
                  <img :src="item.url" alt="" />
                </div>
                <div class="orderMid">
                  <div style="font-size: 14px; color: #333">
                    {{ item.name }}
                  </div>
                  <div style="font-size: 12px; color: #999">标准</div>
                  <div style="font-size: 12px; color: #999">
                    x{{ item.num }}
                  </div>
                </div>
              </div>

              <div style="line-height: 55px; font-size: 14px">
                ￥{{ item.price * item.num }}
              </div>
            </li>
          </ul>
          <div class="orderPs">
            <div style="font-size: 15px">配送费</div>
            <div>￥{{ orderObj.peisong }}</div>
          </div>
          <div class="litter">
            小计<span style="color: red; font-size: 14px; font-weight: 600"
              >￥{{ this.$route.query.allPrice }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="pay">
      <div class="payCon">
        <div>
          <div>支付方式</div>
          <div>在线支付</div>
        </div>
        <div>
          <div>餐具数量</div>
          <div style="display: flex">
            <div style="color: #34d195; font-size: 12px; line-height: 47px">
              选无需餐具，能量+10
            </div>
            <div style="color: #999; margin-left: 5px">必选</div>
            <i style="font-size: 20px" class="iconfont icon-jinrujiantou"></i>
          </div>
        </div>
        <div>
          <div>备注</div>
          <div style="display: flex">
            <div style="color: #999">推荐无接触配送</div>
            <i style="font-size: 20px" class="iconfont icon-jinrujiantou"></i>
          </div>
        </div>
        <div>
          <div>发票</div>
          <div>
            <van-switch size="20px" v-model="checked" />
          </div>
        </div>
      </div>
    </div>

    <!-- 底部提交 -->
    <div class="orderSub">
      <div style="display: flex; line-height: 50px; margin-left: 20px">
        <span>合计</span>
        <span style="font-weight: bold; color: red"
          >￥{{ this.$route.query.allPrice }}</span
        >
      </div>
      <div class="sub" @click="sub()">提交订单</div>
    </div>
  </div>
</template>

<script>
import { Switch } from "vant";
import { Toast } from "vant";
export default {
  data() {
    return {
      checked: false,
      orderObj: {},
      list: [],
      address: {},
      hour: null,
      minu: null,
      mouth: null,
      days: null,
      year: null,
    };
  },
  mounted() {
    this.orderMsg();
    this.orderList();
    this.getAddress();
    this.getTime();
  },
  methods: {
    go(path) {
      if (path) {
        this.$router.push(path);
      } else {
        this.$router.go(-1);
      }
    },
    async orderMsg() {
      const result = await this.$http.post("/api/orderMsg", {
        id: this.$route.query.id,
      });
      if (result.data.status == 200) {
        this.orderObj = result.data.message[0];
      }
    },
    async orderList() {
      const result = await this.$http.get("/api/shop");
      if (result.data.status == 200) {
        this.list = result.data.message;
      }
    },
    getAddress() {
      this.address = JSON.parse(localStorage.getItem("addressObj"));
    },
    getTime() {
      var nowT = new Date()
      this.year = nowT.toLocaleString();
      this.hour = nowT.getHours();
      this.minu = nowT.getMinutes();
    },
    async sub() {
      const result= await this.$http.post('/api/allOrder',{
        time:this.year,
        price:this.$route.query.allPrice,
        url:this.orderObj.url,
        name:this.orderObj.name
      })
      if(result.data.status==200){
        Toast("提交订单成功");
        this.$router.push("/allOrder")
      }
    },
  },
};
</script>

<style scoped>
.order {
  width: 100%;
  height: auto;
  background-color: rgb(243, 240, 240);
}
.nav {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #fff;
}
.top1 {
  float: left;
}
.top1 > .iconfont {
  font-size: 20px;
  display: block;
  margin-left: 10px;
  margin-top: 15px;
  color: #626161;
}
.top2 {
  color: #333;
  text-align: center;
  margin: auto auto;
  padding-right: 28px;
}
.address {
  width: 94%;
  height: auto;
  border-radius: 10px;
  margin: 10px auto;
  background-color: #fff;
  padding-bottom: 20px;
}
.selAdr,
.selTime {
  display: flex;
  justify-content: space-between;
}
.orderDetail {
  width: 94%;
  margin: 10px auto;
  /* height: auto; */
  background-color: #fff;
}
.orderCon {
  width: 95%;
  margin: 0 auto;
}
.orderImg {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: auto 0;
}
.orderImg img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
.orderLi {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.orderMid {
  margin-left: 10px;
}
.proImg {
  width: 55px;
  height: 55px;
}
.proImg img {
  width: 100%;
  height: 100%;
}
.orderPs {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-bottom: 2px dashed rgb(223, 222, 222);
}
.orderPs > div {
  line-height: 50px;
  font-size: 14px;
}
.litter {
  height: 45px;
  line-height: 45px;
  display: flex;
  justify-content: end;
  font-size: 15px;
  font-weight: 600;
}
.pay {
  width: 94%;
  margin: 15px auto;
  height: auto;
  background-color: #fff;
}
.payCon {
  width: 94%;
  margin: 0 auto;
}
.payCon > div {
  display: flex;
  justify-content: space-between;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid rgb(245, 242, 242);
  font-size: 15px;
}
.orderSub {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.sub {
  width: 125px;
  height: 50px;
  line-height: 50px;
  color: #333;
  font-weight: bold;
  font-size: 16px;
  background-color: #f8c74e;
  text-align: center;
}
</style>

