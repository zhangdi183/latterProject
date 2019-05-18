<template>
    <div>
      <div class="L_head">
        <router-link :to="{path:'/nmine_load'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="L_headDiv">会员中心</span>
      </div>
      <h5 style="margin-left: 0.5rem;"><small>为用户</small>{{name}}<small>购买会员</small></h5>
      <!--会员特权-->
      <div class="Lmvip">
         <router-link :to="{path:'/vipExplain'}">
           <h5 style="border-bottom: 0.01rem solid rgba(240,240,240,1);padding-bottom: 0.5rem;">会员特权<small class="pull-right">会员说明></small></h5>
         </router-link>
        <div style="border-bottom: 0.01rem solid rgba(240,240,240,1);padding: 0.4rem 0;">
          <img src="../L-imgs/sheng.jpeg" height="40" width="35" style="position: relative;top: -0.8rem"/>
          <div style="display: inline-block ;margin: 0 0.5rem;position: relative;top: 0.15rem;">减免配送费<br>
            <div style="display: inline-block;font-size: 0.4rem;color: #9f9f9f">每月减免30单,每日可减免3单,每单最高减4元<br>蜂鸟专送专享</div></div>
        </div>
        <div style="padding: 0.4rem 0;">
          <img src="../L-imgs/jifen.jpeg" height="40" width="35" style="position: relative;top: -0.8rem"/>
          <div style="display: inline-block ;margin: 0 0.5rem;position: relative;top: 0.15rem;">减免配送费<br>
            <div style="display: inline-block;font-size: 0.4rem;color: #9f9f9f">每月减免30单,每日可减免3单,每单最高减4元<br>蜂鸟专送专享</div></div>
        </div>
      </div>
      <!--开通会员-->
      <div class="startVip">
        <h5 style="border-bottom: 0.01rem solid rgba(240,240,240,1);padding-bottom: 0.5rem;">开通会员</h5>
        <div style="font-size: 0.75rem;padding: 0.4rem 0;">
          <span>1个月</span>
          <span style="color: #FF6600;font-weight: bold;">¥20</span>
          <button class="pull-right" style="color:#FF6600;border: 0.05rem solid #FF6600;background: white;padding: 0.2rem 0.4rem;border-radius: 0.3rem;font-size: 0.6rem" @click="Lpay">购买</button>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="startVip">
        <!--这个跳转到兑换会员-->
      <router-link :to="{path:'/vipexchange',query:{name:name}}">
        <h5 style="">兑换会员<small class="pull-right">使用卡号密码</small></h5>
      </router-link>
    </div>
      <div class="startVip">
        <!--这个跳转到会员历史记录-->
       <router-link :to="{path:'/viphistory'}">
         <h5 style="">兑换记录<small class="pull-right">开发票</small></h5>
       </router-link>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-vip",
      data(){
          return{
            name:''
          }
      },
      methods:{
        Lpay(){
          this.$router.push({path:'/vipPay'})
        }
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
            this.name=res.data.username
          })

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
  .Lmvip{
    background: white;
    margin: 0.2rem 0;
    padding: 0.3rem 0.8rem;
  }
  .startVip{
    background: white;
    margin: 0.5rem 0;
    padding: 0.3rem 0.8rem;
  }
</style>
