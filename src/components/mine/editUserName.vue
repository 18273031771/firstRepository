<template>
  <div class="editName">
    <!-- 顶部标签 -->
    <div class="top">
      <div style="margin-left: 5px">
        <i class="iconfont icon-fanhui-" @click="go()"></i>
      </div>
      <div>修改用户名</div>
      <div class="third" style="margin-right: 5px">
        <i class="iconfont icon-caidan"></i>
      </div>
    </div>

    <div class="edit">
      <input type="text" v-model="username" />
    </div>
    <button class="btn" @click="modify()">修改</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      userId:''
    };
  },
  mounted(){
      this.username=JSON.parse(localStorage.getItem("obj")).name;
      this.userId=JSON.parse(localStorage.getItem("obj")).id;
  },
  methods: {
      go(){
          this.$router.go(-1)
      },
      async modify(){
          const result=await this.$http.post("/api/modifyName",{
              name:this.username,
              id:this.userId
          })
          if(result.data.status==200){
              var obj=JSON.parse(localStorage.getItem("obj"))
              obj.name=this.username
              localStorage.setItem("obj",JSON.stringify(obj))
              alert("修改成功！")
          }
      }
  },
};
</script>

<style scoped>
.editName {
  width: 100%;
  height: 100%;
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
.edit {
  width: 100%;
  height: 45px;
  background-color: #fff;
}
.edit > input {
  width: 90%;
  height: 25px;
  margin-left: 5%;
  margin-top: 7px;
  border: 0;
}
.btn {
  width: 94%;
  height: 40px;
  background-color: #ffbd00;
  line-height: 40px;
  text-align: center;
  display: block;
  margin: 10px auto;
  border: 0;
  border-radius: 10px;
}
</style>
