<template>
    <div>
      <div class="L_head">
        <router-link :to="{path:'/preferential'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="">推荐有奖</span>
      </div>
      <div>
        <img src="../L-imgs/activity.png" class="img"/>
      </div>
      <div class="LmQQ text-center" @click="showAlert">
        <div class="qq">
          <img src="../L-imgs/qq.png"/>
          <span>邀请QQ好友</span>
        </div>
        <div class="wx">
          <img src="../L-imgs/weixin.png"/>
          <span>邀请微信好友</span>
        </div>
        <div class="ewm">
          <img src="../L-imgs/fenxiang.png"/>
          <span>面对面邀请</span>
        </div>
      </div>
      <div class="Lyaoqing">
        <div class="shouyi">
          <div>累计收益</div>
          <span>0</span>元
        </div>
        <div class="invite">
          <div>成功邀请</div>
          <span>0</span>人
        </div>
      </div>
      <!--收益明细-->
      <h6 class="text-center"><small>--收益明细--</small></h6>
      <div class="text-center" style="width:2rem;margin: 0 auto">
        <img src="../L-imgs/qianbao.png" style="width: 100%"/>
      </div>
      <h6 class="text-center"><small>还不赶快去邀请好友</small></h6>
      <!--这是个警告框-->
      <div class="alert alert-warning text-center LmAlert" v-if="isShow">
        <img src="../L-imgs/感叹号.png" height="100" width="100"/>
        <p>请在饿了吗APP中打开</p>
        <button class="btn btn-success btn-group btn-block" @click="isShow=false">确认</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "L-prize",
      data(){
        return{
          isShow:false
        }
      },
      methods:{
        showAlert(){
          this.isShow=!this.isShow
        }
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
  .img{
    width: 100%;
  }
  .LmQQ{
    width: 16rem;
    background: white;
    margin: 0.3rem 0;
  }
  .LmQQ div{
    display: inline-block;
    width: 3.5rem;
    padding: 0.2rem;
    margin: 0.8rem ;
    box-sizing: border-box;
    font-size: 0.5rem;
  }
  .LmQQ img{
    width: 100%;
    margin-bottom: 0.4rem;
  }
  .Lyaoqing{
    text-align: center;
    font-size: 0.6rem;
  }
  .shouyi,.invite{
    display: inline-block;
    width: 7rem;

  }
  .shouyi{
    border-right: 0.01rem solid #9f9f9f;
  }
  .shouyi span{
    color: red;
    font-weight: bold;
  }
  .LmAlert{
    width: 12rem;
    background: white;
    position: absolute;
    top:35%;
    left:13%;
  }

</style>
