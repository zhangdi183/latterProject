<template>
    <div>
      <div class="L_head">
        <router-link :to="{path:'/vip'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="L_headDiv">在线支付</span>
      </div>
      <!--支付计时器-->
      <div class="LmPayTime">
        <h5><small>剩余支付时间</small></h5>
        <div class="LmTime" >
          <span>0:</span><span>{{minutes}}:</span><span>{{seconds}}</span>
        </div>
      </div>
      <div>
        <h5 style="color: #9f9f9f">选择支付方式</h5>
      </div>
      <!--这是支付宝和微信-->
      <div class="choosePay">
          <div class="zhifubao" @click="choose">
            <img src="../L-imgs/payVip.png" height="50" width="47"/>
            <span>支付宝</span>
            <div class="twoImg">
              <img src="../L-imgs/未选中.png" height="200" width="200"/>
              <img src="../L-imgs/选中.png" height="200" width="200" v-if="isTrue"/>
            </div>
           </div>
        <div class="wixin">
          <img src="../L-imgs/weixinpay.png" height="50" width="47"/>
          <span>微信&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <div class="twoImg" @click="choose1">
            <img src="../L-imgs/未选中.png" height="200" width="200"/>
            <img src="../L-imgs/选中.png" height="200" width="200" v-if="isFalse"/>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-success" style="width: 13rem;margin: 0.5rem auto" @click="isShow=!isShow;alertMsg='当前环境无法进行付款,请打开官方APP进行付款'">确认支付</button>
      </div>
      <!--这是个警告框-->
      <div class="alert alert-warning text-center LmAlert bounceIn" v-if="isShow">
        <img src="../L-imgs/感叹号.png" height="100" width="100"/>
        <p>{{alertMsg}}</p>
        <button class="btn btn-success btn-group btn-block" @click="sure">确认</button>
      </div>
    </div>
</template>

<script>
    export default {
      name: "L-vipPay",
      data() {
        return {
          minutes: 15,
          seconds: 0,
          isTrue:true,
          isFalse:false,
          isShow:false,
          alertMsg:''
        }
      },
      methods:{
        timedowm(){
            let _this=this;
            let timer= setInterval(function () {
              _this.seconds-=1
              if (_this.seconds<0){
                _this.seconds=59;
                _this.minutes-=1
              }else if (_this.minutes===0 &&_this.seconds===0){
                clearInterval(timer)
                _this.isShow=!this.isShow
                _this.alertMsg='支付超时'
              }
            },1000)
        },
        choose(){
          this.isTrue=!this.isTrue
          this.isFalse=!this.isFalse
        },
        choose1(){
          this.isTrue=!this.isTrue
          this.isFalse=!this.isFalse
        },
        sure(){
          this.isShow=false;
          if (this.alertMsg==='当前环境无法进行付款,请打开官方APP进行付款'){
            this.$router.push({path:'/order'})
          }
        }
      },
      mounted(){
        this.timedowm();
      },
      created(){
        this.isShow=!this.isShow
        this.alertMsg='暂不开放支付功能'
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
  .LmPayTime{
    background: white;
    text-align: center;
    overflow: hidden;
  }
  .LmTime{
    font-size: 1.5rem;
  }
  .choosePay{
    background: white;

  }
  .zhifubao,.wixin{
    padding: 0.5rem;
    border-bottom: 0.01rem solid rgba(240,240,240,1);
  }
  .twoImg{
    position: relative;
    display: inline-block;
    top: 0.3rem;
    right: -8rem;
    width: 2rem;
    height: 2rem;
  }
  .twoImg img{
    width: 2rem;
    height: 2rem;
    position: absolute;
  }
  .LmAlert{
    width: 12rem;
    background: white;
    position: absolute;
    top:30%;
    left:13%;
  }
</style>
