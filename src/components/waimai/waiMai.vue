<template>
  <div class="con">
    <div class="w-top">
      <div class="w-top1">定位</div>
      <div class="w-top2">
        <input @click="go('/search')" type="text" placeholder="请输入商家或商品名称" />
      </div>
    </div>

    <!-- 中部导航 -->
    <div class="nav">
      <ul class="uls">
        <li class="lis" v-for="(item,index) in navList" :key="index">
          <div class="index-li-div">
            <div class="img-B">
              <img :src="item.url" alt="">
            </div>
            <span>{{item.name}}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="mid">附近商家</div>

    <drop-down />

    <!-- 外卖商家 -->

    <div class="wm-f">
      <div>
        <ul class="wm-ul">
          <li class="wm-li" v-for="(item,index) in wmStoreList" :key="index" @click="go('/menu',item.id)">
            <div class="li-dv">
              <div class="dv-img"><img :src="item.url" alt=""></div>
              <div class="rg">
                <div class="wm-name">{{item.name}}</div>
                <div class="wm-sec">
                  <van-rate color="#FF4B10" size="13px" v-model="item.rate" readonly allow-half void-icon="star" void-color="#eee" />
                  <span>{{item.rate}}</span>
                  <div style="padding-right:20px">月售<span>{{item.sale}}</span></div>
                  <div class="dis">{{item.distance}}</div>
                </div>
                <div class="wm-third">
                  <div>起送￥<span>{{item.qisong}}</span></div>
                  <div>配送￥<span>{{item.peisong}}</span></div>
                  <div>人均￥<span>{{item.renjun}}</span></div>
                </div>
                <div class="wm-zk">
                  <div v-if="item.manjian" style="border:1px solid #FF4A26"> {{item.manjian}}</div>
                  <div v-if="item.zhekou" style="border:1px solid #FF4A26;margin-left:10px"> {{item.zhekou}}</div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dropDown from '../components/dropDown.vue'
export default {
    components:{
        dropDown
    },
    data(){
        return{
            navList:null,
            wmStoreList:null
        }
    },
    mounted(){
        this.getNavList()
        this.getStoreList()
    },
    methods:{
        async getNavList(){
            const result= await this.$http.get(`/api/navList`)
            if(result.data.status==200){
                this.navList=result.data.message
            }
        },
        async getStoreList(){
            const result= await this.$http.get(`/api/wmList`)
            if(result.data.status==200){
                this.wmStoreList=result.data.message
            }
        },
        go(path,id){
          this.$router.push({path:path,query:{id:id}})
          localStorage.setItem("carList",JSON.stringify([]))
        }
    }
};
</script>

<style scoped>
.con{
  background-color: #fff;
}
.w-top {
  width: 100%;
  height: 80px;
  background-color: #ffcc33;
  padding-top: 8px;
}
.w-top2 input {
  display: block;
  width: 90%;
  margin: 10px auto;
  border-radius: 18px;
  height: 24px;
  border: 0;
}


/* 中间商标 */
.nav {
  width: 100%;
  height: 188px;
  background-color: white;
  margin-top: 15px;
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
  margin: 0px auto;
  /* border: 1px solid red; */
}
.img-B{
  width: 60%;
  height: 40px;
  margin: 5px auto;
  /* border: 1px solid red; */
}
.img-B img{
    width: 100%;
    height: 100%;
}
.uls .lis span {
  font-size: 14px;
  color: #666;
  position: relative;
  top: 6px;
}
.mid{
    color: #222426;
    font-size: 17px;
    margin-bottom: 8px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-left: 15px;
}


/* 外卖商家 */
.wm-f{
  width: 100%;
  padding-bottom: 80px;
  background-color: #fff;
}
.wm-ul{
  width: 100%;
}
.wm-li{
  width: 100%;
  list-style: none;
  margin-top: 10px;
  margin-bottom: 15px;
}
.li-dv{
  width: 96%;
  margin: 0 auto;
  display: flex;
  height: 80%;
}
.dv-img{
  width: 25%;
  /* height: 100%; */
}
.dv-img img{
  width: 100%;
  height: 78%;
}
.rg{
  width: 70%;
  padding-left: 8px;
}
.rg>div{
  margin-top: 3%;
}
.wm-name{
  color: rgb(19, 19, 19);
  font-size: 16px;
  text-overflow: ellipsis;
  flex-wrap: nowrap;
  overflow: hidden;
}
.wm-sec{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #333;
}
.wm-third{
  display: flex;
  font-size: 12px;
  color: #333;
}
.wm-zk{
  display: flex;
  font-size: 12px;
  color: #FF4A26;
}
</style>