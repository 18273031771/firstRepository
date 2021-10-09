<template>
  <div class="con">
    <div class="dv">
      <van-dropdown-menu style="border-bottom: 1px solid rgb(241, 240, 240)">
        <!-- 全部美食 -->
        <van-dropdown-item ref="check" v-model="check" :options="option1" />

        <!-- 附近商家 -->
        <van-dropdown-item title="附近商家">
          <van-tabs>
            <van-tab title="商圈">商圈</van-tab>
            <van-tab title="地铁">地铁</van-tab>
          </van-tabs>
        </van-dropdown-item>

        <!-- 智能排序 -->
        <van-dropdown-item v-model="value3" :options="option3" />

        <!-- 筛选 -->
        <van-dropdown-item title="筛选" ref="item">
          <van-cell center title="只看免预约">
            <template #right-icon>
              <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
          <van-cell center title="节假日可用">
            <template #right-icon>
              <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
            </template>
          </van-cell>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: 0,
      value2: "附近商家",
      value3: 0,
      switch1: false,
      switch2: false,
      option1: [
        { text: "全部美食", value: 0 },
        { text: "香菜", value: 1 },
        { text: "小吃快餐", value: 3 },
        { text: "面包甜点", value: 4 },
        { text: "火锅", value: 5 },
        { text: "饮品店", value: 6 },
        { text: "聚餐宴请", value: 7 },
        { text: "烧烤烤串", value: 8 },
        { text: "生日蛋糕", value: 9 },
        { text: "中式烧烤/烤串", value: 10 },
        { text: "西餐", value: 11 },
        { text: "其他美食", value: 12 },
        { text: "特色菜", value: 13 },
      ],
      // option2: [
      //   { text: "全部美食", value: 0 },
      // ],
      option3: [
        { text: "智能排序", value: 0 },
        { text: "离我最近", value: 1 },
        { text: "好评优先", value: 2 },
        { text: "人气最高", value: 3 },
      ],
    };
  },
  mounted() {
    // this.$refs.check.toggle();
    this.change();
},
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    change() {
      // var dv=document.getElementsByClassName("dv")[0]
      // dv.onclick=function(){
      //   this.style.position="absolute";
      //   this.style.top="50px";
      // }
    },
  },
};
</script>
<style scoped>
.dv {
  /* margin-top: 10px; */
  /* border: 1px solid red; */
}
</style>