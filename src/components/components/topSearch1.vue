<template>
  <!-- 顶部搜索 -->
  <div class="top">
    <div class="top1">
      <i class="iconfont icon-fanhui-" @click="go('/index')"></i>
    </div>
    <div class="top2">
      <input
        id="ipt"
        v-model="content"
        type="text"
        placeholder="请输入商家名或者品类名"
      />
      <div class="searchIcon">
        <i class="iconfont icon-chazhao" @click="goSearch()"></i>
      </div>
    </div>
    <div class="top3">
      <i class="iconfont icon-wode" @click="go('/account')"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: null,
    };
  },
  mounted() {
  },
  methods: {
    go(path) {
      var token = localStorage.getItem("token");
      if (path === "/account") {
        if (token) {
          this.$router.push("/home");
        } else {
          this.$router.push(path);
        }
      } else {
        this.$router.push(path);
      }
    },
    async goSearch() {
      const result = await this.$http.post("/api/foodSearch", {
        name: this.content,
      });
    }
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 40px;
  display: flex;
  background-color: rgb(241, 241, 241);
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
  height: 90%;
  text-align: center;
  line-height: 40px;
  margin: auto 5%;
  display: flex;
  background-color: white;
  border-radius: 10px;
}
.top2 input {
  border: 0;
  height: 80%;
  width: 70%;
  margin: auto 0;
  margin-left: 20px;
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
  font-size: 20px;
}
.icon-wode {
  font-size: 20px;
  color: #ff4b10;
}
.icon-fanhui- {
  font-size: 20px;
  color: #ff4b10;
}
.searchIcon {
  width: 20%;
  height: 100%;
}
</style>