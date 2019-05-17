<template>
  <div>
    <!--顶部-->
    <mt-header title="订单列表">
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <!--遍历数据-->
      <div class="one" v-for="data in order">
        <!--图片请求-->
        <img src="../L-imgs/8.png" alt="暂无图片">
        <ul>
          <router-link to="/">
            <li class="first">
              <!--商品名字-->
              <span class="proname">
              {{data.name}}<i class="el-icon-arrow-right icon"></i>
            </span>
              <span class="pay">等待支付</span><br>
              <span class="clean"></span>
              <!--下单时间-->
              <span class="time">2019-05-16 18:01</span>
            </li>
            <!--商品名称,数量,价格-->
            <li class="sencod">
              <span class="num">的味道切尔奇二群翁 等4件商品</span>
              <span class="price">¥99999</span>
            </li>
          </router-link>
          <!--剩余支付时间-->
          <li class="tird">
            <span class="topay" @click="payPro">去支付(还剩{{minutes}}分{{seconds}}秒)</span>
            <span class="clean"></span>
          </li>
        </ul>
        <div class="clean"></div>
      </div>
    </div>
    <!--这是个警告框-->
    <div class="warn" v-if="isShow">
      <div class="alert alert-warning text-center LmAlert bounceIn">
        <img src="../L-imgs/感叹号.png" height="100" width="100"/>
        <p>暂不开放支付功能</p>
        <button class="btn btn-success btn-group btn-block" @click="isShow=false">确认</button>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Bottom from './Bottom'
    export default {
        name: "Order",
      components: {Bottom},
      data(){
          return{
            isShow:false,
            order:this.$store.state.Z_shopTrolleyList,
            //剩余支付时间
            minutes: 15,
            seconds: 0,
          }
      },
      methods:{
        payPro(){
          this.isShow=true;
        },
        //计时器
        timedowm(){
          let _this=this;
          let timer= setInterval(function () {
            _this.seconds-=1;
            if (_this.seconds<0){
              _this.seconds=59;
              _this.minutes-=1
            }else if (_this.minutes===0 &&_this.seconds===0){
              clearInterval(timer);
              _this.isShow=!this.isShow;
              _this.alertMsg='支付超时';
            }
          },1000)
        },
      },
      created(){
          console.log(this.order);
      },
      mounted(){
        this.timedowm();
      },
    }
</script>

<style scoped>
  li{
    list-style:none;
  }
  .clean{
    clear: both;
  }
  .one{
    background-color: #fff;
    box-sizing: border-box;
    padding: .5rem .5rem 0 .5rem;
    margin-bottom: .5rem;
  }
  .one img{
    width: 2.3rem;
    float: left;
  }
  .one ul{
    float: left;
    margin-left: .3rem;
    width: 12.2rem;
  }
  .one ul .first{
    padding: 0 0 .3rem 0;
  }
  .one ul .sencod{
    border-top: .025rem solid #f5f5f5;
    border-bottom: .025rem solid #f5f5f5;
  }
  .one ul .proname{
    font-size: .8rem;
    display: inline-block;
    width: 8.5rem;
    color: #333;
    /*overflow:hidden;*/
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .one ul .proname .icon{
    font-size: .5rem;
    color: #ccc;
  }
  .one ul .pay{
    float: right;
    font-size: .65rem;
    color: #333;
  }
  .one ul .time{
    font-size: .55rem;
    color: #999;
    font-weight: 100;
  }
  .one ul .num{
    font-size: .6rem;
    color: #666;
    display: inline-block;
    line-height: 2rem;
    width: 8.5rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .one ul .price{
    float: right;
    display: inline-block;
    line-height: 2rem;
    color: #f60;
    font-weight: 700;
  }
  .one ul .topay{
    color: orange;
    border-width: 1px;
    border-style: solid;
    border-color: orange;
    font-size: .55rem;
    padding: .1rem .2rem;
    border-radius: .15rem;
    font-weight: 100;
    letter-spacing:.03rem;
    float: right;
    margin-top: .4rem;
  }
  .warn{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .LmAlert{
    width: 13rem;
    background: white;
  }
  .warn button{
    margin-top: .5rem;
  }
</style>
