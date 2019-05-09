<template>
    <div>
      <!--标题-->
      <mt-header :title="this.$store.state.cityinfo.name" class="tit">
        <router-link to="/" slot="left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconsousuo"></use>
          </svg>
        </router-link>
          <mt-button slot="right">
            <router-link to="/nmine">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icongerenzhongxinyonghu01"></use>
            </svg>
            </router-link>
          </mt-button>
      </mt-header>
      <!--轮播-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul>
              <router-link to="/sweet" v-for="(item,i) in pic" :key="i">
                <div @click="sendTitle(item.title)">
                  <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="img">
                  <p>{{item.title}}</p>
                </div>
              </router-link>
            </ul>
          </div>
          <div class="swiper-slide">
            <ul>
              <router-link to="/sweet" v-for="(item,i) in pic1" :key="i">
                <div @click="sendTitle(item.title)">
                  <img :src="'https://fuss10.elemecdn.com'+item.image_url" alt="img">
                  <p>{{item.title}}</p>
                </div>
              </router-link>
            </ul>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      
      <div class="business">
        <!--附近商家-->
        <div class="ic">
          <svg class="icon icon1" aria-hidden="true">
          <use xlink:href="#iconshangjia-"></use>
        </svg>
        <span>附近商家</span>
        </div>
        <!--商家品牌-->
        <router-link to="/" v-for="(item,i) in shop" :key="i" class="bottom">
          <img :src="'//elm.cangdu.org/img/'+item.image_path" alt="img" class="img">
          <div class="right">
            <span class="zong"><span class="pp" v-if="item.is_premium===true">品牌</span>{{item.name}}<span class="fr">
              <span class="bzp" v-for="items in item.supports">{{items.icon_name}}</span><span class="clean"></span>
            </span></span>
            <div class="pf">
              <!--评分-->
              <img src="../L-imgs/1.jpg" alt="img" class="img1">
              <img src="../L-imgs/2.jpg" alt="img" class="img2" :style="{left:-(2.5-2.5*item.rating/5)+'rem'}">
              <span class="rat">{{item.rating}}<span class="ys">月售{{item.recent_order_num}}单</span></span>
              <span class="po">
                <span class="pr">
                  <span class="fn">{{item.delivery_mode.text}}</span>
                  <span class="zsd">{{item.supports[1].name}}</span>
               </span>
                <span class="clean"></span>
              </span>
            </div>
            <!--起送-->
            <span class="qs">
              ¥{{item.float_minimum_order_amount}}起送 / {{item.piecewise_agent_fee.tips}}
              <span class="dis">{{item.distance}} / <span class="time">{{item.order_lead_time}}</span></span>
            </span>
          </div>
          <div class="clean"></div>
        </router-link>
      </div>
    </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import Vue from 'vue'
  import Swiper from "swiper"
  
  Vue.component(Header.name, Header);
    export default {
        name: "first",
      data(){
          return{
            pic:'',
            pic1:'',
            shop:''
          }
      },
      mounted(){
        new Swiper ('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            // type: 'bullets',
            type: 'fraction',
          },
        });
        //食品分类列表
        Vue.axios.get('https://elm.cangdu.org/v2/index_entry').then((res)=>{
          // console.log(res.data);
          this.pic=res.data.slice(0,8);
          this.pic1=res.data.slice(8,16);
        }).catch((error)=>{
          console.log('请求错误!',error);
        });
        //商铺列表
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=this.$store.state.cityinfo.latitude&longitude=this.$store.state.cityinfo.longitude').then((res)=>{
           // console.log(res.data);
           this.shop=res.data
        }).catch((error)=>{
          console.log('请求错误!',error);
        });
      },
      methods:{
        sendTitle(tit){
          this.$store.state.shopcart=tit;
        }
      }
    }
</script>

<style scoped>
  @import "../../node_modules/swiper/dist/css/swiper.css";
  .clean{
    clear: both;
  }
  .tit svg{
    font-size: .9rem;
    color: #fff;
  }
  .swiper-container {
    width: 100%;
    height: 8.3rem;
  }
  .swiper-slide{
    background-color: #fff;
    padding-top: .5rem;
  }
  .swiper-slide a{
    display: block;
    width: 25%;
    float: left;
    list-style: none;
    text-align: center;
    font-size: .55rem;
    color: #666;
  }
  .swiper-slide a img{
    width: 48%;
    margin-bottom: .3rem;
  }
  .business{
    background-color: #fff;
    margin-top: .6rem;
  }
  .business .ic{
    padding: .5rem 0 0 .5rem;
    color: #999;
  }
  .bottom{
    display: block;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    padding: .9rem .4rem;
  }
  .bottom .img{
    width: 3rem;
    float: left;
  }
  .right span{
    color: #000;
    font-weight: 700;
    /*font-size: 0.65rem;*/
    line-height: 0.65rem;
  }
  .right .zong{
    display: inline-block;
    width: 100%;
  }
  .right .pp{
    font-size: .5rem;
    line-height: .6rem;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }
  .right .bzp{
    font-size: .5rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    padding: 0 .04rem;
    border-radius: .08rem;
    margin-left: .05rem;
  }
  .right .fr{
    float: right;
  }
  .right svg{
    fill: #d1d1d1;
  }
  .right{
    /*background-color: #74ff64;*/
    width: 11.4rem;
    height: 3rem;
    float: left;
    margin-left: .5rem;
  }
  .pf{
    /*background-color: #74ff64;*/
    width: 11.6rem;
    height: .7rem;
    position: relative;
    top: .4rem;
    overflow: hidden;
  }
  .img1, .img2{
    height: .4rem;
    position: absolute;
  }
  .img1{
    width: 2.5rem;
    left: 0;
    top: .15rem;
  }
  .img2{
    width: 2.5rem;
    top: .1rem;
  }
  .right .rat{
    position: absolute;
    top: 0;
    left: 2.6rem;
    color: orange;
    font-size: .3rem;
  }
  .right .rat .ys{
    transform: scale(.8);
    margin-left: .2rem;
    font-size: .4rem;
    color: #666;
  }
  .right .po{
    display: inline-block;
    width: 100%;
    /*background-color: red;*/
  }
  .right .pr{
    float: right;
  }
  .right .fn{
    display: inline-block;
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
    font-size: .3rem;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
  }
  .right .zsd{
    color: #3190e8;
    border: .025rem solid #3190e8;
    font-size: .3rem;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
  }
  .right .qs{
    position: relative;
    top: .7rem;
    left: 0;
    transform: scale(.9);
    font-size: .55rem;
    color: #666;
    word-wrap:break-word
  }
  .right .dis{
    color: #999;
    font-weight: 400;
    margin-left: 2rem;
  }
  .right .time{
    color: #3190e8;
    font-weight: 400;
  }
</style>
