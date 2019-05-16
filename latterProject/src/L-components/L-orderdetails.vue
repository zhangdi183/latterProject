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
    padding: 0.2rem 0.3rem;
  }
  .two img{
    width: 1.5rem;
    height: 1.5rem;
  }
  .span1{
    position: relative;
    right: -11.1rem;
  }
</style>
