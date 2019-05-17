<template>
    <div>
      <div>
        <transition name="fade">
          <loading v-if="isLoading"></loading>
        </transition>
      </div>
      <!--标题-->
      <mt-header :title="this.$store.state.cityinfo.name" class="tit">
        <router-link to="/search" slot="left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconsousuo"></use>
          </svg>
        </router-link>
        <mt-button slot="right">
          <router-link to="/nmine_load">
            <svg class="icon" aria-hidden="true" v-if="isshow">
              <use xlink:href="#icongerenzhongxinyonghu01"></use>
            </svg>
          </router-link>
          <router-link :to="{path:'/login'}">
            <span style="color: white" v-if="isfalse">登录|注册</span>
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
        <div class="near">
          <router-link to="/nfoot" v-for="(item,i) in shop" :key="i" class="bottom">
            <a @click="sendId(item.id,item)">
              <img :src="'//elm.cangdu.org/img/'+item.image_path" alt="img" class="img">
              <div class="right">
            <span class="zong"><span class="pp" v-if="item.is_premium===true">品牌</span>{{item.name}}<span class="fr">
              <span class="bzp" v-for="items in item.supports">{{items.icon_name}}</span><span class="clean"></span>
            </span></span>
                <div class="pf">
                  <!--评分-->
                  <el-rate
                    v-model="item.rating"
                    disabled
                    disabled-void-color="#ccc"
                    show-score
                    text-color="#ff9900"
                    class="ele">
                  </el-rate>
                  <span class="ys">月售{{item.recent_order_num}}单</span><br>
                  <span class="pr">
                  <span class="fn">{{item.delivery_mode.text}}</span>
                  <span class="zsd">{{item.supports[1].name}}</span>
               </span><br>
                  <span class="clean"></span>
                  <span class="clean"></span>
                  <!--起送-->
                  <span class="qs">
              ¥{{item.float_minimum_order_amount}}起送 / {{item.piecewise_agent_fee.tips}}
              <span class="dis">{{item.distance}} / <span class="time">{{item.order_lead_time}}</span></span>
                    <span class="clean"></span>
                  </span>
                </div>
              </div>
              <div class="clean"></div>
            </a>
          </router-link>
        </div>
      </div>
      <Bottom></Bottom>
    </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import Vue from 'vue'
  import Swiper from "swiper"
  import Bottom from './Bottom'
  import Loading from '../components/loading/trans'
  
  Vue.component(Header.name, Header);
    export default {
        name: "first",
      components: {Bottom, Loading},
      data(){
          return{
            pic:'',
            pic1:'',
            shop:'',
            isshow:Boolean,
            isfalse:Boolean,
            isLoading: true
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
        const me = this;
        me.loadPageData();
       
      },
      created(){
        Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
          if (res.data.message==='通过session获取用户信息失败'){
            this.isfalse=true;
            this.isshow=false;
          }else{
            this.isshow=true;
            this.isfalse=false;
          }
        })
      },
      methods:{
        loadPageData: function() {
          //食品分类列表
          Vue.axios.get('https://elm.cangdu.org/v2/index_entry').then((res)=>{
            this.isLoading = false;
            // console.log(res.data);
            this.pic=res.data.slice(0,8);
            this.pic1=res.data.slice(8,16);
          }).catch((error)=>{
            console.log('请求错误!',error);
          });
          //商铺列表
          Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=this.$store.state.cityinfo.latitude&longitude=this.$store.state.cityinfo.longitude').then((res)=>{
            this.isLoading = false;
            // console.log(res.data);
            this.shop=res.data;
          }).catch((error)=>{
            console.log('请求错误!',error);
          });
        },
        
        sendTitle(tit){
          this.$store.state.shopcart=tit;
        },
        sendId(id,item){
          //获取食品列表
          Vue.axios.get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=${id}`).then((res)=>{
            // console.log(res.data);
            this.$store.state.nfoot=res.data;
            // console.log(this.$store.state.nfoot);
          }).catch((error)=>{
            console.log('请求错误!',error);
          });
          //判断数组是否长度为0
          if(item.activities.length === 0){
            item.activities.push({'icon_name':'无活动'});
          }
          this.$store.state.nshoplist=item;
          // console.log(item);
        }
      }
    }
</script>

<style scoped>
  @import "../../node_modules/swiper/dist/css/swiper.css";
  .clean{
    clear: both;
  }
  .ele{
    /*background-color: red;*/
    box-sizing: border-box;
    display: inline-block;
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
    padding: .9rem .4rem 1.3rem .4rem;
  }
  .near{
    margin-bottom: 2.8rem;
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
  .right .ys{
    transform: scale(.8);
    margin-left: .2rem;
    font-size: .6rem;
    line-height: .9rem;
    color: #666;
    float: right;
  }
  .right .pr{
    /*background-color: red;*/
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
    /*background-color: yellow;*/
    display: inline-block;
    width: 11rem;
    padding: .2rem 0;
    font-size: .5rem;
    color: #666;
    word-wrap:break-word
  }
  .right .dis{
    color: #999;
    font-weight: 400;
    float: right;
  }
  .right .time{
    color: #3190e8;
    font-weight: 400;
  }
</style>
