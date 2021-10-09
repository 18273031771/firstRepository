<template>
    <div class="con">
        <div class="con-dv">
            <ul class="foodUl">
                <li class="foodLi" v-for="(item,index) in foodList" :key="index">
                    <div class="foodTop">
                        <div class="imgDv"><img :src="item.url" alt=""></div>
                        <div class="food-top-right">
                            <div class="name">{{item.name}}</div>
                            <div class="sec"><span><van-rate color="#FF4B10" size="13px" v-model="item.rate" readonly allow-half void-icon="star" void-color="#eee" /></span><span class="price">{{item.price}}</span><span class="distance">{{item.distance}}</span></div>
                            <div class="third"><span class="brief">{{item.brief}}</span><span class="paiming">{{item.paiming}}</span></div>
                        </div>
                    </div>
                    <div class="foodBottom">
                        <div class="food-bottom-left">
                            <span class="lijian">{{item.lijian}}</span>
                        </div>
                        <div class="food-bottom-right">
                            <div class="youhui"><span class="hui">惠</span><span class="youhuiqian">{{item.youhui}}</span></div>
                            <div class="youhui" v-if="(item.quan)"><span class="quan">券</span><span class="youhuiqian">{{item.quan}}</span></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    // props:['a'],
    data(){
        return{
            value:null,
            foodList:[]
        }
    },
    mounted(){
        this.getFoodList()
        // this.a()
    },
    methods:{
        async getFoodList(){
            const result=await this.$http.get(`/api/getFoodList`);
            if(result.status==200){
                this.foodList=result.data.message
            }else if(result.status==400){
                console.log("首页数据请求失败");
            }
        }
    }
}
</script>

<style scoped>
.con{
    width: 100%;
    height: 100%;
    background-color: white;
}
.con-dv{
    background-color: white;
}
.foodLi{
    list-style: none;
    width: 100%;
    height: 150px;
    /* margin-top: 1%; */
    /* border: 1px solid red; */
}
.foodTop{
    width: 100%;
    height: 100px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
}
.imgDv{
    width: 30%;
    height: 100%;
    /* margin-top: 1%; */
}
.imgDv img{
    width: 98%;
    height: 98%;
    margin-top: 2%;
    margin-left: 2%;
}
.food-top-right{
    width: 67%;
    height: 100%;
}
.name{
    color: #1b1b1b;
    /* letter-spacing: 1px; */
    font-size: 16px;
    overflow: hidden;
    text-overflow:initial;
    white-space:nowrap;
    /* font-weight: 550; */
    margin-top: 3%;
}
.price{
    color: #666666;
    font-size: 13px;
    letter-spacing: 0.2px;
}
.sec{
    margin-top: 2%;
}
.third{
    margin-top: 4%;
}
.brief{
    color: #666666;
    font-size: 13px;
    letter-spacing: 0.2px;
}
.paiming{
    display: inline-block;
    font-size: 13px;
    color: #FF4B10;
    padding-left: 3%;
}
.distance{
    float: right;
    color: #666666;
    font-size: 12px;
    padding-right: 4%;
    letter-spacing: 1px;
}
.foodBottom{
    width: 100%;
    height: 50px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-between;
}
.food-bottom-left{
    width: 30%;
    height: 100%;
}
.food-bottom-right{
    width: 67%;
    height: 100%;
    /* border: 1px solid black; */
    margin-top: -1%;
}
.lijian{
    border: 1px solid #FF8226;
    font-size: 12px;
    color: #FF8226;
    letter-spacing: 2px;
    float: right;
    margin-top: 3%;
    border-radius: 2px;
}
.youhui{
    display: flex;
    flex-wrap: nowrap;
    margin-top: 2%;
    padding-right: 2%;
    /* border: 1px solid red; */
    line-height: 20px;
}
.youhui .youhuiqian{
    overflow: hidden;
    text-overflow:initial;
    white-space:nowrap;
    font-size: 12px;
    color: #666666;
}
.hui,
.quan{
    display: block;
    background-color: #FF4B10;
    color: white;
    width: 18px;
    height: 18px;
    border-radius: 2px;
    line-height: 18px;
    text-align: center;
    margin-right: 5px;
    font-size: 14px;
}
</style>