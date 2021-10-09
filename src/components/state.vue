<template>
  <div>状态管理{{ $store.state.login }}
      <button @click="addnum">增加</button>
      <button @click="reducenum">减少</button>
      <ul>
          <li v-for="(item,index) in msg" :key="index">{{item.tit}}-----{{item.num}}------{{item.classify}}</li>
      </ul>
      {{$store.getters.choose}}
      <hr>
      {{$store.getters.hot('折扣')}}
      <!-- {{$store.modules}} -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        msg:null
    };
  },
  created() {
    console.log(11);
    console.log("刷选",this.$store.getters.hot("折扣"))
    console.log(this.$store);
    console.log(this.$store.state.search.login);
    this.msg=this.$store.state.list
  },
  methods:{
    addnum(){
        this.$store.commit("add",1)
    },
    reducenum(){
        this.$store.dispatch("reduce",-1)
    }
  }
};
</script>

<style scoped>
</style>