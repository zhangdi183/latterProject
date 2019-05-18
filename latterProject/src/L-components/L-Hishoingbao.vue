<template>
    <div class="hishongbao">
      <div class="L_head">
        <router-link :to="{path:'/preferential'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="L_headDiv">历史红包</span>
      </div>
      <!--这个是可用红包-->
      <div class="useHongBao" v-for="(d,i) in Arr" :key="i">
        <div class="topImg"></div>
        <div class="LmHongbao">
          <div>
            <span>￥<span class="LmHongbaospan">{{d.amount}}</span></span>
            <h5><small>满20元可用</small></h5>
          </div>
          <div class="LmCenter">
            <h5>{{d.name}}</h5>
            <p>{{d.end_date}}到期</p>
            <p>限收货手机号为{{d.phone}}</p>
          </div>
        </div>
          <!--<img src="../L-imgs/过期.png" height="79" width="88" style="color: red; position: absolute; top: 2.8rem; right: 0rem;"/>-->
    </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-Hishoingbao",
        data(){
          return {
            Arr:[]
          }
        },
      created(){
          Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/expired_hongbaos?limit=20&offset=0').then((res)=>{
           this.Arr=res.data
            console.log(res.data)
          })
      }
    }
</script>

<style scoped>
  .hishongbao{
    position: relative;
  }
  .L_head{
    padding: 0.6rem 0.1rem 0.4rem;
    width: 16rem;
    background: rgb(49,144,232);
    color: white;
    text-align: center;
    font-weight: bold;
  }
  .useHongBao{
    width: 14rem;
    background: white;
    margin: 0.5rem auto;
    padding: 0.5rem 0.3rem 0.3rem;
    border-radius: 0.2rem;
    background: url("../L-imgs/过期.png") no-repeat white;
    background-position:10rem 0.5rem ;
  }
  .topImg{
    width: 14rem;
    background: url("../L-imgs/expired.png") repeat-x;
    height: 0.3rem;
    background-size: contain;
    position: relative;
    top: -0.5rem;
    left: -0.3rem;
    border-radius: 0.2rem 0.2rem 0 0;
  }
  .LmHongbao{

  }
  .LmHongbao div:first-child{
    display: inline-block;
    padding: 0.3rem;
    border-right: 0.05rem #9f9f9f dashed ;
    box-sizing: border-box;
    color: #9f9f9f;

  }
  .LmHongbaospan{
    font-size: 1.4rem;
    font-weight: bold;
  }
  .LmCenter{
    display: inline-block;
    padding: 0.4rem;
  }
  .LmCenter h5,p{
    position:relative;
    top: -0rem;
  }
  .LmCenter p{
    font-size: 0.5rem;
    color: #9f9f9f;
  }
</style>
