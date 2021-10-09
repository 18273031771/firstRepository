import Vue from 'vue'
import Vuex from 'vuex'
import search from './search.js'

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        token:'',
        login:true,
		list:[
			{id:"123",tit:"产品1",money:99,num:1,choose:true,classify:["热门","推荐"]},
			{id:"456",tit:"产品2",money:99,num:2,choose:false,classify:["其他","推荐"]},
			{id:"789",tit:"产品3",money:199,num:3,choose:false,classify:["热门","折扣"]},
			{id:"666",tit:"产品4",money:99,num:4,choose:true,classify:["其他","推荐"]}
		]
    },
    getters:{//计算属性
        choose:function(state){
            let arr=state.list
            let newarr=arr.filter(function(val){
                return val.choose
            })
            return newarr
        },
        hot:function(state){
            return function(val){
                let arr=state.list
                let newarr=arr.filter(function(v){
                    return new Set(v.classify).has(val)
                })
                return newarr
            }
        }
    },
    mutations:{//同步
        add:function(state,val){
            state.list.forEach(function(v){
                v.num+=val
            })
        },
        setToken:function(state,token){
            state.token=token
        }
    },
    actions:{
        reduce:function(state,val){
            setTimeout(function(){
                state.commit("add",val)
            },1000)
        }
    },
    modules:{
        search
    }
})