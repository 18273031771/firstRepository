<template>
  <div class="bots">
    <div class="foot">
      <div style="display: flex; margin-top: 20px;margin-left:8%">
        <p class="city">城市：</p>
        <span style="font-size: 14px; line-height: 43px">长沙</span>
      </div>
      <div class="footerDv">
        <ul class="footUl">
          <li style="width: 14%">首页</li>
          <li style="width: 9%">|</li>
          <li style="width: 9%">我的</li>
          <li style="width: 9%">|</li>
          <li style="width: 15%">美团下载</li>
          <li style="width: 9%">|</li>
          <li style="width: 12%">电脑版</li>
          <li style="width: 9%">|</li>
          <li style="width: 9%">帮助</li>
        </ul>
        <div class="footWord">
          <div class="footTip">
            友情链接：猫眼电影&#12288; &#12288; 大众点评&#12288; &#12288;
            美团旅行 &#12288; &#12288; 榛国名宿&#12288; &#12288;
            大众点评下载&#12288; 美团餐饮系统 美团餐饮培训
            快驴进货商家合作&#12288; &#12288; 商机/招聘
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 20px; padding-bottom: 20px; position: relative">
      <div class="hr"></div>
      <span class="mtAdr">&#12288;©2021 美团网 京ICP证070791号&#12288;</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bots{
  background-color: white;
}
.foot {
  width: 100%;
  margin: 0 auto;
}
.footerDv {
  width: 90%;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.city {
  font-size: 13px;
  color: #666;
}
.footUl li {
  font-size: 12px;
  text-align: center;
}
.footUl {
  display: flex;
  margin-top: 20px;
}
.footUl > li:nth-child(odd) {
  color: #fe8c00;
}
.footWord{
  width: 80%;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.footTip {
  margin-top: 20px;
  font-size: 12px;
  color: #666666;
  line-height: 22px;
  text-align: center;
}
.hr {
  width: 100%;
  display: block;
  border-top: 1px solid #999999;
  content: "";
  position: absolute;
  top: 30%;
}
.mtAdr {
  margin: 0 auto;
  display: block;
  width: 200px;
  font-size: 12px;
  color: #666666;
  text-align: center;
  position: relative;
  background-color: white;
}
</style>
