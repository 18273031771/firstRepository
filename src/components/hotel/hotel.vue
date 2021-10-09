<template>
    <div class="con">
        <div class="topImg">
            <img src="../../assets/img/mt酒店.jpg" alt="">
        </div>
        <div class="sear">
            <div class="mid">
                <div>
                    <ul class="searchUl">
                        <li id="lis" class="redBot" style="border-right:1px solid pink">全日房</li>
                        <li id="lis">钟点房</li>
                    </ul>
                </div>
                <div class="seaBotFirst">
                    <van-form style="font-size:18px">
                    <van-field
                        label-width="3.2rem"
                        name="目的地"
                        label="目的地"
                        v-model="city"
                    />
                    <van-field
                        label-width="4rem"
                        name="入住时间"
                        label="入住时间"
                        v-model="time"
                    />
                    <van-field
                        label-width="4rem"
                        name="离店时间"
                        label="离店时间"
                        v-model="time1"
                    />
                    <div style="margin: 16px;">
                        <van-button class="btn"  block type="info" native-type="submit">查找酒店</van-button>
                    </div>
                    </van-form>
                </div>
                <div class="seaBotSecond">
                    <van-form style="font-size:18px">
                    <van-field
                        label-width="3.2rem"
                        name="目的地"
                        label="目的地"
                        v-model="city"
                        readonly
                    />
                    <van-field
                        label-width="4rem"
                        name="入住时间"
                        label="入住时间"
                        v-model="time"
                        readonly
                    />
                    <van-field
                        label-width="4rem"
                        name="搜索"
                        label="搜索"
                        v-model="adre"
                        readonly
                    />
                    <div style="margin: 16px;">
                        <van-button class="btn"  block type="info" native-type="submit">查找酒店</van-button>
                    </div>
                    </van-form>
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="footer-top" v-if="token">
                <button style="width:90px" @click="entire()">退出登录</button>
            </div>
            <div class="footer-top" v-else>
                <button @click="go('/account')">登录</button>
                <button @click="go('/register')">注册</button>
            </div>
            <div class="footer-bot">
                <ul class="fooUl">
                    <li><a href="">首页</a></li>
                    <li><a href="">订单</a></li>
                    <li><a href="">客户端</a></li>
                    <li><a href="">电脑版</a></li>
                    <li><a href="">帮助</a></li>
                </ul>
            </div>
        </div>


    </div>
</template>


<script>
export default {
    data(){
        return{
            city:"长沙",
            time:"8月23日",
            time1:"8月24日",
            adre:"我的附近",
            token:""
        }
    },
    mounted(){
        this.token=localStorage.getItem("token")
        console.log(this.token);
        this.check()
    },
    methods:{
        check(){
            // var lis=document.getElementsByTagName("li")
            var lis=document.getElementsByClassName("searchUl")[0].children;
            for(var i=0;i<lis.length;i++){
                lis[i].onclick=function(){
                    if(lis[1].className==="redBot"){
                        this.nextElementSibling.setAttribute("class","")
                        this.setAttribute("class","redBot" );
                        document.getElementsByClassName("seaBotFirst")[0].style.display="block"
                        document.getElementsByClassName("seaBotSecond")[0].style.display="none"
                        
                    }else if(lis[0].className==="redBot"){
                        this.previousElementSibling.setAttribute("class","")
                        this.setAttribute("class","redBot" );
                        document.getElementsByClassName("seaBotFirst")[0].style.display="none"
                        document.getElementsByClassName("seaBotSecond")[0].style.display="block"
                    }
                }
            }
        },
        go(path){
            this.$router.push(path)
        },
        entire(){
            if(confirm("是否退出账号？")){
                localStorage.removeItem("token")
                this.$router.push("/account")
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
    position: relative;
}
.topImg{
    width: 100%;
    height: 180px;
}
.topImg img{
    width: 100%;
    height: 100%;
}
.sear{
    position: relative;
    display: flex;
    justify-content: center;
}
.mid{
    width: 92%;
    height: 250px;
    background-color: white;
    position: absolute;
    top: -75px;
}
.searchUl li{
    float: left;
    list-style: none;
    width: 49%;
    height: 50px;
    line-height: 50px;
    /* border: 1px solid red; */
    text-align: center;
    color: #333333;
    font-size: 17px;
}
.btn{
    background-color: #F9504C;
    color: white;
    border: 0;
}
.redBot{
    border-bottom: 4px solid red;
}
.seaBotSecond{
    display: none;
}
.footer{
    width: 100%;
    height: 12%;
    position: absolute;
    bottom: 0;
}
.footer-top{
    display: flex;
}
.fooUl{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.fooUl li{
    float: left;
    list-style: none;
}
.fooUl li a{
    font-size:14px;
    color: #0082E0;
}
.footer-top button{
    width: 55px;
    height: 28px;
    border: 1px solid #F9504C;
    color: #F9504C;
    margin-left: 3%;
}
</style>
