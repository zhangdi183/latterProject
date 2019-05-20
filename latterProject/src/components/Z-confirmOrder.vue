<template>
  <div class="Z-confirmOrder">
    <div class="Z-mask" v-if="Z_boolPayMode" @click="Z_boolPayMode=false"></div>
    <div class="L_head">
      <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
      <span class="L_headDiv">订单备注</span>
      <router-link to="/nmine">
        <svg class="icon iconR" aria-hidden="true" style="color: white">
          <use xlink:href="#icongerenzhongxinyonghu01" class="icon1"></use>
        </svg>
      </router-link>
    </div>
    <router-link to="/chooseShopCarADD">
      <div class="Z-addAddress Z-bgcWhite">
       <div v-if="showADD">
         <svg class="icon iconL" aria-hidden="true">
           <use xlink:href="#iconjuli" class="icon1"></use>
         </svg>
         <span>请添加一个收货地址</span>
       </div>
        <div v-if="!showADD">
          <span>{{$route.query.data1}}</span>
        </div>
      </div>
    </router-link>
    <div class="Z-arrivalTime Z-bgcWhite">
      <p class="Z-arrivalTimeLeft">送达时间</p>
      <div class="Z-arrivalTimeRight">
        <p class="Z-arrivalTimeP">
          <span>尽快送达</span><span class="Z-arrivalTimeSpan">21:10</span>
        </p>
        <p class="Z-fnzs">
          蜂鸟专送
        </p>
      </div>
    </div>
    <div class="Z-payMode Z-bgcWhite" @click="Z_boolPayMode=true">
      <div>支付方式</div>
      <div>在线支付&nbsp></div>
    </div>
    <div class="Z-payModeIf" v-if="Z_boolPayMode">
      <div class="Z-payModeIf2">支付方式</div>
      <div class="floatLeft">在线支付</div>
      <div class="floatRight"><input type="radio"></div>
    </div>
    <div class="Z-redPaper Z-bgcWhite">
      <div class="floatLeft">红包</div>
      <div class="floatRight">暂时只在饿了么app中支持</div>
    </div>

    <ul class="Z-shopList">
      <div class="Z-toShow">{{Z_proList[0].storeName}}</div>
      <li v-for="prodata in Z_proList">
        <div class="proName floatLeft">{{prodata.name}}</div>
        <div class="proNum floatLeft">*{{prodata.num}}</div>
        <div class="proPrice floatLeft">￥{{prodata.price}}</div>
      </li>
    </ul>
    <div class="Z-order">
      <div class="Z-order1">订单￥{{Z_allMoney}}</div>
      <div class="Z-waitPay">
        <div>待支付</div>
        <div>￥{{Z_allMoney}}</div>
      </div>
    </div>
    <router-link to="/Lleavemessage">
      <div class="Z-payMode Z-bgcWhite">
        <div>订单备注</div>
        <div>{{orderText}}</div>
      </div>
    </router-link>
    <router-link to="/nbill">
      <div class="Z-payMode Z-bgcWhite Z-invoice">
        <div>发票抬头</div>
        <div>不需要开发票&nbsp></div>
      </div>
    </router-link>
    <div class="Z-footer">
      <div class="Z-footerWaitPay">待支付￥{{Z_allMoney}}</div>
      <router-link to="/vipPay">
        <div class="Z-firmOrder" @click="Z_confirmOrder()">确认下单</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Z-confirmOrder",
      data(){
        return{
          Z_proList: [],
          Z_allMoney:0,
          Z_boolPayMode:false,
          //显示收货地址
          showADD:true,
          text:'',
          //订单备注
          orderText:'口味,偏好等  >'
        }
      },
      // 在组件实例化完毕之后立刻监听Z_proList-event事件获取购物车列表
      created(){
        this.Z_proList=this.$store.state.Z_tempData;

        //判断收货地址是否传递过来
        if (this.$route.query.data1!=null){
            this.showADD=false;
        }else {
          this.showADD=true;
        }
        for (let i=0;i<this.Z_proList.length;i++){
          this.Z_allMoney+=this.Z_proList[i].price*this.Z_proList[i].num;
        }
        // console.log(this.Z_allMoney);
        //判断订单信息是否存在
        if(this.$store.state. LmLeaveMsg===''){
          this.orderText='口味,偏好等  >'
        }else{
          this.orderText=this.$store.state. LmLeaveMsg
        }
      },

      methods:{
        Z_confirmOrder(){
          for (let k=0;k<this.Z_proList.length;k++){
            this.Z_proList[k].receiveAddress=this.$route.query.data1;
            console.log(this.$route.query.data1)
            console.log(this.Z_proList,111)
          }
          this.$store.state.Z_tempList.push(this.Z_proList);
          for (let i=0;i<this.Z_proList.length;i++){
            for (let j=0;j<this.$store.state.Z_tempList.length-1;j++){
              this.$store.state.Z_tempList[j].pop();
            }
          }
          // console.log(this.$store.state.Z_tempList);
          //清空订单备注的信息
          this.$store.state.LmLeaveMsg=''
        }
      },
    }
