<template>
  <!--底部-->
    <div>
      <mt-tabbar>
          <mt-tab-item id="外卖">
            <router-link :to="{path:'/first'}">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconphone"></use>
            </svg><br>
            <span>外卖</span>
            </router-link>
          </mt-tab-item>
        <mt-tab-item id="搜索">
          <router-link :to="{path:'/search'}">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconphone"></use>
          </svg><br>
          <span>搜索</span>
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="订单">
          <router-link :to="{path:'/order'}">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconphone"></use>
          </svg><br>
          <span>订单</span>
          </router-link>
        </mt-tab-item>
        
          <mt-tab-item id="我的">
            <router-link :to="{path:'/nmine'}">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconphone"></use>
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
        name: "Bottom"
    }
</script>

<style scoped>
 svg{
   font-size: 1.4rem;
   color: #000;
 }
 span{
   color: #000;
 }
 a{
    text-decoration: none;
  }
</style>
