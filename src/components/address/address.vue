<template>
  <div class="address">
    <div class="ad-top">
      <div class="ret"><i class="iconfont icon-fanhui-" @click="go('/mySnack')"></i></div>
      <div class="navlist">地址列表</div>
    </div>
    <!-- 列表 -->
    <div class="list">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @click-item="select"
      />
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
      chosenAddressId: '1',
      list: []
    };
  },
  mounted(){
      this.getAddressList()
  },
  methods: {
    go(path){
      window.history.back(-1);
    },
    onAdd() {
        this.$router.push("/addAddress")
    },
    onEdit(item, index) {
        this.$router.push({path:"/addAddress",query:{id:item.id}})
    // console.log(item,index);
    },
    async getAddressList(){
        const result=await this.$http.get("/api/addressList")
        if(result.data.status==200){
            this.list=result.data.message
            for(let i=0;i<this.list.length;i++){
                this.list[i].address=this.list[i].province+this.list[i].city+this.list[i].county+this.list[i].addressDetail
            }
        }  
    },
    select(item,index){
      localStorage.setItem("addressObj",JSON.stringify(item))
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.address{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.ad-top {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgb(224, 224, 224);
  line-height: 50px;
}
.ret {
  float: left;
  margin-left: 10px;
}
.navlist {
  text-align: center;
  padding-right: 18px;
  font-size: 15px;
  color: #333;
}
.van-address-item{
    border-bottom: 1px solid rgb(224, 223, 223);
    border-radius: 0;
}
</style>
