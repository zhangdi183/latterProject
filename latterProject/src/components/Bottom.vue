<template>
  <!--底部-->
    <div>
      <mt-tabbar>
          <mt-tab-item id="外卖">
            <router-link :to="{path:'/first'}" class="btnc">
            <svg class="icon icon1" aria-hidden="true">
              <use xlink:href="#iconSSS"></use>
            </svg><br>
            <span>外卖</span>
            </router-link>
          </mt-tab-item>
        <mt-tab-item id="搜索">
          <router-link :to="{path:'/search'}" class="btnc">
          <svg class="icon icon2" aria-hidden="true">
            <use xlink:href="#iconzhizhen"></use>
          </svg><br>
          <span>搜索</span>
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="订单">
          <router-link :to="{path:'/order'}" class="btnc">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icondingdan"></use>
          </svg><br>
          <span>订单</span>
          </router-link>
        </mt-tab-item>
        
          <mt-tab-item id="我的">
            <router-link :to="{path:'/nmine'}" class="btnc">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icongerenzhongxinyonghu01"></use>
            </svg><br>
            <span>我的</span>
            </router-link>
          </mt-tab-item>
        
      </mt-tabbar>

    </div>
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui';
  import Vue from "vue";
  
  Vue.component(Tabbar.name, Tabbar);
  Vue.component(TabItem.name, TabItem);
  
    export default {
        name: "Bottom",
      data(){
          return{
          
          }
      },
      methods:{
      
      }
    }
</script>

<style scoped>
 svg{
   font-size: 1rem;
   color: #333;
 }
 span{
   color: #000;
 }
 a{
    text-decoration: none;
  }
 .icon{
   margin: .2rem 0;
 }
  .btnc:focus .icon{
    color: #3a83ff;
  }
</style>
