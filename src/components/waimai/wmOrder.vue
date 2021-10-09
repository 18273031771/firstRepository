<template>
  <div class="wmOrder">
    <ul class="orderUl">
      <li class="orderLi" v-for="(item,index) in orderList" :key="index">
        <div class="order">
          <div class="top">
            <div>
              <div class="storeImg">
                <img :src="item.url" alt="" />
              </div>
              <div class="storeName">{{item.storeName}}</div>
            </div>
            <div style="margin: auto 0;font-size:18px"><i class="iconfont icon-jinrujiantou"></i></div>
          </div>
          <div class="mid">
            <div class="mid1">
              <p class="orderCon">{{item.content}}</p>
              <p class="orderNum">x{{item.count}}</p>
            </div>
            <div class="mid2">
              <div class="orderTime">{{item.buyTime}}</div>
              <div class="orderPrice">实付￥{{item.price}}</div>
            </div>
          </div>
          <div class="bot">
            <div class="status">已完成</div>
            <div class="btn">
              <button class="del">删除</button>
              <button class="again">再来一单</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            orderList:[]
        }
    },
    mounted(){
        this.getOrderList()
    },
    methods:{
        async getOrderList(){
            const result= await this.$http.get(`/api/orderList`)
            if(result.data.status==200){
                this.orderList=result.data.message
            }
        }
    }
};
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
.wmOrder {
    width: 100%;
    height: 100%;
  background-color: rgb(240, 239, 239);
}
.orderLi {
  background-color: white;
  margin-top: 10px;
  /* border-bottom: 20px; */
}
.order{
    width: 90%;
    margin: 0 auto;
}
.top {
  display: flex;
  height: 40px;
  justify-content: space-between;
}
.top > div {
  display: flex;
}
.storeImg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: auto 0;
}
.storeImg img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.storeName {
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: normal;
  margin: auto 0;
}
.mid{
    border-top: 1px solid rgb(241, 239, 239);
    border-bottom: 1px solid rgb(241, 239, 239);
}
.mid1,.mid2 {
  display: flex;
  justify-content: space-between;
}
.mid1>p{
    height: 25px;
    line-height: 25px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.orderTime{
    font-size: 12px;
    color: #999999;
}
.orderPrice,.orderCon{
    font-size: 14px;
    color: #000;
}
.bot {
  display: flex;
  justify-content: space-between;
  height: 45px;
  margin-top: 8px;
}
.status{
    margin: auto 0;
    color: #999;
}
.btn{
    margin: auto 0;
    font-size: 14px;
}
.del {
  width: 50px;
  height: 30px;
  border: 0;
}
.again {
  width: 80px;
  height: 28px;
  border: 0;
  background-color: #ffd161;
}
</style>