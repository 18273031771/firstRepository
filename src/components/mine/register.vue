<template>
  <div class="con">
    <div class="top">
      <div class="top1" style="margin-left: 3%">
        <i class="iconfont icon-fanhui-" @click="go('/index')"></i>
      </div>
      <div class="top2">注册账号</div>
      <div class="top3" style="margin-right: 5%">
        <i @click="showCheck()" class="iconfont icon-wode"></i>
      </div>
    </div>
    <div class="dialog" v-if="show">
      <div class="triangle"></div>
      <ul class="dialogUl">
        <li class="dialogLi">
          <div>
            <i class="iconfont icon-1"></i>
            <span>首页</span>
          </div>
        </li>
        <li class="dialogLi">
          <div>
            <i class="iconfont icon-wode"></i>
            <span>我的</span>
          </div>
        </li>
        <li class="dialogLi">
          <div>
            <i class="iconfont icon-chazhao"></i>
            <span>搜索</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- 注册表格 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="请输入手机号码"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入账号密码密码"
      />
      <van-field
        v-model="username"
        name="inter"
        label="昵称"
        placeholder="请输入昵称"
      />
      <!-- <van-field name="uploader" label="选择头像上传">
        <template #input>
          <van-uploader name="pic" v-model="uploader" />
        </template>
      </van-field> -->
      <!-- <van-uploader label="选择头像上传" name="pic" /> -->
      <!-- <input type="file" name="pic" value="请选择头像上传"> -->
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      uploader: [{  }],
      phone: "",
      password: "",
      username: ""
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    showCheck() {
      if (this.show == false) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    async onSubmit(values) {
        var url="http://127.0.0.1:8881/images/touXiang/1.jpg"
      console.log("submit", values);
    //   console.log(values.uploader[0].file);
    //   var filename=values.uploader[0].file.name
    //   console.log(filename);
      const result= await this.$http.post("/api/reg",{
          obj:values,
          url:url
      })
      console.log(result);
      if(result.data.status===200){
          alert(result.data.info)
          this.$router.push("/account")
      }else{
          alert(result.data.info)
      }
    },
  },
};
</script>

<style scoped>
.con {
  width: 100%;
  height: 100%;
  background-color: rgb(246, 245, 243);
  position: relative;
}
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6%;
  background-color: #ffd000;
}
.van-cell {
  /* background-color: #ffd000; */
  /* margin-left: 20%; */
}
.top > div {
  margin: auto 0;
  /* border: 1px solid red; */
}
.top2 {
  padding-left: 5%;
}
.iconfont {
  font-size: 22px;
}
.dialog {
  width: 100px;
  height: 110px;
  background-color: white;
  position: absolute;
  right: 0;
  z-index: 999;
}
.dialogUl {
}
.dialogLi {
  list-style: none;
  padding-top: 8px;
}
.dialogLi > div {
    color: black;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
}
.triangle {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid white;
  z-index: 999;
  position: absolute;
  right: 20px;
  top: -10px;
}
</style>