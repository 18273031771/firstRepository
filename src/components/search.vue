<template>
  <div class="search">
    <div class="top">
      <div style="margin-left: 5px">
        <i class="iconfont icon-fanhui-" @click="go('/index')"></i>
      </div>
      <div style="font-size: 17px">搜索</div>
      <div class="third" style="margin-right: 15px">
        <i class="iconfont icon-1" @click="go('/index')"></i>
      </div>
    </div>
    <!-- goApp -->
    <goApp />

    <!-- mid搜索 -->
    <div class="midSearch">
      <div class="top2">
        <div class="searchIcon"><i class="iconfont icon-chazhao"></i></div>
        <input type="text" class="ipt" placeholder="请输入商家名或者品类名" v-model="content" />
      </div>
      <input type="button" value="搜索" class="btn" @click="search()" />
    </div>
    <div class="box"></div>

    <div class="searchF">
      <div class="searchDv">
        <ul>
          <li>周边热门</li>
          <li>|</li>
          <li>自助餐</li>
          <li>|</li>
          <li>酒店</li>
          <li>|</li>
          <li>电影</li>
          <li>火锅</li>
          <li>|</li>
          <li>烤肉</li>
          <li>|</li>
          <li>KTV</li>
          <li>|</li>
          <li>运动健身</li>
          <li>游泳</li>
          <li>|</li>
          <li>西餐</li>
          <li>|</li>
          <li>美容美体</li>
          <li>|</li>
          <li>日韩料理</li>
        </ul>
      </div>
    </div>

    <!-- footer -->
    <footer-bot/>

  </div>
</template>

<script>
import goApp from "./components/goApp.vue";
import footerBot from "./components/footerBot.vue";
export default {
  components: {
    goApp,
    footerBot
  },
  data(){
    return{
      content:null
    }
  },
  mounted(){
    this.iptFocus()
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    iptFocus(){
      var ipt=document.getElementsByClassName("ipt")[0]
      var box=document.getElementsByClassName("box")[0]
      ipt.onfocus=function(){
        box.style.height="200px"
      }
      ipt.onblur=function(){
        box.style.height="0px"
      }
      ipt.onchange=function(){
      }
    },
    search(){
      this.$router.push({path:"/searchResult",query:{name:this.content}})
    }
  },
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 100%;
  background-color: rgb(240, 240, 240);
}
.top {
  display: flex;
  justify-content: space-between;
  background-color: rgb(250, 199, 59);
  width: 100%;
  height: 50px;
}
.top div {
  margin: auto 0;
}
.top .iconfont {
  font-size: 20px;
}
.midSearch {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  background-color: rgb(240, 240, 240);
}
.ipt {
  width: 88%;
  height: 35px;
  border: 1px solid rgb(241, 241, 241);
  border-radius: 5px;
}
.searchIcon {
  width: 12%;
  height: 100%;
  text-align: center;
  line-height: 35px;
  background-color: white;
}
.btn {
  border: 0;
  width: 16%;
  height: 35px;
  border-radius: 5px;
  background-color: #ffd000;
}
.top2 {
  width: 70%;
  height: 38px;
  display: flex;
}

.searchF {
  width: 100%;
  height: 220px;
  background-color: white;
}
.searchF ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.searchDv {
  width: 95%;
  margin: 0 auto;
}
.searchF li {
  /* border: 1px solid red; */
  font-size: 12px;
  line-height: 20px;
  width: 14%;
  /* border: 1px solid red; */
  text-align: center;
  margin-top: 18px;
  color: #333;
  height: 25px;
  border-bottom: 1px solid rgb(226, 224, 224);
  /* border: 1px solid red; */
}
</style>
