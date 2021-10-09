<template>
    <div>
      <van-dropdown-menu>
        <!-- 全城 -->
        <van-dropdown-item title="品牌">
        <van-tabs>
            <van-tab title="商区">商圈</van-tab>
            <van-tab title="地铁站">地铁</van-tab>
          </van-tabs>
        </van-dropdown-item>

        <!-- 品牌 -->
        <van-dropdown-item v-model="allCity" :options="option1" />

        <!-- 特色 -->
        <van-dropdown-item title="特色"/>
      </van-dropdown-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      allCity: 0,
      value2: '品牌',
      option1: [
        { text: "全城", value: 0 },
        { text: "香菜", value: 1 },
        { text: "小吃快餐", value: 3 },
        { text: "面包甜点", value: 4 },
        { text: "火锅", value: 5 },
        { text: "饮品店", value: 6 }
      ],
      cinemaList:[],
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    }
  },
}
</script>

<style scoped>

</style>
