<template>
  <div class="container">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item  class="iconfont icon-dianying" to="/movies"
        ><span>电影</span></van-tabbar-item
      >
      <van-tabbar-item class="iconfont icon-jiudian" to="/cinema"
        ><span>影院</span></van-tabbar-item
      >
      <van-tabbar-item class="iconfont icon-wode" @click="change()"
        ><span>我的</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      active: 0,
    };
  },
    mounted(){
      this.getTab()
    },
  methods:{
    change(){
      var token=localStorage.getItem("token")
      if(token){
        this.$router.push("/myMovies")
      }else{
        this.$router.push("/mine")
      }
    },
    onChange(){
    },
    getTab(){
      // console.log(this.active);
      // if(this.active===0){
      //   this.$router.push("/movies")
      // }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.iconfont {
  font-size: 20px;
}
.iconfont span {
  font-size: 12px;
  position: relative;
  bottom: 3px;
}
</style>