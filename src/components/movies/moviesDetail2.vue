<template>
  <div class="detail">
    <div class="nav">
      <div class="top1">
        <i class="iconfont icon-fanhui-"></i>
      </div>
      <div class="top2">
        {{ detailObj.name }}
      </div>
    </div>

    <div class="mid">
      <div class="mid-content">
        <div class="midLeft">
          <img :src="detailObj.url" alt="" />
        </div>
        <div class="midRight">
          <div>{{ detailObj.name }}</div>
          <div>
            <span style="color: #fc0; font-size: 18px; font-weight: 700">{{
              detailObj.score
            }}</span>
            <span style="font-size: 12px; color: #ffffff; font-weight: 700"
              >(26.3万人评)</span
            >
          </div>
          <div>{{ detailObj.moviesName }}</div>
          <div>{{ detailObj.actor }}</div>
          <div>{{ detailObj.show }}</div>
        </div>
      </div>
    </div>

    <!-- tab切换 -->
    <div class="toggle">
      <ul class="toggleUl">
        <li class="action">今天9月17日</li>
        <li>明天9月18日</li>
        <li>后天9月19日</li>
      </ul>
    </div>

    <!-- 下拉框 -->
    <cinema-drop />

    <!-- 电影院列表 -->
    <cinema-list/>
  </div>
</template>

<script>
import $ from "jquery";
import cinemaDrop from "../components/cinemaDrop.vue";
import CinemaList from '../components/cinemaList.vue';
export default {
  components: { cinemaDrop, CinemaList },

  data() {
    return {
      detailObj: {},
    };
  },
  mounted() {
    // console.log(this.$route.query.id);
    this.getDetailObj();
    this.getTabToggle();
  },
  methods: {
    async getDetailObj() {
      const result = await this.$http.post("/api/detail2", {
        id: this.$route.query.id,
      });
      if (result.data.status == 200) {
        this.detailObj = result.data.message[0];
      }
    },
    getTabToggle() {
      $(document).ready(function () {
        var lis = $(".toggleUl>li");
        for (var i = 0; i < lis.length; i++) {
          //   console.log(lis[i]);
          $(lis[i]).click(function () {
            $(this).addClass("action");
            $(this).siblings().removeClass("action");
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.detail{
  background-color: #ffffff;
}
.nav {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #e54848;
}
.top1 {
  float: left;
}
.top1 > .iconfont {
  font-size: 20px;
  display: block;
  margin-left: 10px;
  margin-top: 15px;
  color: #ffffff;
}
.top2 {
  color: #ffffff;
  text-align: center;
  margin: auto auto;
  padding-right: 28px;
}

.mid {
  width: 100%;
  height: 190px;
  background-color: #777;
}
.mid-content {
  width: 90%;
  height: 80%;
  /* border: 1px solid red; */
  margin: 0 auto;
  display: flex;
  /* padding-top: 10%; */
  padding-top: 5%;
}

.midLeft {
  width: 110px;
  height: 150px;
}
.midLeft img {
  width: 100%;
  height: 100%;
}
.midRight {
  margin-left: 15px;
}
.midRight > div {
  margin-top: 5px;
  color: rgb(214, 213, 213);
  font-weight: 700;
  font-size: 14px;
}
.midRight > div:nth-child(1) {
  color: #ffffff;
  font-size: 20px;
  font-weight: 800;
  padding-bottom: 7px;
}

/* tab切换 */
.toggleUl {
  display: flex;
  width: 96%;
  margin: 0 auto;
}
.toggleUl li {
  color: #666;
  height: 45px;
  width: 33%;
  text-align: center;
  line-height: 45px;
  font-size: 14px;
  border-bottom: 1px solid rgb(236, 236, 236);
}
.toggleUl .action {
  color: red;
  border-bottom: 2px solid red;
}
</style>
