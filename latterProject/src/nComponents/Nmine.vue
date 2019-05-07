<template>
  <div>
    <!--顶部-->
    <mt-header title="我的" class="nhead">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!--信息 >-->
    <div class="infor">
      <div>
        <p class="p1">登录/注册</p>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconphone"></use>
        </svg>
        <p class="p2">暂无绑定手机号</p>
        <span>></span>
      </div>
      <!--余额-->
      <div>
      
      </div>
    </div>
    <!--订单-->
    <mt-cell-swipe title="我的订单"></mt-cell-swipe>
  </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import Vue from "vue";
  import { CellSwipe } from 'mint-ui';

  Vue.component(CellSwipe.name, CellSwipe);
  Vue.component(Header.name, Header);
  export default {
    name: "Nmine",
    /*mounted(){
      Vue.axios.post('https://elm.cangdu.org/v1/addimg/:type').then((res)=>{
        console.log(1111,res.data);
      }).catch((error)=>{
        console.log('请求错误!',error);
      });
    },*/
  }
</script>

<style scoped>
  .nhead{
    color: #fff;
    font-size: .8rem;
    font-weight: 700;
    padding: .8rem .5rem;
    background-color: #3190e8;
    border-bottom: 1px rgba(204, 204, 204, 0.73) solid;
  }
  .infor{
    background-color: #3190e8;
    color: #fff;
  }
  .infor .p1{
    font-size: .8rem;
    font-weight: 700;
  }
  .infor .p2{
    font-size: .6rem;
    font-weight: 500;
    display: inline-block;
  }
  .infor span{
    text-align: right;
  }
</style>
