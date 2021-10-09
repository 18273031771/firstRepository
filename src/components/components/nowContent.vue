<template>
  <div class="con">
    <div class="goodC" >
      <p style="font-size: 14px; color: #333; margin-left: 15px">
        最受好评电影
      </p>
      <ul>
        <li
          v-for="(item, index) in nowTList"
          :key="index"
          @click="go('/moviesDetail1',item.id)"
        >
          <img :src="item.url" alt="" />
          <div class="topMvname">{{ item.name }}</div>
          <div class="rate">
            观众评分<span>{{ item.fs }}</span>
          </div>
          <div v-if="item.fs === null" class="rate">
            <span>{{ item.person }}</span
            >人想看
          </div>
        </li>
      </ul>
    </div>

    <div class="foot-n-m">
      <ul class="ul-n-m">
        <li
          class="li-n-m"
          v-for="(item, index) in nowBList"
          :key="index"
          @click="go('/moviesDetail2',item.id)"
        >
          <div class="dv-n-m">
            <div class="first-dv"><img :src="item.url" alt="" /></div>
            <div>
              <div class="m-name">{{ item.name }}</div>
              <div class="score">
                观众评<span>{{ item.score }}</span>
              </div>
              <div class="actor">{{ item.actor }}</div>
              <div class="show-num">{{ item.count }}</div>
            </div>
            <div class="m-btn">
              <input
                v-if="item.sale === '购票'"
                type="button"
                :value="item.sale"
              />
              <input
                v-if="item.sale === '预售'"
                style="background-color: #3c9fe6"
                type="button"
                :value="item.sale"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 底部tabbar -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowBList: [],
      nowTList: [],
      moviesDetail1Id:null,
      moviesDetail2Id:null
    };
  },
  mounted() {
    this.getNowBList();
    this.getNowTList();
  },
  methods: {
    go(path,id) {
      this.$router.push({path:path,query:{id:id}});
    },
    async getNowBList() {
      const result = await this.$http.get(`/api/nowBlist`);
      if (result.status == 200) {
        this.nowBList = result.data.message;
      } else if (result.status == 400) {
        console.log("数据请求失败");
      }
    },
    async getNowTList() {
      const result = await this.$http.get(`/api/nowT`);
      if (result.status == 200) {
        this.nowTList = result.data.message;
      } else if (result.status == 400) {
        console.log("数据请求失败");
      }
    },
  },
};
</script>

<style scoped>
.con {
  background-color: rgb(238, 238, 238);
}
.goodC {
  background-color: white;
  /* border: 1px solid red; */
  margin-top: -10px;
}
.goodC img {
  width: 90px;
  height: 120px;
}
.goodC li {
  list-style: none;
  margin-right: 15px;
  width: 90px;
  position: relative;
}
.goodC ul {
  display: flex;
  width: 94%;
  margin: 0 auto;
  height: 150px;
  overflow: scroll;
}
.rate {
  color: #faaf00;
  font-size: 11px;
  font-weight: 800;
  position: absolute;
  bottom: 30px;
  left: 5px;
  background-color: #333;
}
/* .element::-webkit-scrollbar { width: 0 !important } */
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

/* foot电影 */
.foot-n-m,
.ul-n-m {
  width: 100%;
  margin-top: 20px;
  background-color: white;
}
.foot-n-m {
  padding-bottom: 80px;
}
.dv-n-m img {
  width: 100%;
  height: 90%;
}
.li-n-m {
  list-style: none;
  border-bottom: 1px solid rgb(235, 235, 235);
  /* margin-top: 10px; */
}
.dv-n-m {
  width: 94%;
  margin: 0 auto;
  display: flex;
}
.first-dv {
  width: 23%;
  margin-top: 5px;
}
.dv-n-m :nth-child(2) {
  width: 60%;
}
.m-btn {
  width: 12%;
}
.m-btn input {
  margin-top: 130%;
  width: 47px;
  height: 27px;
  color: white;
  background-color: #f03d37;
  border-radius: 4px;
  border: 0;
  line-height: 28px;
  font-size: 12px;
  margin-left: 5px;
}
.m-name {
  color: #333;
  font-size: 17px;
  font-weight: 700;
  margin-left: 12px;
  margin-top: 6px;
}
.score,
.actor,
.show-num {
  margin-left: 10px;
  font-size: 13px;
  color: #666;
  margin-top: 7px;
  overflow: hidden;
  text-overflow: initial;
  white-space: nowrap;
}
.topMvname {
  width: 90px;
  height: auto;
  font-size: 13px;
  color: #222;
  overflow: hidden;
  text-overflow: initial;
  white-space: nowrap;
}
</style>