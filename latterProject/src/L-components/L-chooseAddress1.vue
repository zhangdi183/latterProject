<template>
  <div>
    <div class="L_head">
      <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
      <span class="L_headDiv">搜索地址</span>
    </div>
    <div style="background: white;padding: 0.3rem">
      <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="V">
      <button class="btn btn-primary" @click="sure">确认</button>
    </div>
    <div class="text-center text-muted" style="margin-top: 30%" v-if="isShow">
      <p>找不到地址?</p>
      <p>请尝试输入小区,写字楼或学校名</p>
      <p>详细地址(如门牌号)可稍后输入哦</p>
    </div>
    <div class="showData">
      <!--展示数据-->
      <div v-for="(data,index) in Arr" class="data">
        <router-link :to="{path:'/LshopcarAddress',query:{
        name:data.name,jingwei:data.geohash
        }}">
          <h5>{{data.name}}</h5>
          <h5><small>{{data.address}}</small></h5>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "L-chooseAddress",
    data(){
      return{
        V:'',
        Arr:[],
        isShow:true
      }
    },
    methods:{
      sure(){
        let a='https://elm.cangdu.org/v1/pois?city_id=32&'+'keyword='+this.V+'&type=search'
        Vue.axios.get(a).then((res)=>{
          // console.log(res.data)
          this.Arr=res.data
        });
        this.isShow=false
      }
    },
  }
</script>

<style scoped>
  .L_head{
    padding: 0.6rem 0.1rem 0.4rem;
    width: 16rem;
    background: rgb(49,144,232);
    color: white;
    text-align: center;
    font-weight: bold;
  }
  input{
    width: 12rem;
    line-height: 1.3rem;
    vertical-align: baseline;
    font-size: 0.65rem;
    margin-right: 0.5rem;
    border: 0.05rem solid #9f9f9f;
    border-radius: 0.3rem;
    padding-left:0.3rem;
    outline: none;
  }

  .data{
    padding: 0.3rem;
    border-bottom: 0.05rem solid #9f9f9f;
  }
  .showData{
    position: absolute;
    top: 5rem;
    width: 16rem;
  }
</style>

