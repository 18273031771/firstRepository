<template>
  <div class="all">
    <div class="allDv">
      <ul>
        <li v-for="(item,index) in this.orderList" :key="index">
          <div style="display: flex">
            <div style="width: 80px; height: 90px">
              <img class="imgs" :src="item.url" alt="" />
            </div>
            <div class="detail">
              <div style="color: #333; margin-bottom: 8px">{{item.name}}</div>
              <div style="font-size: 13px; color: #666">下单时间:{{item.ordertime}}</div>
              <div style="font-size: 13px; color: #666">总价：{{item.price}}</div>
            </div>
          </div>
          <div style="line-height:80px;font-size: 12px; color: #666">
            已完成
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [],
    };
  },
  mounted() {
    this.getOrderMsg();
  },
  methods: {
    async getOrderMsg() {
        const result= await this.$http.get('/api/getAllOrder');
        if(result.data.status==200){
            this.orderList=result.data.message
        }
    },
  },
};
</script>

<style scoped>
.all {
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
}
.allDv {
  width: 95%;
  margin: 0 auto;
}
.imgs {
  width: 50px;
  height: 50px;
  margin: 10px 10px;
}
.detail {
  margin-top: 10px;
  margin-left: -10px;
}
li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(226, 226, 226);
}
</style>
