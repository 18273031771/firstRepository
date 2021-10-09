<template>
    <div class="container">
        <!-- 顶部搜索 -->
        <topSearch ref="search"/>

        <!-- 中间照片 -->
        <div class="mid">
            <img src="../../assets/img/meituan.png" alt="">
        </div>

    <!-- 中部导航 -->
    <div class="nav">
      <ul class="uls">
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #fd9d21"><i @click="go()" class="iconfont icon-meishi"></i></div>
            <span>火锅</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: rgb(246, 83, 83)"><i class="iconfont icon-dianying"></i></div>
            <span>甜点饮品</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #8a90fa"><i class="iconfont icon-jiudian"></i></div>
            <span>自助餐</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #fed030"><i class="iconfont icon-tubiaozhizuosvg-10"></i></div>
            <span>小吃快餐</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #fd9d21"><i class="iconfont icon-1_waimai-27"></i></div>
            <span>西餐</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #fed030"><i class="iconfont icon-maikefeng"></i></div>
            <span>烧烤烤肉</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #4dc6ee"><i class="iconfont icon-ziyuan4"></i></div>
            <span>香锅烤鱼</span>
          </div>
        </li>
        <li class="lis">
          <div class="index-li-div">
            <div class="img-B" style="backgroundColor: #ff80c2"><i class="iconfont icon-kouhong"></i></div>
            <span>海鲜</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- 底部美食搜索 -->
    <div class="foot">
        <div class="tag">
            <van-cell @click="showPopup">全部美食</van-cell>
            <van-cell @click="showPopup">附近商家</van-cell>
            <van-cell @click="showPopup">智能排序</van-cell>
            <van-cell @click="showPopup">筛选</van-cell>
        </div>

        <!-- 弹框内容 -->
        <van-popup v-model="show" position="top" :style="{ height: '70%' }">
            <!-- 顶部搜索 -->
            <topSearch/>
            <!-- 下拉搜索 -->
            <drop-down/>

        </van-popup>
    </div>

    <!-- 底部店家 -->
    <food-store />


    </div>
</template>

<script>
import topSearch from '@/components/components/topSearch1'
import DropDown from '../components/dropDown.vue';
import FoodStore from '../components/foodStore.vue';
export default {
  components:{
    topSearch,
    DropDown,
    FoodStore
  },
  data(){
      return{
          show: false,
      }
  },
  mounted(){
    this.$refs.search.goSearch()
  },
  methods:{
    showPopup() {
      this.show = true;
    },
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: rgb(236, 235, 235);
}
.mid{
    width: 100%;
    height: 120px;
}
.mid img{
    width: 100%;
    height: 100%;
}

/* 中间商标 */
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
  width: 24%;
  height: 90px;
  list-style: none;
  margin: 5px auto;
}
.img-B{
  width: 60%;
  line-height: 50px;
  height: 50px;
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

/* 底部美食 */
.tag{
    display: flex;
    margin-top: 10px;
    width: 100%;
    border-bottom: 1px solid rgb(223, 220, 220);
}
</style>