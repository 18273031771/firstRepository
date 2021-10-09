<template>
  <div>
    <!-- 底部电影院 -->
    <div class="footCinema">
      <ul class="footCinemaUl">
        <li
          class="footCinemaLl"
          v-for="(item, index) in cinemaList"
          :key="index"
        >
          <div class="firstDv">
            <span class="cinemaName">{{ item.name }}</span
            ><span class="cinemaPri">{{ item.price }}</span
            >元起
          </div>
          <div class="secondDv">
            <span class="cinemadr">{{ item.address }}</span
            ><span class="cinemaDis">{{ item.distance }}</span>
          </div>
          <div class="thirdDv">
            <div
              v-if="item.tui"
              style="color: #859daf; border: 1px solid #859daf"
            >
              &ensp;{{ item.tui }}&ensp;
            </div>
            <div
              v-if="item.gai"
              style="color: #859daf; border: 1px solid #859daf"
            >
              &ensp;{{ item.gai }}&ensp;
            </div>
            <div
              v-if="item.zhekou"
              style="color: #ff9900; border: 1px solid #ff9900"
            >
              &ensp;{{ item.zhekou }}&ensp;
            </div>
            <div
              v-if="item.ting"
              style="color: #859daf; border: 1px solid #859daf"
            >
              {{ item.ting }}
            </div>
          </div>
          <div class="forthDv">
            <div class="bz" v-if="item.beizhu">
              <div class="card">卡</div>
              <div class="detail">{{ item.beizhu }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    //   allCity: 0,
      cinemaList:[],
    };
  },
  mounted(){
    this.getCinema();
  },
  methods: {
    async getCinema(){
      const result=await this.$http.get(`/api/cinemaList`);
      if(result.status==200){
        this.cinemaList=result.data.message
      }else{
        console.log("获取信息失败");
      }
    }
  },
};
</script>

<style scoped>
/* <!----- 底部电影院 -----> */
.footCinema{
  width: 100%;
  padding-bottom: 80px;
  background-color: #fff;
}
.footCinemaUl{
  width: 93%;
  margin: 0 auto;
}

.footCinemaLl{
  list-style: none;
  border-bottom: 1px solid rgb(216, 214, 214);
}
.firstDv>.cinemaName{
  color: #000000;
  font-size: 16px;
}
.firstDv{
  color: #f03d37;
  font-size: 11px;
  margin-top: 10px;
}
.firstDv>.cinemaPri{
  color: #f03d37;
  font-size: 18px;
  padding-left: 18px;
}
.secondDv{
  color: #666666;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
.cinemadr{
  display: block;
  width: 86%;
  /* border: 1px solid black; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cinemaDis{
  /* display: block; */
  padding-right: 10px;
}
.thirdDv{
  margin-top: 5px;
  display: flex;
}
.thirdDv>div{
  font-size: 12px;
  margin-right: 8px;
}
.forthDv{
  padding-bottom: 16px;
}
.bz{
  display: flex;
  /* margin-left: 3%; */
  margin-top: 8px;
}
.bz .card{
  width: 15px;
  text-align: center;
  color: white;
  background-color: rgb(69, 162, 238);
  font-size: 13px;
  border-radius: 2px;
}
.detail{
  color: #666666;
  font-size: 13px;
  margin-left: 2%;
}
</style>
