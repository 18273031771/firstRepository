<template>
  <div style="backgroundColor:#fff">
    <div class="top">
      <div class="title">影院</div>
    </div>
    <div class="search">
      <i class="iconfont icon-chazhao"></i>
      <input type="text" placeholder="搜影院" />
    </div>

    <div class="dv">
      <cinema-drop/>
    </div>

<!-- 底部电影院 -->
    <cinema-list/>
  </div>
</template>

<script>
import cinemaDrop from '../components/cinemaDrop.vue';
import CinemaList from '../components/cinemaList.vue';
export default {
  components: { cinemaDrop, CinemaList },
  data() {
    return {
    };
  },
  mounted(){
  },
  methods: {
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 50px;
  background-color: #f03d37;
}
.title {
  width: 60%;
  height: 100%;
  margin: 0 auto;
  color: white;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
}
.search {
  background-color: #f5f5f5;
  width: 100%;
  height: 45px;
  text-align: center;
  position: relative;
}
.search input {
  border: 1px solid rgb(226, 224, 224);
  width: 90%;
  height: 28px;
  margin: 8px auto;
  background-color: #ffff;
  border-radius: 5px;
}
input::-ms-input-placeholder {
  text-align: center;
  color: #b2b2b2;
  font-size: 14px;
}
input::-webkit-input-placeholder {
  text-align: center;
  color: #b2b2b2;
  font-size: 14px;
}
.search .iconfont {
  position: absolute;
  left: 40%;
  top: 35%;
  color: #b2b2b2;
}

</style>