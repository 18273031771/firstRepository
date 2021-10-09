<template>
  <div class="menu">
    <div class="menuTop">
      <div style="height: 30px; line-height: 30px">
        <i class="iconfont icon-fanhui-" @click="go('/waimai')"></i>
      </div>
      <div class="jieshao">
        <div class="menuImg"><img :src="storeMsg.url" alt="" /></div>
        <div class="imgR">
          <div>{{ storeMsg.distance }}</div>
          <div>{{ storeMsg.name }}</div>
          <div class="quan">
            <span v-if="storeMsg.manjian">{{ storeMsg.manjian }} </span>
            <span v-if="storeMsg.zhekou">{{ storeMsg.zhekou }} </span>
          </div>
        </div>
      </div>
    </div>

    <!-- tabbar -->
    <div class="tabbar">
      <div class="classify">
        <div class="bot">点菜</div>
        <div>评价</div>
        <div>商家</div>
      </div>
      <div class="search">
        <i class="iconfont icon-chazhao"></i>
        <div>搜索</div>
      </div>
    </div>
    <!-- main content -->
    <div class="block">
      <div class="order">
        <menuList :ids="this.$route.query.id" ref="menuList" :storeMsg="storeMsg"/>
      </div>
      <div>
        <recommendList />
      </div>
      <div>
        <businessStore />
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import menuList from "../components/menuList.vue";
import recommendList from "../components/recommendList.vue";
import businessStore from "../components/businessStore.vue";
export default {
  components: {
    menuList,
    businessStore,
    recommendList,
  },
  data() {
    return {
      id: "",
      storeMsg: {},
    };
  },
  mounted() {
    this.getList();
    this.upPage();
  },
  methods: {
    async getList() {
      this.id = this.$route.query.id;
      const result = await this.$http.post("/api/wmDetail", {
        id: this.id,
      });
      if (result.data.status === 200) {
        this.storeMsg = result.data.message[0];
      }
    },
    go(path) {
      this.$router.push(path);
      this.$refs.menuList.clear()
    },
    upPage() {
      var dv = $(".classify").children();
      var block = $(".block").children();
      $(document).ready(function () {
        for (var i = 0; i < dv.length; i++) {
          $(dv[i]).click(function () {
            $(this).addClass("bot");
            $(this).siblings().removeClass("bot");
            var index = $(this).index();
            $(block[index]).addClass("order");
            $(block[index]).siblings().removeClass("order");
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.menuTop {
  width: 100%;
  height: 140px;
  background-color: #333;
}
.menuTop .iconfont {
  margin: 10px 10px;
  color: white;
}
.jieshao {
  width: 95%;
  margin: 0 auto;
  display: flex;
  /* justify-content: space-between; */
  margin-top: 15px;
  height: 70px;
}
.menuImg {
  width: 80px;
  height: 70px;
}
.menuImg img {
  width: 100%;
  height: 100%;
}
.imgR {
}
.imgR > div {
  color: #ffffff;
  font-size: 14px;
  line-height: 23px;
  margin-left: 15px;
}
.imgR .quan {
  width: auto;
  color: #ff4a26;
}
.quan > span {
  border: 1px solid red;
  background-color: white;
  letter-spacing: 1px;
  font-size: 12px;
  text-align: center;
  margin-left: 3px;
}
.tabbar {
  width: 94%;
  margin: 0 auto;
  display: flex;
  border-bottom: 1px solid rgb(241, 241, 241);
  justify-content: space-between;
  margin-top: 20px;
}
.classify {
  display: flex;
  width: 60%;
  justify-content: space-around;
}
.classify > div {
  font-size: 18px;
  font-family: monospace;
}
.search {
  width: 50px;
  font-size: 12px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  display: flex;
  border: 1px solid rgb(194, 192, 192);
  border-radius: 13px;
  background-color: #eeeeee;
}
.bot {
  font-weight: 600;
  border-bottom: 1px solid rgb(252, 211, 30);
}
.block > .order {
  display: block;
}
.block > div {
  display: none;
}
</style>
