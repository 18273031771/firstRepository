<template>
  <div class="container">
    <!-- 顶部搜索 -->
    <topSearch/>

    <!-- goApp -->
    <goApp/>

    <!-- 中部导航 -->
    <div class="nav">
      <ul class="uls">
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #fd9d21"><i @click="go('/food')" class="iconfont icon-meishi"></i></div>
            <span>美食</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: rgb(246, 83, 83)"><i @click="go('/movies')" class="iconfont icon-dianying"></i></div>
            <span>猫眼电影</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #8a90fa"><i @click="go('/hotel')" class="iconfont icon-jiudian"></i></div>
            <span>酒店</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #fed030"><i class="iconfont icon-tubiaozhizuosvg-10"></i></div>
            <span>休闲娱乐</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div @click="go('/waimai')" class="img-B" style="backgroundColor: #fd9d21"><i class="iconfont icon-1_waimai-27"></i></div>
            <span>外卖</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #fed030"><i @click="go('/ktv')" class="iconfont icon-maikefeng"></i></div>
            <span>KTV</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #4dc6ee"><i @click="go('/tour')" class="iconfont icon-ziyuan4"></i></div>
            <span>周边游</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #ff80c2"><i class="iconfont icon-kouhong"></i></div>
            <span>丽人</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #ff80c2"><i class="iconfont icon-muying"></i></div>
            <span>母婴亲子</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #00d3be"><i class="iconfont icon-quanbufenlei"></i></div>
            <span>全部分类</span>
          </div>
        </li>
      </ul>
    </div>

<!-- 底部内容 -->
    <div class="footer">
      <div class="title">猜你喜欢</div>
      <div class="footerDv">
        <ul class="footerUl">
          <li v-for="(item,index) in contentList" :key="index">
            <div class="footerImg">
              <img :src="item.url" alt="">
            </div>
            <div class="footerCon">
              <p class="name">{{item.name}}</p>
              <p class="detail">{{item.youhui}}</p>
              <p class="price"><span class="nowPri">{{item.price}}</span><span class="rmb">元</span> <span class="ms">门市价：</span><span class="prePri">{{item.prePrice}}</span></p>
              <p class="numP">已售<span class="nums">{{item.saled}}</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import topSearch from '@/components/components/topSearch'
import goApp from '@/components/components/goApp'
// import indexAPI from '@/components/api/index.js'
export default {
  components:{
    topSearch,
    goApp
  },
  data(){
    return{
      contentList:[]
    }
  },
  mounted(){
    this.getContent()
  },
  methods:{
    go(food){
      // console.log(localStorage.getItem("token"));
      // console.log(this.$store.state.token);
      this.$router.push(food)
    },
    async getContent(){
      const result=await this.$http.get(`/api/indexs`);
      // const result=await  indexAPI.getStoreList()
      if(result.status==200){
        this.contentList=result.data.message
      }else if(result.status==400){
        console.log("首页数据请求失败");
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  height: 100%;
  background-color: rgb(240, 239, 239);
}
.top {
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #ffd000;
  position: relative;
}
.top1 {
  width: 10%;
  height: 100%;
  text-align: center;
  line-height: 40px;
}
.top2 {
  width: 70%;
  height: 90%;
  text-align: center;
  line-height: 40px;
  margin: auto 5%;
  display: flex;
  background-color: white;
  border-radius: 10px;
}
.top2 input {
  border: 0;
  height: 80%;
  width: 70%;
  margin: auto 0;
}
.top3 {
  width: 10%;
  height: 100%;
  text-align: center;
  line-height: 40px;
  position: absolute;
  right: 2%;
}

.icon-chazhao {
  font-size: 20px;
}
.searchIcon {
  width: 20%;
  height: 100%;
}
.nav {
  width: 100%;
  height: 200px;
  background-color: white;
}



.uls{
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  text-align: center;

}
.lis{
  width: 19%;
  height: 90px;
  list-style: none;
  margin: 5px auto;
}
.img-B{
  width: 65%;
  line-height: 46px;
  height: 46px;
  text-align: center;
  margin: 5px auto;
  border-radius: 50%;
}
.nav .uls .iconfont {
  font-size: 20px;
  color: white;
}
.uls .lis span {
  font-size: 14px;
  color: #666;
  position: relative;
  top: 6px;
}




.footer{
  width: 100%;
  height: 300px;
  margin-top: 20px;
  background-color: white;
}
.title{
  width: 95%;
  height: 30px;
  padding-left: 3%;
  padding-top: 2%;
  color: #333;
  font-size: 17px;
  border-bottom: 1px solid rgb(221, 216, 216);
}
.footerUl{
  width: 100%;
}
.footerUl li{
  width: 98%;
  margin: 0 auto;
  border-bottom: 1px solid rgb(228, 226, 226);
  /* margin-top: 1%; */
  height: 100px;
  list-style: none;
  display: flex;
  background-color: #fff;
}
.footerImg{
  width: 30%;
  height: 100%;
}
.footerImg img{
  width: 100%;
  height: 100%;
  margin-left: 5%;
}
.footerCon{
  width: 69%;
  height: 100%;
  position: relative;
}
.name{
  width: 90%;
  height: 20%;
  padding-left: 5%;
  color: #333;
  font-weight: 400;
  margin-top: 1%;
}
.detail{
  widows: 90%;
  height: 20%;
  color: #666;
  font-size: 12px;
  padding-left: 5%;
  margin-top: 4%;
}
.price{
  width: 90%;
  height: 40%;
  line-height: 150%;
  margin-top: 5%;
  padding-left: 5%;
}
.numP{
  position: absolute;
  right: 1%;
  bottom: 3%;
  color: #666;
  font-size: 13px;
}
.nowPri{
  color: #F60;
  font-size: 19px;
}
.rmb{
  color: #F60;
  font-size: 14px;
}
.prePri{
  color: #666;
  font-size: 12px;
}
.ms{
  color: #666;
  font-size: 12px;
  margin-left: 20px;
}
</style>