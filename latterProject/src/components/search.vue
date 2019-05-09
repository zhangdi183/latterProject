<template>
    <div class="search">
      <!--顶部-->
      <mt-header title="搜索">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <!--搜索-->
      <div class="top">
        <mt-search v-model="value" cancel-text="取消" placeholder="请输入商家或美食名称"   style="width:80%;height:auto;" class="left"></mt-search>
        <mt-button size="small" type="primary" class="btn" @click="getVal">提交</mt-button>
        <div class="clean"></div>
      </div>
      <!--搜索历史-->
      <mt-cell-swipe v-for="his in vals" :title="his">
        <span class="glyphicon glyphicon-remove" aria-hidden="true" @click="delHis"></span>
      </mt-cell-swipe>
    </div>
</template>
<script>
  import { Search } from 'mint-ui';
  import { Header } from 'mint-ui';
  import Vue from "vue";
  import { Button } from 'mint-ui';
  import { CellSwipe } from 'mint-ui';

  Vue.component(CellSwipe.name, CellSwipe);
  Vue.component(Button.name, Button);
  Vue.component(Header.name, Header);
  Vue.component(Search.name, Search);
    export default {
        name: "search",
      data(){
          return{
            value:'',
            vals:[]
          }
      },
      methods:{
          getVal(){
            console.log(this.value);
            this.vals.push(this.value);
          },
        delHis(){
        
        }
      },
      mounted(){
        Vue.axios.get(`https://elm.cangdu.org/v4/restaurants?geohash=${this.$store.state.cityinfo.geohash}&keyword=${this.value}`).then((res)=>{
          console.log(res.data);
        }).catch((error)=>{
          console.log('请求错误!',error);
        });
      }
    }
</script>

<style scoped>
  .clean{
    clear: both;
  }
  .top{
    background-color: #d9d9d9;
  }
  .left, .btn{
    float: left;
  }
  .btn{
    margin: .2rem 0;
  }
</style>
