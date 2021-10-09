<template>
    <div style="backgroundColor:#fff">
        <!-- 顶部标签 -->
        <div class="top">
            <div style="margin-left: 5px">
                <i class="iconfont icon-fanhui-" @click="go('/index')"></i>
            </div>
            <div class="third" style="margin-right: 5px">
                <i class="iconfont icon-caidan"></i>
            </div>
        </div>
        <!-- 下拉查询 -->
        <drop-down />

        <div class="mid">
            <div class="mid-dv">
                <ul class="tourUl">
                    <li class="tourLi" v-for="(item,index) in tourList" :key="index">
                        <div class="tourL">
                            <img :src="item.url" alt="">
                        </div>
                        <div class="tourR">
                            <div class="tourFir">
                                <span class="tourName">{{item.name}}</span>
                                <span v-if="item.piao" style="font-size:12px;backgroundColor:#4dc8f1;color:white">{{item.piao}}</span>
                                <span v-if="item.xian" style="font-size:12px;backgroundColor:#bd82e3;color:white">{{item.xian}}</span>
                                <span v-if="item.taocan" style="font-size:12px;backgroundColor:#ff9400;color:white">{{item.taocan}}</span>
                            </div>
                            <div class="tourSec">
                                <div class="rate">
                                    <van-rate v-model="item.rate" color="#fdb338" size="13px" readonly allow-half void-icon="star" void-color="#eee" />
                                    <span>{{item.rate}}分</span>
                                </div>
                                <div class="tourP"><span>{{item.people}}</span>人消费</div>
                            </div>
                            <div class="tourThird">
                                <div class="tourPrice"><span style="color:#FF5353;font-size:20px;font-weigt:600">{{item.price}}</span>起</div>
                                <div class="tourDis">{{item.distance}}</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import dropDown from '../components/dropDown.vue'
export default {
    components:{
        dropDown
    },
    data(){
        return{
            tourList:null,
        }
    },
    mounted(){
        this.getTourList()
    },
    methods:{
        go(path){
            this.$router.push(path)
        },
        async getTourList(){
            const result= await this.$http.get(`/api/tourList`)
            console.log(result);
            if(result.data.status==200){
                this.tourList=result.data.message
            }
        }
    }
}
</script>

<style scoped>
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


/* 底部 */
.mid{
    width: 100%;
    padding-bottom: 30px;
}
.mid-dv{
    width: 97%;
    margin: 0 auto;
}
.tourUl{
    width: 100%;
}
.tourLi{
    list-style: none;
    display: flex;
    height: 80px;
    justify-content: space-between;
    margin-top: 10px;
}
.tourL{
    width: 25%;
}
.tourL img{
    width: 100%;
    height: 100%;
}
.tourR{
    width: 72%;
}
.tourR>div{
    margin-top: 5px;
}
.tourSec{
    display: flex;
    justify-content: space-between;
}
.tourThird{
    display: flex;
    justify-content: space-between; 
}
.tourP,.tourDis{
    color: #666666;
    font-size: 12px;
    margin-right: 5px;
}
.rate>span{
    font-size: 12px;
    color: #fdb338;
}
.tourPrice{
    color: #666666;
    font-size: 13px;
}
</style>