<template>
    <div class="L_preferential">
      <div class="L_head">
        <router-link :to="{path:'/nmine_load'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="L_headDiv">我的优惠</span>
      </div>
      <div class="L_nav">
        <router-link :to="{path:'/preferential/Lhongbao'}">
          <span class="pull-left" :style="span1" @click="L_span1">红包</span>
        </router-link>
        <router-link :to="{path:'/preferential/Ldaijinjuan'}">
          <span class="pull-right" :style="span2" @click="L_span2">商家代金卷</span>
        </router-link>
        <p class="clearfix"></p>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-preferential",
      data(){
          return{
            span1:{
              color:'#3190E8',
              borderBottom:'0.1rem solid #3190E8'
            },
            span2:{
              color:'black',
              borderBottom:''
            }
          }
      },
      methods:{
          L_span1(){
            this.span1.color='#3190E8'
            this.span1.borderBottom='0.1rem solid #3190E8'
            this.span2.color='black'
            this.span2.borderBottom=''
          },
        L_span2(){
          this.span2.color='#3190E8'
          this.span2.borderBottom='0.1rem solid #3190E8'
          this.span1.color='black'
          this.span1.borderBottom=''
        }
      },
      created(){
      }
    }
</script>

<style scoped>
  .L_head{
    padding: 0.6rem 0.1rem 0.4rem;
    width: 16rem;
    background: rgb(49,144,232);
    color: white;
    text-align: center;
    font-weight: bold;
  }
  .L_nav{
    width: 16rem;
    background: white;
    padding: 0.5rem 2.5rem 0.3rem;
    text-align: center;
  }
</style>
