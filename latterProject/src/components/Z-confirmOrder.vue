<template>
  <div class="Z-confirmOrder">
    <div class="L_head">
      <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
      <span class="L_headDiv">订单备注</span>
      <router-link to="/nmine">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icongerenzhongxinyonghu01" class="icon1"></use>
        </svg>
      </router-link>
    </div>
    <router-link to="/nmine" class="Z-addAddress">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconjuli" class="icon1"></use>
      </svg>
      <span>请添加一个收货地址</span>
    </router-link>
    <div class="Z-arrivalTime">
      <span>送达时间</span>
      <div class="Z-arrivalTimeRight">
        <p>
          <span>尽快送达</span><span>21:10</span>
        </p>
        <p class="Z-fnzs">
          蜂鸟专送
        </p>
      </div>
    </div>
    <div class="Z-payMode">
      <span>支付方式</span>
      <span>在线支付&nbsp></span>
    </div>
    <div class="Z-redPaper">
      <span>红包</span>
      <span>暂时只在饿了么app中支持</span>
    </div>
    <div class="Z-toShow">效果演示</div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Z-confirmOrder"
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
  .icon{
    float: right;
    font-size: 1rem;
  }

</style>
