<template>
  <div class="myMovies">
    <div class="title">我的</div>
    <div class="top">
      <div><img :src="msg.url" alt="" /></div>
    </div>
    <div class="film">
      <p>我的订单</p>
      <div class="filmIcon">
        <div>
          <div class="bgsIcon"><i class="iconfont icon-dianying"></i></div>
          <div class="words">电影</div>
        </div>
        <div>
          <div style="backgroundcolor: #00d3be" class="bgsIcon">
            <i class="iconfont icon-tubiaozhizuosvg-10"></i>
          </div>
          <div class="words">商城</div>
        </div>
      </div>
    </div>

    <div class="tab">
      <van-cell class="tab1" is-link >优惠券</van-cell>
      <van-cell class="tab1" is-link >折扣卡</van-cell>
    </div>
    <van-cell class="entire" is-link >退出账户</van-cell>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:{}
    }
  },
  mounted(){
    this.msg=JSON.parse(localStorage.getItem("obj"))
  }
};
</script>

<style scoped>
.myMovies {
  width: 100%;
  height: 100%;
  background-color: rgb(243, 241, 241);
}
.top {
  width: 100%;
  height: 160px;
  background-color: #f03d37;
}
.title {
  width: 100%;
  height: 40px;
  color: white;
  text-align: center;
  line-height: 40px;
  background-color: #da0505;
  font-size: 20px;
}
.top img {
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.top > div {
  width: 70px;
  height: 70px;
  padding-top: 35px;
  margin: auto auto;
}
.film {
  width: 100%;
  height: 150px;
  background-color: white;
  margin-top: 15px;
}
.film > p {
  color: #333;
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
}
.filmIcon {
  display: flex;
  justify-content: space-around;
}
.bgsIcon {
  width: 45px;
  height: 45px;
  line-height: 45px;
  color: white;
  text-align: center;
  background-color: rgb(246, 83, 83);
  border-radius: 50%;
}
.words {
  text-align: center;
  font-size: 15px;
  color: #333;
  margin-top: 10px;
}
.tab {
  background-color: white;
  margin-top: 15px;
}
.dd {
  height: 45px;

}
.lis{
    width: 92%;
    margin: 0 auto;
  line-height: 45px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e3e3;
}
.liDv{
    color: #333;
    font-size: 15px;
}
.tab>.tab1{
  border-bottom: 1px solid rgb(236, 234, 234);
}
.entire{
  margin-top: 15px;
}
.van-cell__value--alone{
  /* margin-top: 20px; */
  font-size: 16px;
}
</style>

