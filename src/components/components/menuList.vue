<template>
  <div>
    <div class="menu">
      <div class="menuLeft">
        <ul class="leftUl">
          <li v-for="(item, index) in menuLeft" :key="index" class="leftLi">
            <div
              @click="getIndex(index)"
              :class="index == indexs ? 'active' : ''"
            >
              <img
                class="hot"
                v-if="index == 0"
                src="../../assets/img/hot.png"
                alt=""
              />
              <span>{{ item.name }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="menuRight">
        <ul>
          <li class="outLi" v-for="(item, indexs) in menuLeft" :key="indexs">
            <div class="title">{{ item.name }}</div>
            <ul>
              <li v-for="(x, index) in item.sub" :key="index" class="lis">
                <div class="menuImg">
                  <img :src="x.url" alt="" />
                </div>
                <div class="menuPro">
                  <div class="name">{{ x.name }}</div>
                  <div class="details">
                    {{ x.detail }}
                  </div>
                  <div class="sale">
                    <div>月售{{ x.saled }}</div>
                    <div style="margin-left: 15px">赞{{ x.zan }}</div>
                  </div>
                  <div>
                    <div class="join">
                      <div>
                        <span class="price">￥{{ x.price }}</span
                        ><span class="liang">{{ x.liang }}</span>
                      </div>
                      <div class="words" v-if="x.guige">
                        <div class="guige">选规格</div>
                      </div>
                      <div class="btn" v-else>
                        <!-- <div class="reduce" @click="reduce(x.id)">
                          <img src="../../assets/img/btn-jian.png" alt="" />
                        </div>
                        <span class="num count">1</span> -->
                        <div class="add" @click="joinCar(x.id)">
                          <img src="../../assets/img/btn.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="rec" v-if="x.recommend">
                    <img src="../../assets/img/rec.png" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <!-- 购物车 -->
    <div class="car">
      <van-popup v-model="show" position="bottom" :style="{ maxHeight: '40%' }">
        <div class="con-car">
          <div class="car-top">
            <div>购物车</div>
            <div @click="clear()">清空购物车</div>
          </div>
          <ul class="carUl">
            <li class="carLi" v-for="(item, index) in List" :key="index">
              <div class="carLeft">
                <div class="proName">{{ item.name }}</div>
                <div class="proLiang">标准({{ item.liang }})</div>
              </div>
              <div class="carRight">
                <div class="pro-price">￥{{ item.price }}</div>
                <div class="changeN">
                  <div><img @click="reduce(item.goodsId,item.num)" src="../../assets/img/btn-jian.png" alt="" /></div>
                  <div style="line-height: 25px">{{ item.num }}</div>
                  <div><img @click="add(item.goodsId,item.num)" src="../../assets/img/btn.png" alt="" /></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </van-popup>
    </div>

    <!-- footer -->
    <div class="footer">
      <div class="foot-con">
        <div class="footLeft">
          <div class="person">
            <img src="../../assets/img/person.png" alt="" />
          </div>
          <div class="unpeis">预估另需配送费￥{{storeMsg.peisong}}</div>
        </div>
        <div class="qis">￥0元起送</div>
      </div>

      <div class="sel-foot-con shows">
        <div class="footLeft">
          <div class="sel-person">
            <img @click="car()" src="../../assets/img/sel-person.png" alt="" />
          </div>
          <div class="peis">
            <div style="color: #fff; display: flex">
              <span style="padding-top: 3px">￥</span>
              <div style="font-size: 24px; color: #fff">{{ allPrice }}</div>
            </div>
            <div style="font-size: 12px">预估另需配送费￥{{storeMsg.peisong}}</div>
          </div>
        </div>
        <div class="jiesuan" @click="go('/goOrder')">去结算</div>
      </div>
    </div>
  </div>
</template>


<script>
import $ from "jquery";
import { Toast } from "vant";
export default {
  props: {
    ids:{
      type:String,
      required:true
    },
    storeMsg:{
      type:Object,
      required:true
    },
  },
  data() {
    return {
      menuList: null,
      indexs: 0,
      menuLeft: [],
      menuRight: [],
      carList: [],
      show: false,
      List: [],
    };
  },
  mounted() {
    this.getMenuList();
    this.shopcar();
  },
  computed: {
    allPrice: function () {
        var sum = 0;
        for (var i = 0; i < this.List.length; i++) {
          var pri = parseFloat(this.List[i].price) * parseInt(this.List[i].num);
          sum = sum + pri;
        }
        return sum+this.storeMsg.peisong;
    },
  },
  methods: {
    go(path){
      var token=localStorage.getItem("token")
      if(path==='/goOrder'){
        if(token){
          this.$router.push({path:path,query:{id:this.ids,allPrice:this.allPrice}})
        }else{
          this.$router.push('/account')
        }
      }else{
        this.$router.push(path)
      }
    },
    async getMenuList() {
      if (this.ids == 1 || this.ids == 3) {
        const result = await this.$http.post("/api/menuList", {
          id: this.ids,
        });
        if (result.data.status == 200) {
          this.menuLeft = result.data.message;
        }
      }
    },
    async shopcar() {
      const result = await this.$http.get("/api/shop");
      if (result.data.status == 200) {
        this.List = result.data.message;
      }
      // 防止刷新结算消失
      if (JSON.parse(localStorage.getItem("carList")).length!==0) {
        $(".foot-con").addClass("shows");
        $(".sel-foot-con").removeClass("shows");
      }else{
        $(".sel-foot-con").addClass("shows");
        $(".foot-con").removeClass("shows");
        this.show=false
      }
    },

    getIndex(val) {
      this.indexs = val;
    },
    async joinCar(id) {
      if (this.ids == 1) {
        const result1 = await this.$http.post("/api/car1", {
          id: id,
        });
        if (result1.data.status == 200) {
          Toast("加入购物车成功");
        }
        if (result1.data.message.length !== 0) {
          $(".foot-con").addClass("shows");
          $(".sel-foot-con").removeClass("shows");
          localStorage.setItem("carList", JSON.stringify(result1.data.message));
          this.shopcar()
        }
      } else if(this.ids==3) {
        const result2 = await this.$http.post("/api/car2", {
          id: id,
        });
        if (result2.data.status == 200) {
          Toast("加入购物车成功");
        }
        if (result2.status == 200) {
          $(".foot-con").addClass("shows");
          $(".sel-foot-con").removeClass("shows");
          localStorage.setItem("carList", JSON.stringify(result2.data.message));
          this.shopcar()
        }
      }
    },
    car() {
      if (this.show == false) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    async reduce(id,num){
      const result = await this.$http.post("/api/reduceNum",{
        id:id,
        num:num
      })
      if(result.data.status==200){
        this.shopcar()
      }
      var list=JSON.parse(localStorage.getItem("carList"));
      for(var i=0;i<list.length;i++){
        if(id==list[i].goodsId){
          list[i].num=num-1
          if(list[i].num==0){
            var remove=list.splice(i,1)
          }
        }
      }
      this.shopcar()
      localStorage.setItem("carList",JSON.stringify(list))
    },
    async add(id,num){
      const result = await this.$http.post("/api/addNum",{
        id:id,
        num:num
      })
      if(result.data.status==200){
        this.shopcar()
      }
      var list=JSON.parse(localStorage.getItem("carList"));
      for(var i=0;i<list.length;i++){
        if(id==list[i].goodsId){
          list[i].num=num+1
        }
      }
      localStorage.setItem("carList",JSON.stringify(list))
    },
    async clear(){
      const result = await this.$http.get("/api/shopcarClear");
      localStorage.setItem("carList",JSON.stringify([]))
      this.shopcar()
    }
  },
};
</script>

<style scoped>
@import '../../css/menuList.css';
</style>
