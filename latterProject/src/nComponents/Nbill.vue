<template>
  <!--选择发票抬头-->
    <div>
      <mt-header title="选择发票抬头" class="tit">
        <router-link to="" slot="left">
          <mt-button icon="back" @click="$router.back(-1)"></mt-button>
        </router-link>
      </mt-header>
      <div class="bill">
        不需要开发票
        <i class="el-icon-success success"></i>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { Checklist } from 'mint-ui';
  
  Vue.component(Checklist.name, Checklist);
    export default {
        name: "Nbill"
    }
</script>

<style scoped>
  .tit{
    font-size: .7rem;
    font-weight: 600;
  }
  .bill{
    background-color: #fff;
    margin-top: .5rem;
    padding: 0 .7rem;
    font-size: .7rem;
    color: #333;
    display: flex;
    align-items: center;
  }
  .success{
    font-size: .75rem;
    color: #ccc;
    font-weight: 400;
  }
</style>
