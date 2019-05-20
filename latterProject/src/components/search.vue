x<template>
    <div class="search">
      <!--顶部-->
      <mt-header title="搜索">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="$router.back(-1)"></mt-button>
        </router-link>
      </mt-header>
      <!--搜索-->
      <div class="top">
        <mt-search v-model="value" cancel-text="" class="left" aria-hidden="true" placeholder="请输入商家或美食名称" style="width:80%;height:auto;"></mt-search>
        <span class="glyphicon glyphicon-remove del_btn posi" aria-hidden="true" @click="delVal"></span>
        <mt-button size="small" type="primary" class="btn" @click="getVal">提交</mt-button>
        <div class="clean"></div>
      </div>
      <!--搜索历史-->
      <div class="his_all" v-if="hide" v-cloak>
        <div class="history">搜索历史</div>
        <ul>
          <li v-for="(his,index) in vals" class="his" :key="index" @click="senSearch(his)">{{his}}
            <span class="glyphicon glyphicon-remove icon" aria-hidden="true" @click.stop="delHis(index)"></span>
          </li>
          <li class="qk" @click="delAll">清空历史记录</li>
        </ul>
      </div>
      <!--返回数据-->
      <div class="back" v-if="hide1" v-cloak>
        <div class="sj">商家</div>
        <ul>
          <li v-for="data in back">
            <router-link to="/nfoot">
                <img :src="'//elm.cangdu.org/img/'+data.image_path" alt="">
                <div class="back_info">
                  <span>{{data.name}} &nbsp;<span class="pay">支付</span></span><br>
                  <p>月售 {{data.recent_order_num}} 单</p>
                  <p>{{data.float_minimum_order_amount}}元起送 / 距离{{data.distance}}</p>
                </div>
                <div class="clean"></div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="sorry" v-if="result" v-cloak>很抱歉,无搜索结果!</div>
      <Bottom></Bottom>
    </div>
    
</template>
<script>
  import { Search } from 'mint-ui';
  import { Header } from 'mint-ui';
  import Vue from "vue";
  import { Button } from 'mint-ui';
  import { CellSwipe } from 'mint-ui';
  import Bottom from './Bottom'

  Vue.component(CellSwipe.name, CellSwipe);
  Vue.component(Button.name, Button);
  Vue.component(Header.name, Header);
  Vue.component(Search.name, Search);
    export default {
        name: "search",
      components: {Bottom},
      data(){
          return{
            value:'',
            vals:[],
            hide:false,
            hide1:false,
            back:'',
            result:false
          }
      },
      methods:{
          getVal(){
            this.hide=false;
            this.result=false;
            if(this.value!==''){
              this.vals.push(this.value);
              this.hide1=true;
              //发起请求
              Vue.axios.get(`https://elm.cangdu.org/v4/restaurants?geohash=${this.$store.state.cityinfo.geohash}&keyword=${this.value}`).then((res)=>{
                // console.log(res.data);
                this.back=res.data;
                if(this.back.message==='搜索餐馆数据失败'){
                  this.hide=false;
                  this.hide1=false;
                  this.result=true;
                  // alert('很抱歉,无搜索结果!');
                }
              }).catch((error)=>{
                console.log('请求错误!',error);
              });
            }
            this.vals=Array.from(
              new Set(this.vals)
            );
            
            if(this.vals.length>0){
              this.hide=true;
            }
          },
        delHis(i){
        //删除元素
          this.vals.splice(i,1);
          if(this.vals.length>0){
            this.hide=true;
            this.result=false;
          }
        },
        //清空历史记录
        delAll(){
            this.vals=[];
            this.hide=false;
          this.result=false;
        },
        delVal(){
          this.value='';
          this.hide=true;
          this.hide1=false;
          this.result=false;
        },
        senSearch(data){
            this.value=data;
          this.hide=false;
          this.result=false;
          if(this.value!==''){
            this.vals.push(this.value);
            this.hide1=true;
            //发起请求
            Vue.axios.get(`https://elm.cangdu.org/v4/restaurants?geohash=${this.$store.state.cityinfo.geohash}&keyword=${this.value}`).then((res)=>{
              // console.log(res.data);
              if(this.back.message==='搜索餐馆数据失败'){
                this.hide=false;
                this.hide1=false;
                this.result=true;
              }
              this.back=res.data;
            }).catch((error)=>{
              console.log('请求错误!',error);
            });
          }
          this.vals=Array.from(
            new Set(this.vals)
          );
  
          if(this.vals.length>0){
            this.hide=true;
          }
        }
      },
      mounted(){
      }
    }
</script>

<style scoped>
  .clean{
    clear: both;
  }
  li{
    list-style: none;
  }
  [v-cloak] {
    display:none;
  }
  .top{
    background-color: #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left, .btn{
    float: left;
  }
  .btn{
    margin: .2rem 0;
  }
  .history, .sj{
    font-size: .6rem;
    line-height: 2rem;
    text-indent: .5rem;
    font-weight: 700;
    color: #666;
  }
  .qk{
    background-color: #fff;
    color: #3190e8;
    font: .7rem/2rem Microsoft YaHei;
    font-weight: 700;
    text-align: center;
    border-top: 1px solid #ccc;
  }
  .back li{
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: .5rem .5rem .8rem;
    border-bottom: .025rem solid #e4e4e4;
  }
  .back li img{
    width: 20%;
    float: left;
  }
  .back li a{
    display: inline-block;
  }
  .back li .back_info{
    width: 72%;
    color: #333;
    font-weight: 400;
    border-bottom: .025rem solid #e4e4e4;
    float: left;
    margin: 0 .3rem;
  }
  .back li .back_info .pay{
    display: inline-block;
    width: 1.2rem;
    height: .8rem;
    -webkit-transform: skew(-20deg);
    -moz-transform: skew(-20deg);
    -o-transform: skew(-20deg);
    border: 1.5px solid rgb(255, 96, 0);
    font-size: .2rem;
    font-weight: 600;
    text-decoration: underline;
    color:rgb(255, 96, 0);
  }
  .del_btn{
    z-index: 99;
    position: relative;
    right: 1.7rem;
    color: #999;
  }
  .his_all .his{
    box-sizing: border-box;
    padding: .5rem .3rem;
    border-top: 1px solid #ccc;
    font-size: .8rem;
  }
  .his_all .his .icon{
    float: right;
    font-size: .7rem;
    color: #999;
    margin-top: .2rem;
  }
  .sorry{
    width: 100%;
    background-color: #fff;
    text-align: center;
    padding: .5rem 0;
  }
</style>
