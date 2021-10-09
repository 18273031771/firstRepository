<template>
    <div class="con">
        <div class="top">
            <div class="title">猫眼电影</div>
        </div>

        <div class="topSelect">
            <div>
                <van-tabs line-width="80px" title-active-color="#ef4238">
                    <van-tab title-style="font-size:15px; font-weight:600" style="border-top:1px solid #ccc;" title="正在热映">
                        <nowContent/>
                    </van-tab>
                    <van-tab title-style="font-size:15px; font-weight:600" style="border-top:1px solid #ccc" title="即将上映">
                        <willContent/>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <!-- <moviesTabbar/> -->
    </div>
</template>



<script>
import nowContent from '../components/nowContent.vue'
import willContent from '../components/willContent.vue'
// import moviesTabbar from './components/moviesTabbar.vue'
export default {
    components:{
        nowContent,
        willContent
        // moviesTabbar
    },
    data(){
        return{}
    },
    mounted(){
    },
    methods:{}
}
</script>

<style scoped>
.con{
    width: 100%;
    height: auto;
    background-color: #fff;
}
.top{
    width: 100%;
    height: 50px;
    background-color: #f03d37;
}
.title{
    width: 60%;
    height: 100%;
    margin: 0 auto;
    color: white;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
}
.topSelect{
    width: 100%;
    height: 50px;
}

</style>