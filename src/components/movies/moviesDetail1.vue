<template>
  <div>
    <div class="top">
      <div class="content">
        <p class="nav">
          <a href="./movies.vue">猫眼电影</a>
          <span>&nbsp;>&nbsp;{{ detailList1.name }}</span>
        </p>
        <div class="tit">
          <div class="titImg">
            <img :src="detailList1.url" alt="" />
          </div>
          <div class="wordTit">
            <div class="m-name">{{ detailList1.name }}</div>
            <div>{{ detailList1.engName }}</div>
            <div>{{ detailList1.moviesType }}</div>
            <div>{{ detailList1.actor }}</div>
            <div>{{ detailList1.moviesTime }}</div>
          </div>
        </div>
        <!-- 猫眼购票评分 -->
        <div class="m-rate">
          <div class="rate-img">
            <img src="../../assets/img/movies.png" alt="" />
            <span>猫眼购票评分</span>
          </div>
          <div class="rate-bot">
            <div class="zan-img">
              <img src="../../assets/img/zan.png" alt="" />
              <span style="padding-left: 5px">{{ detailList1.honor }}</span>
            </div>
          </div>
        </div>

        <!-- 简介 -->
        <div class="open">
          <div style="font-size: 15px">简介</div>
          <div class="arrow">
            <span style="font-size: 12px" @click="open()">展开</span>
            <img src="../../assets/img/right.png" alt="" />
          </div>
        </div>
        <div class="intro">{{ detailList1.introduction }}</div>

        <!-- 演职人员 -->
        <div>
          <div class="actor">
            <div style="font-size: 15px">演职人员</div>
            <div class="all">
              <span style="font-size: 12px">全部</span>
              <img src="../../assets/img/right.png" alt="" />
            </div>
          </div>
          <ul class="actorUl">
            <li v-for="(item, index) in detailListImg.slice(0, 7)" :key="index">
              <img :src="item.url" alt="" />
              <div class="topMvname">{{ item.name }}</div>
              <div class="actorName">{{ item.actorName }}</div>
            </li>
          </ul>
        </div>

        <!-- 电影视频 -->
        <div>
          <div class="actor">
            <div style="font-size: 15px">视频推荐</div>
            <div class="all">
              <span style="font-size: 12px">全部</span>
              <img src="../../assets/img/right.png" alt="" />
            </div>
          </div>
          <ul class="videoUl">
            <li
              v-for="(item, index) in detailListImg.slice(7, 11)"
              :key="index"
            >
              <video :src="item.url" :poster="item.poster" controls></video>
            </li>
          </ul>
        </div>

        <!-- 剧照 -->
        <div>
          <div class="actor">
            <div style="font-size: 15px">剧照</div>
            <div class="all">
              <span style="font-size: 12px">全部</span>
              <img src="../../assets/img/right.png" alt="" />
            </div>
          </div>
          <ul id="m-phone">
            <li
              v-for="(item, index) in detailListImg.slice(11, 18)"
              :key="index"
            >
              <img id="phone" :src="item.url" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部购票按钮 -->
      <div class="foot-btn">
        <input class="btn" type="button" value="特惠购票" />
      </div>

      <!-- 评论 -->
      <div class="rec">
        <div style="margin:10px 20px;padding-top:10px;font-size:14px">短评</div>
        <ul class="recUl">
          <li v-for="(item, index) in detailListRec.slice(0, 5)" :key="index">
            <div class="recDV">
              <div class="rec-left">
                <img :src="item.url" alt="" />
              </div>
              <div class="rec-right">
                <div class="r-top">
                  <div class="intName">
                    <div>{{item.name}}</div>
                    <van-rate v-model="item.rate" size="8" allow-half void-icon="star" color="#FAAF00" />
                    &nbsp;<span style="font-size:13px;color:#FAAF00">{{item.rate}}分</span>
                  </div>
                  <div class="fabulous">
                    <img src="../../assets/img/fabulous.png" alt="">
                    <span style="font-size:12px">{{item.zan}}</span>
                  </div>
                </div>
                <div class="r-bot">
                  {{item.content}}
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
import $ from "jquery";
export default {
  data() {
    return {
      detailList1: {},
      detailListImg: [],
      detailListRec: [],
      flag: false,
      bgc: "",
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      const result = await this.$http.post("/api/moviesDetail1", {
        id: this.$route.query.id,
      });
      if (result.data.status == 200) {
        this.detailList1 = result.data.message[0];
        this.bgc = this.detailList1.bgc;
      }
      $(".top").css("backgroundColor", this.bgc);
      this.getDetailImg();
      this.getDetailRec();
    },
    open() {
      if (this.flag) {
        this.flag = false;
        $(".arrow>img").css("transform", "rotate(90deg)");
        $(".intro").css("height", "75px");
      } else {
        $(".arrow>img").css("transform", "rotate(-90deg)");
        $(".intro").css("height", "auto");
        this.flag = true;
      }
    },
    async getDetailImg() {
      var moviesName = this.detailList1.name;
      const result = await this.$http.post("/api/moviesImg", {
        name: moviesName,
      });
      if (result.data.status == 200) {
        this.detailListImg = result.data.message;
      }
    },
    async getDetailRec() {
      var moviesName = this.detailList1.name;
      const result = await this.$http.post("/api/moviesRec", {
        name: moviesName,
      });
      if (result.data.status == 200) {
        this.detailListRec = result.data.message;
        console.log(this.detailListRec);
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.top {
  width: 100%;
  padding-top: 20px;
  background-color: #66294c;
  /* padding-bottom: 200px; */
  /* position: relative; */
}
.content {
  width: 95%;
  margin: 0 auto;
}
.nav > span,
.nav > a {
  color: #cccccc;
  font-size: 14px;
}
.tit {
  display: flex;
  margin-top: 15px;
}
.titImg {
  width: 100px;
  height: 130px;
}
.titImg img {
  width: 100%;
  height: 100%;
}
.wordTit > .m-name {
  font-size: 20px;
  color: #ffffff;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.wordTit > div {
  margin-left: 13px;
  margin-top: 5px;
  color: #ffffff;
  font-size: 13px;
}
.m-rate {
  width: 95%;
  margin: 10px auto;
  height: 130px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.18);
  position: relative;
}
.rate-img {
  display: flex;
  font-size: 12px;
  color: #ffffff;
  padding-top: 5px;
  margin-left: 15px;
}
.rate-img img {
  width: 15px;
  height: 15px;
}
.rate-bot {
  width: 96%;
  height: 30px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.12);
  position: absolute;
  bottom: 5px;
  left: 2%;
}
.zan-img {
  color: #fffadf;
  font-size: 12px;
  margin: auto 10px;
  line-height: 30px;
}
.zan-img img {
  width: 15px;
  height: 15px;
}
.open,
.actor {
  width: 96%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  /* font-size: 14px; */
}
.arrow > img {
  width: 8px;
  height: 8px;
  transform: rotate(90deg);
}
.all > img {
  width: 8px;
  height: 8px;
}
.intro {
  width: 96%;
  margin: 0 auto;
  height: 75px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #ffffff;
  font-size: 14px;
  line-height: 25px;
}
.actor {
  margin-top: 20px;
}

/* 演职人员css */
.actorUl img {
  width: 90px;
  height: 120px;
}
.videoUl video {
  width: 160px;
  height: 110px;
}
.actorUl li {
  list-style: none;
  margin-right: 15px;
  width: 90px;
  position: relative;
}
.videoUl li {
  list-style: none;
  margin-right: 10px;
  position: relative;
}
.videoUl {
  display: flex;
  width: 94%;
  margin: 0 auto;
  overflow: scroll;
  margin-top: 10px;
}
.actorUl {
  display: flex;
  width: 94%;
  margin: 0 auto;
  height: 160px;
  overflow: scroll;
  margin-top: 10px;
}
.topMvname {
  text-align: center;
  font-size: 12px;
  color: #ffffff;
}
.actorName {
  text-align: center;
  font-size: 12px;
  color: #aca7a7;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
#m-phone {
  display: flex;
  width: 94%;
  margin: 0 auto;
  overflow: scroll;
  margin-top: 10px;
}
#m-phone li {
  list-style: none;
  margin-right: 40px;
  width: 90px;
  position: relative;
}
#phone {
  width: 120px;
  height: 90px;
}
.foot-btn {
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  text-align: center;
  border-radius: 7px 7px 0px 0px;
  /* position: absolute;
  bottom: 0; */
  position: fixed;
  bottom: 0;
}
.btn {
  width: 90%;
  height: 45px;
  color: #ffffff;
  border-radius: 20px;
  background-color: #fb3333;
  border: 0;
  margin-top: 5px;
}

/* 评论 */
.rec {
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 100px;
  border-radius: 8px 8px 0 0;
}
.recDV {
  width: 90%;
  margin: 0 auto;
  display: flex;
}
.recUl li{
  margin-top: 15px;
}
.rec-left {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.r-top{
  display: flex;
  justify-content: space-between;
}
.rec-left img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.rec-right{
  width: 85%;
  /* border: 1px solid red; */
  margin-left: 15px;
}
.fabulous{
  width: 65px;
  height: 25px;
  line-height: 25px;
  border-radius: 16px;
  border: 1px solid rgb(168, 166, 166);
  text-align: center;
  display: flex;
}
.fabulous img{
  width: 16px;
  height: 16px;
  margin: auto 7px;
}
.intName>div {
  color: #333;
  font-size: 14px;
}
.r-bot{
  font-size: 14px;
}
</style>
