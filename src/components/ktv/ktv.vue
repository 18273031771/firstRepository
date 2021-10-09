<template>
  <div class="con">
    <div class="top">
      <div style="margin-left: 5px">
        <i class="iconfont icon-fanhui-" @click="go('/index')"></i>
      </div>
      <div style="margin-left: 20px; font-size: 17px">分类</div>
      <div class="third" style="margin-right: 5px">
        <i class="iconfont icon-wode" @click="go('/account')"></i>
        <i class="iconfont icon-chazhao" @click="go('/search')"></i>
      </div>
    </div>

    <!-- goApp -->
    <goApp/>

    <!-- 下拉框 -->
    <drop-down />

    <div class="ktvDv">
      <ul class="ktvUl">
        <li class="ktvLi" v-for="(item, index) in ktvList" :key="index">
          <div class="dvLi">
            <div class="ktvTop">
              <div class="topL"><img :src="item.name" alt="" /></div>
              <div class="topR" style="width: 78%">
                <div class="ktvName">{{ item.url }}</div>
                <div>
                  <van-rate
                    color="#FF4B10"
                    size="13px"
                    v-model="item.rate"
                    readonly
                    allow-half
                    void-icon="star"
                    void-color="#eee"
                  />
                </div>
                <div class="price">
                  <div class="pr">
                    <span>{{ item.price }}</span
                    >元起
                  </div>
                  <div class="adr">{{ item.distance }}</div>
                </div>
              </div>
            </div>
            <div class="ktvBot">
              <div v-if="item.ding" class="bot1">
                <span class="ding">订</span>{{ item.ding }}
              </div>
              <div v-if="item.tuan" class="bot2">
                <span class="tuan">团</span>{{ item.tuan }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>


    <!-- 分页 -->
    <van-pagination v-model="currentPage" :total-items="total" :show-page-size="10" @change="change">
      <template #prev-text>
        <input type="button" value="上一页">
      </template>
      <template #next-text>
        <input type="button" value="下一页">
      </template>
      <!-- <template #page="{ text }">{{ text }}</template> -->
    </van-pagination>
  </div>
</template>

<script>
import DropDown from "../components/dropDown.vue";
import goApp from "../components/goApp";
export default {
  components: {
    DropDown,
    goApp
  },
  data() {
    return {
      rate: null,
      ktvList: [],
      currentPage:1,
      total:0
    };
  },
  mounted() {
    this.getKtvList();
  },
  methods: {
    async getKtvList() {
      const result = await this.$http.get(`/api/ktvList`);
      console.log(result.data);
      if (result.status == 200) {
        this.ktvList = result.data.message;
        this.total=result.data.total
      } else if (result.status == 400) {
        console.log("首页数据请求失败");
      }
    },
    go(path) {
      var token=localStorage.getItem("token")
      if(path==='/account'){
        if(token){
          this.$router.push('/home')
        }else{
          this.$router.push(path)
        }
      }else{
        this.$router.push(path);
      }
      
    },
    change(){
      console.log(111);
      this.getKtvList()
    }
  },
};
</script>

<style scoped>
.con {
  /* background-color: rgb(243, 241, 241); */
  background-color: #f0efed;
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
.third i {
  padding-right: 10px;
}
.ktvDv {
  width: 100%;
  /* margin-top: 15px; */
}
.ktvUl {
  width: 100%;
  margin: 0 auto;
}
.ktvLi {
  width: 100%;
  list-style: none;
  background-color: white;
  margin-bottom: 10px;
}
.dvLi {
  width: 96%;
  margin: 0 auto;
}
.ktvTop {
  display: flex;
  border-bottom: 1px solid rgb(221, 220, 220);
  padding-bottom: 5px;
}
.topL {
  width: 20%;
  height: 70px;
}
.topL img {
  margin-top: 3%;
  width: 100%;
  height: 100%;
}
.ktvName {
  color: #333333;
  font-size: 18px;
}
.topR > div {
  margin-left: 10px;
  margin-top: 5px;
}
.price {
  display: flex;
  justify-content: space-between;
}
.pr {
  color: #ff6200;
  font-size: 13px;
}
.adr {
  color: #666666;
  font-size: 13px;
}
.ktvBot {
  padding-left: 23%;
  padding-bottom: 10px;
  /* border-bottom: 1px solid rgb(221, 220, 220); */
}
.ktvBot > div {
  margin-top: 5px;
  font-size: 14px;
  color: #666666;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.ding {
  display: inline-block;
  width: 17px;
  height: 17px;
  background-color: #f5716e;
  color: white;
  text-align: center;
  margin-right: 8px;
  font-size: 14px;
  border-radius: 2px;
  line-height: 17px;
}
.tuan {
  display: inline-block;
  width: 17px;
  height: 17px;
  background-color: #f77002;
  color: white;
  text-align: center;
  margin-right: 8px;
  font-size: 14px;
  border-radius: 2px;
  line-height: 17px;
}
</style>


