<template>
  <!-- 顶部搜索 -->
  <div class="top">
    <div class="top1">
      <i class="iconfont icon-fanhui-" @click="go('/index')"></i>
    </div>
    <div class="top2">
      <div class="searchIcon"><i class="iconfont icon-chazhao"></i></div>
      <input type="text" @click="go('/search')" placeholder="请输入商家名或者品类名" />
    </div>
    <div class="top3">
      <i @click="go('/account')" class="iconfont icon-wode"></i>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  mounted(){
  },
  methods:{
    go(path){
      var token=localStorage.getItem("token")
      if(path==='/account'){
        if(token){
          this.$router.push('/home')
        }else{
          this.$router.push(path)
        }
      }else{
        this.$router.push(path)
      }
    }
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 45px;
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
  height: 70%;
  text-align: center;
  line-height: 40px;
  margin: auto 5%;
  display: flex;
  background-color: white;
  border-radius: 10px;
}
.top2 input {
  border: 0;
  height: 75%;
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
  font-size: 18px;
  line-height: 35px;
  position: absolute;
  top: -2%;
}
.searchIcon {
  width: 20%;
  height: 100%;
  position: relative;
}
</style>