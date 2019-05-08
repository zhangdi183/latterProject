<template>
  <!--服务中心-->
    <div>
      <div class="serve">
        <mt-header title="服务中心">
          <router-link to="/nmine" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="two">
        <router-link to="/" class="surplus">
          <svg class="icon icon1" aria-hidden="true">
            <use xlink:href="#iconfuwuzhongxin"></use>
          </svg><br>
          <span>在线客服</span>
        </router-link>
        <router-link to="/" class="surplus">
          <svg class="icon icon2" aria-hidden="true">
            <use xlink:href="#icondianhua"></use>
          </svg><br>
          <span>在线热线</span>
        </router-link>
        <div class="clean"></div>
      </div>
      <!--热门问题-->
      <div>
        <mt-cell-swipe title="热门问题" class="problem"></mt-cell-swipe>
        <router-link to="/" v-for="(data,index) in problem" :key="index">
          <mt-cell-swipe :title="data" is-link></mt-cell-swipe>
        </router-link>
      </div>
    </div>
</template>

<script>
  import { CellSwipe } from 'mint-ui';
  import Vue from 'vue'
  
  Vue.component(CellSwipe.name, CellSwipe);
    export default {
        name: "Nscenter",
      data(){
        return{
          problem:{},
        }
      },
      mounted(){
        Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res)=>{
          console.log(res.data);
          this.problem=res.data;
        }).catch((error)=>{
          console.log('请求错误!',error);
        });
      },
    }
</script>

<style scoped>
  .clean{
    clear: both;
  }
  .serve{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .surplus{
    float:left;
    color: #000;
    width: 49.7%;
    text-align: center;
    border-right: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    text-decoration: none;
    padding: .8rem 0;
    background: #fff;
  }
  .icon{
    font-size: 1.2rem;
  }
  .icon1{
    color:rgb(255, 123, 82);
  }
  .icon2{
    color: rgb(6, 255, 39);
  }
  .surplus span{
    font-size: .6rem;
    color: #666;
  }
  .problem{
    padding: .5rem 0;
  }
</style>
