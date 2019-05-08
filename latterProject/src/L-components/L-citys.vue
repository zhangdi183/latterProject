<template>
  <div class="L_citys">
    <div class="L_head">
      <div>
        <span class="pull-left">ele.me</span>
        <!--这是一个路由跳转按钮-->
        <span class="pull-right">登录|注册</span>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="L_text">
      <span class="L_t_left pull-left">当前定位城市:</span>
      <span class="L_t_right pull-right">定位不准时,&nbsp;&nbsp;&nbsp;请在城市列表中选择</span>
      <div class="clearfix"></div>
    </div>
    <!--这是当前定位到的城市(后台返回数据)-->
    <div class="L_btn">
      <span class="text text-primary">{{LmLocatingCity.name}}</span>
      <!--这是城市选择-->
      <router-link :to="{path:'/find',query:{Lcitysname:LmLocatingCity.name,LMcityid:LmLocatingCity.id}}"><span class="glyphicon glyphicon-menu-right pull-right"></span></router-link>
      <div class="clearfix"></div>
    </div>
    <div class="L_hotCity">
      <span class="L_city">热门城市</span>
      <!--这是后台数据返回的热门城市-->
      <li class="text text-primary L_cityLi" v-for="(d,i) in LmHotCity" id="i" @click="LmCitysGet($event)"><router-link :to="{path:'/find',query:{Lcitysname:d.name,LMcityid:d.id}}">{{d.name}}</router-link></li>
    </div>
    <div class="L_hotCity" v-for="(key,value) in LmAllCity">
      <span class="L_city">{{value}}</span>
      <li class="text text-muted L_AllcityLi" v-for="data in key"><router-link :to="{path:'/find',query:{Lcitysname:data.name,LMcityid:data.id}}">{{data.name}}</router-link></li>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "L-citys",
    data(){
      return{
        LmLocatingCity:{},
        LmHotCity:[],
        LmAllCity:{},
        LmCityId:Number
      }
    },
    methods:{
      LmCitysGet(e){

      }
    },
    created(){
      //这是当前定位城市返回的数据
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=guess').then((res)=>{
        this.LmLocatingCity=res.data

      }).catch((err)=>{
        console.log('请求错误')
      });
      //这是热门城市返回的数据
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=hot').then((res)=>{
        this.LmHotCity = res.data
      }).catch((err)=>{
        console.log('请求出错',err)
      });
      //这是所有城市返回的数据
      Vue.axios.get('https://elm.cangdu.org/v1/cities?type=group').then((res)=>{
        this.LmAllCity = res.data
      }).catch((err)=>{
        console.log('请求出错',err)
      });

    }

  }
</script>

<style scoped>
  .L_head{
    width: 16rem;
    background: rgb(49,144,232);
  }
  .L_head span{
    color: white;
    padding: 0.7rem 0.5rem 0.3rem;
    font-size: 0.75rem;
    font-weight: 400;
  }
  .L_text{
    border-bottom:0.01rem solid rgba(0,0,0,0.6);
    padding: 0 0.45rem;
    margin: 0.5rem 0 0;
  }
  .L_text span{
    font-size: 0.5rem;
    padding:0.7rem 0 0.3rem;
  }
  .L_t_right{
    color: #9f9f9f;
    font-weight: bold;
  }
  .L_btn{
    color:#9f9f9f;
    padding: 0.5rem 0.5rem;
    border-bottom:0.1rem solid rgba(0,0,0,0.2);
  }
  .L_hotCity{
    margin: 1rem 0;
    border-top:0.1rem solid rgba(0,0,0,0.2);
    float: left;
    font-size: 0;
  }
  .L_city{
    font-size: 0.6rem;
    padding: 0.6rem 0.5rem;
    display: block;
  }
  .L_cityLi{
    width: 4rem;
    padding: 0.98rem 0;
    list-style: none;
    text-align: center;
    border-top: 0.03rem solid #9f9f9f;
    border-right: 0.03rem solid #9f9f9f;
    font-size: 0.65rem;
    display: inline-block;
    vertical-align: center;
  }
  .L_AllcityLi{
    width: 4rem;
    list-style: none;
    text-align: center;
    /*border-top: 0.03rem solid #9f9f9f;*/
    /*border-right: 0.03rem solid #9f9f9f;*/
    font-size: 0.65rem;
    display: inline-block;
    line-height: 0.98rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
  }
</style>
