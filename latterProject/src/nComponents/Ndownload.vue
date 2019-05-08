<template>
    <div class="middle">
      <mt-header fixed title="下载">
        <router-link to="/nmine" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <div class="elm">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconeliaomo"></use>
        </svg><br>
        <p>下载饿了么APP</p>
        <button class="btn btn-success btn-block">下载</button>
      </div>
    </div>
</template>

<script>
  import { Button } from 'mint-ui';
  import Vue from "vue";
  
  Vue.component(Button.name, Button);
    export default {
        name: "Ndownload"
    }
</script>

<style scoped>
  .middle{
    display: flex;
    justify-content: center;
  }
  .elm{
    margin-top: 3rem;
    text-align: center;
    width: 90%;
  }
  .elm .icon{
    font-size: 9rem;
  }
  .elm p{
    font-size: .8rem;
    color: #666;
    margin: .3rem 0 .8rem 0;
  }
</style>