</script>

<style scoped>
  ul,li{
    list-style: none;
  }
  .Z-bgcWhite{
    background-color: white;
  }
  .floatLeft{
    float: left;
  }
  .floatRight{
    float: right;
  }
  .Z-confirmOrder{
    width: 16rem;
    background-color: rgb(230,230,230);
  }
  .L_head{
    padding: 0.6rem 0.1rem 0.4rem;
    width: 16rem;
    background: rgb(49,144,232);
    color: white;
    text-align: center;
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
  }
  .iconR{
    float: right;
    font-size: 1rem;
  }
  .iconL{
    font-size: 1rem;
  }
  .Z-addAddress{
    width: 16rem;
    height: 3rem;
    line-height: 3rem;
    background-image: url(../L-imgs/address_bottom.png);
    background-repeat: repeat-x;
    background-position: bottom;
    background-size: 0.8rem;
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
    margin-top: 2rem;
  }
  .Z-arrivalTime{
    width: 16rem;
    height: 4rem;
    margin-bottom: 0.5rem;
  }
  .Z-arrivalTimeLeft{
    box-sizing: border-box;
    width: 8rem;
    height: 4rem;
    border-left: 4px solid deepskyblue;
    float: left;
    font-size: 1rem;
    font-weight: 800;
    line-height: 4rem;
    padding: 0 0.5rem;
  }
  .Z-arrivalTimeRight{
    width: 8rem;
    height: 4rem;
    float: left;
  }
  .Z-arrivalTimeP{
    color: #3190E8;
    line-height: 1rem;
    text-align: right;
    margin-top: 0.8rem;
  }
  .Z-arrivalTimeSpan{
    display: inline-block;
    padding: 0 0.5rem;
    border-left: 1px solid  #3190E8;
    margin-left: 0.5rem;
  }
  .Z-fnzs{
    width: 3rem;
    height: 1rem;
    background-color:  #3190E8;
    color: white;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    line-height: 1rem;
    float: right;
    margin-right: 0.5rem;
  }
  .Z-payMode{
    width: 16rem;
    height: 2rem;
    line-height: 2rem;
    padding: 0 0.5rem;
    border-bottom: 1px solid rgb(200,200,200);
  }
  .Z-payMode>div:first-child{
    float: left;
  }
  .Z-payMode>div:last-child{
    float: right;
    font-size: 14px;
    color: rgb(150,150,150);
  }
  .Z-mask{
    width: 16rem;
    height: 30rem;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .Z-payModeIf{
    box-sizing: border-box;
    padding: 0 0.5rem;
    width: 16rem;
    height: 8rem;
    background-color: white;
    position: fixed;
    bottom: -8rem;
    left: 0;
    z-index: 20;
    font-size: 1rem;
    animation: payView 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes payView {
    0%{
      bottom: -8rem;
    }
    100%{
      bottom: 0;
    }
  }
  .Z-payModeIf2{
    height: 2rem;
    text-align: center;
    line-height: 2rem;
  }
  .Z-redPaper{
    width: 16rem;
    height: 2rem;
    font-size: 14px;
    line-height: 2rem;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
  }
  .Z-toShow{
    width: 16rem;
    height: 2rem;
    background-color: white;
    line-height: 2rem;
    font-size: 1rem;
    padding: 0 0.5rem;
    border-bottom: 1px solid rgb(200,200,200);
  }
  .Z-shopList{
    width: 16rem;
    color: rgb(150,150,150);
    background-color: white;
    overflow: hidden;
    z-index: 100;
  }
  .proName{
    box-sizing: border-box;
    padding: 0 0.5rem;
    width: 8rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .proPrice{
    width: 3rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .proNum{
    width: 5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .Z-order{
    width: 16rem;
    height: 3rem;
    background-color: white;
    border-top: 1px solid rgb(200,200,200);
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
    line-height: 1.5rem;
  }
  .Z-order1{
    width: 10rem;
    height: 3rem;
    float: left;
  }
  .Z-waitPay{
    float: left;
  }
  .Z-footer{
    width: 16rem;
    height: 2rem;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .Z-footerWaitPay{
    width: 11rem;
    height: 2rem;
    background-color: #3C3C3C;
    box-sizing: border-box;
    padding-left: 0.5rem;
    line-height: 2rem;
    float: left;
    color: white;
  }
  .Z-firmOrder{
    width: 5rem;
    height: 2rem;
    line-height: 2rem;
    background-color: #56D176;
    float: left;
    text-align: center;
    color: white;
  }
  .Z-invoice{
    margin-bottom: 2.5rem;
    border-bottom: 0;
  }
</style>
