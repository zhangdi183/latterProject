<template>
    <div>
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="">订单详情</span>
      </div>
      <!--这个是展示头像和再来一单的页面的-->
      <div class="showHead">
          <div class="showimg">
            <img src="../L-imgs/22.png"/>
          </div>
        <div class="againOrder">
          <span>再来一单</span>
        </div>
      </div>
      <!--这个是第二部分的页面-->
      <div class="secondPage">
          <div class="two">
            <img src="../L-imgs/fenxiang.png" alt="">
            <span>商铺名</span>
            <span class="glyphicon glyphicon-menu-right span1"></span>
          </div>
        <div class="two">
         <span>不知道这是个啥</span>
          <span class="pull-right" style="margin-right: 0.4rem">￥咱也不敢问</span>
          <span class="text-muted pull-right" style="margin-right: 0.3rem">x1</span>
          <div class="clearfix"></div>
        </div>
        <div class="two">
          <span class="text-muted">配送费</span>
          <span class="pull-right" style="margin-right: 0.4rem">4</span>
          <div class="clearfix"></div>
        </div>
        <div class="two">
          <span class="pull-right" style="margin-right: 0.4rem;font-weight: bold;color: #FB6B23">实付13452532</span>
          <div class="clearfix"></div>
        </div>
      </div>
      <!--这个是配送信息页-->
      <div class="shoppingInfor">
        <div class="infor">
          <span>配送信息</span>
        </div>
        <div class="infor1">
          <p class="text-muted">送达时间:尽快送达</p>
          <p class="text-muted">
            <span>送货地址:</span>
            <span>123 <div style="position: relative;top: 0;left: 2.5rem">手机号</div>
            </span>
          </p>
          <p class="text-muted">配送方式:蜂鸟专送</p>
        </div>
      </div>
      <!--这个是订单信息-->
      <div class="shoppingInfor">
        <div class="infor">
          <span>订单信息</span>
        </div>
        <div class="infor1">
          <p class="text-muted">订单号:1235</p>
          <p class="text-muted">
            <span>支付方式:在线支付</span>
          </p>
          <p class="text-muted">下单时间:2019-05-15</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "L-orderdetails"
    }
</script>

<style scoped>
  .L_head{
    padding: 0.6rem 0.1rem 0.4rem;
    width: 16rem;
    background: rgb(49,144,232);
    color: white;
    text-align: center;

  }
  .showHead{
    background: white;
    padding: 0.5rem;
  }
  .showimg{
    width: 4rem;
    height: 4rem;
    margin: 0rem auto;
    border-radius: 50%;
  }
  .showimg img{
    width: 100%;
    border-radius:50%;
  }
  .againOrder{
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.6rem;
  }
  .againOrder span{
    padding: 0.3rem;
    border: 0.05rem solid #3190E8;
    color: #3190E8;
    font-weight: bold;
  }
  .secondPage{
    background: white;
    margin-top: 0.5rem;
  }
  .two{
    font-size: 0.6rem;
    padding: 0.5rem ;
    border-bottom: 0.05rem solid #e1e1e1;
  }
  .two img{
    width: 1.5rem;
    height: 1.5rem;
  }
  .span1{
    position: relative;
    right: -10.5rem;
  }
  .two:last-child{
    border:0;
  }
  .shoppingInfor{
    background: white;
    margin-top: 0.5rem;
  }
  .infor{
    padding: 0.5rem;
    font-size: 0.65rem;
    border-bottom: 0.05rem solid #e1e1e1;
  }
  .infor1{
    padding: 0.5rem;
    font-size: 0.6rem;
  }
</style>
