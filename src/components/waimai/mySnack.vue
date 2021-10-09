<template>
  <div class="mySnack">
    <div class="top">
      <div class="mesDv">
        <img :src="msg.url" alt="" />
        <div class="s-name">{{msg.name}}</div>
      </div>
    </div>
    <!-- 表格 -->
    <div class="tab">
      <ul>
        <li class="dd">
          <div class="liDv">
            <i class="iconfont icon-wodehongbao"></i>
            <div class="tit">美团红包</div>
          </div>
          <div>
            <i class="iconfont icon-jinrujiantou"></i>
          </div>
        </li>
        <li class="dd"  @click="go('/address')">
          <div class="liDv">
            <i class="iconfont icon-wxbdingwei"></i>
            <div class="tit">收货地址</div>
          </div>
          <div><i class="iconfont icon-jinrujiantou"></i></div>
        </li>
        <li class="dd">
          <div class="liDv">
            <i class="iconfont icon-Icon-wenti"></i>
            <div class="tit">常见问题</div>
          </div>
          <div>
            <i class="iconfont icon-jinrujiantou"></i>
          </div>
        </li>
        <li class="dd">
          <div class="liDv">
            <i class="iconfont icon-yonghuxieyi"></i>
            <div class="tit">美团协议与说明</div>
          </div>
          <div><i class="iconfont icon-jinrujiantou"></i></div>
        </li>
        <li class="dd">
          <div class="liDv">
            <i class="iconfont icon-tuichu"></i>
            <div class="tit">退出登录</div>
          </div>
          <div><i class="iconfont icon-jinrujiantou"></i></div>
        </li>
      </ul>
    </div>

    <!-- 客服电话 -->
    <div class="phone">
        客服电话：10109777
    </div>
    <p class="serve">服务时间：9:00-23:00</p>
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
  },
  methods:{
    go(path){
      this.$router.push(path)
    }
  }
};
</script>

<style scoped>
.mySnack{
    width: 100%;
    height: 100%;
    background-color: rgb(240, 239, 239);
}
.top {
  width: 100%;
  height: 180px;
  background: url(../../assets/img/bgSnack.png);
}
.top img {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}
.mesDv {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-top: 40px;
}
.s-name {
  color: #333;
  font-size: 15px;
  margin-top: 5px;
}
/* 表格 */
.tab{
    background-color: white;
}
.dd{
  display: flex;
  height: 45px;
  line-height: 45px;
  justify-content: space-between;
  border-bottom: 1px solid #e4e3e3;
}
.liDv{
    display: flex;
    margin-left: 20px;
}
.liDv .iconfont{
    font-size: 22px;
    color: #666;
}
.tab .icon-jinrujiantou {
  margin-right: 18px;
  font-size: 23px;
}
.tit{
    color: #333;
    font-size: 14px;
    margin-left: 10px;
}

.phone{
    margin-top: 20px;
    color: #ffb000;
    font-size: 15px;
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: white;
}
.serve{
    text-align: center;
    font-size: 12px;
    color: #666;
}
/* div:nth-child(2){} */
.liDv>.iconfont{
  font-size: 16px;
}
</style>
