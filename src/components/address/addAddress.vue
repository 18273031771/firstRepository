<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-delete
      :address-info="addressInfo"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import area from "../../utils/area";
import { Toast } from "vant";

export default {
  data() {
    return {
      areaList: {
        province_list: area.province_list,
        city_list: area.city_list,
        county_list: area.county_list,
      },
      searchResult: [],
      id: "",
      addressInfo: {},
    };
  },
  mounted() {
    this.editObj();
  },
  methods: {
    async onSave(item) {
      if (this.$route.query.id) {
        const result = await this.$http.post("/api/editAddress",{
          id:this.$route.query.id,
          obj:item
        })
        if(result.data.status==200){
          Toast("修改地址成功");
          this.$router.push("/address")
        }else{
          Toast("修改地址失败请重试");
        }
      } else {
        const result = await this.$http.post("/api/addAddress", {
          obj: item,
        });
        if (result.data.status == 200) {
          Toast("新增地址成功");
          this.$router.push("/address");
        }
      }
    },
    async onDelete() {
      const result = await this.$http.post("/api/delAddress",{
        id:this.$route.query.id
      })
      if(result.data.status==200){
          Toast("删除地址成功");
          this.$router.push("/address");
      }
    },
    async editObj() {
      this.id = this.$route.query.id;
      const result = await this.$http.post("/api/editList", {
        id: this.id,
      });
      if (result.data.status == 200) {
        this.addressInfo = result.data.message[0];
        console.log(this.addressInfo);
      }
    },
  },
};
</script>

<style scoped>
</style>
