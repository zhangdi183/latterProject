<!--登陆之后的我的组件-->
<template>
  <div>
    <!--顶部-->
    <mt-header title="我的" class="nhead">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!--信息 >-->
    <div class="infor">
      <router-link :to="{path:'/Linformation'}" class="info">
        <div class="head">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icontouxiang-kong"></use>
          </svg>
        </div>
        <div class="information">
          <p class="p1">{{username}}</p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconphone"></use>
          </svg><p class="p2">暂无绑定手机号</p>
        </div>
        <div class="jt_right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjiantou"></use>
          </svg>
        </div>
      </router-link>
    </div>
    <!--余额-->
    <div>
      <router-link :to="{path:'/balance',query:{yue:balance}}" class="surplus">
        <span><span class="num">{{balance}}.00</span>&nbsp;元</span><br>
        <span>我的余额</span>
      </router-link>
      <router-link to="/preferential" class="surplus">
        <span><span class="num num1">{{gift_amount}}</span>&nbsp;个</span><br>
        <span>我的优惠</span>
      </router-link>
      <router-link to="/integral" class="surplus">
        <span><span class="num num2">{{point}}</span>&nbsp;分</span><br>
        <span>我的积分</span>
      </router-link>
      <div class="clean"></div>
    </div>
    <!--订单-->
    <div class="order">
      <router-link to="/order">
        <mt-cell-swipe class="or">
          <span>我的订单</span>
          <svg class="icon icon1" aria-hidden="true">
            <use xlink:href="#icondiancandingdan0101"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjiantou"></use>
          </svg>
        </mt-cell-swipe>
      </router-link>
      
      <router-link to="/nintegral">
        <mt-cell-swipe class="or">
          <span>积分商城</span>
          <svg class="icon icon1 icon2" aria-hidden="true">
            <use xlink:href="#icon-"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjiantou"></use>
          </svg>
        </mt-cell-swipe>
      </router-link>
      
      <router-link to="/vip">
        <mt-cell-swipe class="or">
          <span>饿了么会员卡</span>
          <svg class="icon icon1 icon3" aria-hidden="true">
            <use xlink:href="#iconhuiyuan"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjiantou"></use>
          </svg>
        </mt-cell-swipe>
      </router-link>
      
      <div class="order">
        <router-link to="/nscenter">
          <mt-cell-swipe class="or">
            <span>服务中心</span>
            <svg class="icon icon1 icon4" aria-hidden="true">
              <use xlink:href="#iconkefu"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconjiantou"></use>
            </svg>
          </mt-cell-swipe>
        </router-link>
        
        <router-link to="/ndownload">
          <mt-cell-swipe class="or">
            <span>下载饿了么APP</span>
            <svg class="icon icon1" aria-hidden="true">
              <use xlink:href="#iconeliaomo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconjiantou"></use>
            </svg>
          </mt-cell-swipe>
        </router-link>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import Vue from "vue";
  import { CellSwipe } from 'mint-ui';
  import Bottom from '../components/Bottom'
  
  Vue.component(CellSwipe.name, CellSwipe);
  Vue.component(Header.name, Header);
    export default {
        name: "Nmine_load",
        components:{Bottom},
        data(){
          return{
            username:'',
            gift_amount:'',
            point:'',
            balance:''
          }
        },
      mounted(){
        Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
          // console.log(res.data);
         if (this.$store.state.changeUsername!=''){
           this.username=this.$store.state.changeUsername
         }else {
           this.username=res.data.username
         }
          this.gift_amount=res.data.gift_amount
          this.point=res.data.point
          this.balance=res.data.balance
        }).catch((error)=>{
          console.log('请求错误!',error);
        });
      },
    }
</script>

<style scoped>
  .clean{
    clear:both;
  }
  .nhead{
    color: #fff;
    font-size: .8rem;
    font-weight: 700;
    padding: .8rem .5rem;
    background-color: #3190e8;
    border-bottom: 1px rgba(204, 204, 204, 0.73) solid;
  }
  .infor{
    background-color: #3190e8;
    color: #fff;
    padding: .4rem;
  }
  .infor .p1{
    font-size: .8rem;
    font-weight: 700;
  }
  .infor .p2{
    font-size: .6rem;
    font-weight: 500;
    display: inline-block;
  }
  .infor span{
    text-align: right;
  }
  .surplus{
    float:left;
    color: #000;
    width: 33%;
    text-align: center;
    border-right: 1px solid #f1f1f1;
    text-decoration: none;
    padding: .5rem 0;
    background: #fff;
  }
  .surplus .num{
    width: 100%;
    font-size: 1.2rem;
    color: #f90;
    font-weight: 700;
  }
  .surplus .num1{
    color: #ff5f3e;
  }
  .surplus .num2{
    color: #6ac20b
  }
  .surplus span{
    font-size: .6rem;
    color: #666;
    font-weight: 400;
  }
  .order{
    margin-top: .3rem;
    border: 0;
  }
  .or{
    font-size: .7rem!important;
    color: #333;
    /*padding-left: .8rem;*/
  }
  .head,.information{
    display: inline-block;
  }
  .head{
    font-size: 3rem;
  }
  .information .icon{
    font-size: .9rem;
  }
  .info{
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  .jt_right{
    color: #fff;
    width: 46%;
    text-align: right;
    /*background-color: #fff;*/
  }
  .or .icon1{
    font-size: 1rem;
    position: absolute;
    left: .3rem;
  }
  .or span{
    position: absolute;
    left: 1.4rem;
  }
  .or .icon2{
    color: red;
  }
  .or .icon3{
    color: rgb(255, 198, 54);;
  }
  .or .icon4{
    color: rgb(38, 86, 255);;
  }
</style>
