<template>
    <div>
      <div class="L_head">
        <router-link :to="{path:'/vip'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="L_headDiv">购买记录</span>
      </div>
      <!--这是交易明细部分-->
      <div class="L_footer">
        <p class="text-muted L_detail">交易明细</p>
        <img src="../L-imgs/elm.png" height="98" width="98"/>
      </div>
      <p class="text-center text-muted">没有购买记录</p>
    </div>
</template>

<script>
    export default {
        name: "L-vipHistory"
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
  .L_footer{
    margin-top: 30%;
    font-size: 0;
    text-align: center;
  }
</style>
