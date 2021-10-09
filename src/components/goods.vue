<template>
    <div class="container">
        <div class="dv">
            <ul>
                <li>
                    <div class="div-img"></div>
                    <div class="li-right"></div>
                </li>
                <li>
                    <div class="div-img"></div>
                    <div class="li-right"></div>
                </li>
                <li>
                    <div class="div-img"></div>
                    <div class="li-right"></div>
                </li>
                <li>
                    <div class="div-img"></div>
                    <div class="li-right"></div>
                </li>
                <li>
                    <div class="div-img"></div>
                    <div class="li-right"></div>
                </li>
                <li>
                    <div class="div-img"></div>
                    <div class="li-right"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.dv{
    width: 100%;
}
ul{
    width: 100%;
    height: 800px;
}
li{
    width: 98%;
    height: 15%;
    border: 1px solid gray;
    list-style: none;
}
.div-img{
    width: 30%;
    height: 100%;
    border: 1px solid red;
}
li div{
    float: left;
}
</style>