<template>
  <!--选择发票抬头-->
    <div>
      <mt-header title="选择发票抬头" class="tit">
        <router-link to="" slot="left">
          <mt-button icon="back" @click="$router.back(-1)"></mt-button>
        </router-link>
      </mt-header>
      <div class="bill" @click="btnSuccess">
        不需要开发票
        <span class="icon_s" :class="{icon_n:issuc}"><i class="el-icon-success"></i></span>
        <span class="clean"></span>
      </div>
      <p class="selected">
        <router-link to="">
          <button type="button" class="btn btn-success btn-lg btn-block" @click="$router.back(-1)">确定</button>
        </router-link>
      </p>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { Checklist } from 'mint-ui';
  
  Vue.component(Checklist.name, Checklist);
    export default {
        name: "Nbill",
      data(){
          return{
            issuc:false,
          }
      },
      methods:{
        btnSuccess(){
          this.issuc=!this.issuc;
        }
      }
    }
</script>

<style scoped>
  .clean{
    clear: both;
  }
  .tit{
    font-size: .7rem;
    font-weight: 600;
  }
  .bill{
    background-color: #fff;
    margin-top: .5rem;
    box-sizing: border-box;
    padding: .8rem .7rem;
    font-size: .7rem;
    color: #333;
  }
  .bill .icon_s{
    font-size: .75rem;
    color: #ccc;
    font-weight: 400;
    float: right;
  }
  .bill .icon_n{
    color: #4cd964;
  }
  .selected{
    width: 100%;
    padding: 0 .5rem;
    margin: .8rem 0;
  }
  .btn{
    border: 0;
  }
  
</style>
