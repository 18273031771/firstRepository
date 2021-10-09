<template>
    <div class="bgs">
        <div class="nav">
            <div class="appL">
                <div class="mtImg"><img src="../../assets/img/mt.png" alt=""></div>
                <div class="mtTip">
                    <div style="font-size: 14px;">省钱利器 购物超划算</div>
                    <div style="font-size: 12px;">吃喝玩乐尽在美团</div>
                </div>
            </div>
            <div class="appR">
                <button>去App</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.bgs{
    width: 100%;
    height: 50px;
    background-color: #000000;
}
.nav{
    width: 90%;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.appL{
    display: flex;
    margin: auto 0;
}
.mtImg{
    width: 35px;
    height: 35px;
    margin: auto 0;
}
.mtImg img{
    width: 100%;
    height: 100%;
}
.appR{
    margin: auto 0;
}
.appR button{
    border: 0;
    background-color: #FFBD00;
    color: black;
    width: 55px;
    height: 30px;
    border-radius: 5px;
    font-size: 13px;
    
}
.mtTip div{
    color: white;
    margin-left: 8px;
}
</style>

