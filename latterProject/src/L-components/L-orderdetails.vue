<template>
    <div>
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="">订单详情</span>
      </div>
      <!--这个是展示头像和再来一单的页面的-->
      <div class="showHead">
          <div class="showimg">
            <img :src="imgSrc" alt="">
          </div>
        <div class="againOrder">
         <router-link to="/nfoot">
           <span @click="toAnain">再来一单</span>
         </router-link>
        </div>
      </div>
      <!--这个是第二部分的页面-->
      <div class="secondPage">
         <router-link to="/nfoot">
           <div class="two" @click="toFoot">
             <img :src="imgSrc" alt="">
             <span style="margin-left: 0.5rem">{{shopName}}</span>
             <span class="glyphicon glyphicon-menu-right pull-right"></span>
           </div>
         </router-link>
        <div class="two" v-for="data in $route.query.LmData[0]">
         <span>{{data.name}}</span>
          <span class="pull-right" style="margin-right: 0.4rem">￥{{data.price}}</span>
          <span class="text-muted pull-right" style="margin-right: 0.3rem">x{{data.num}}</span>
          <div class="clearfix"></div>
        </div>
        <div class="two">
          <span class="text-muted">配送费</span>
          <span class="pull-right" style="margin-right: 0.4rem">4</span>
          <div class="clearfix"></div>
        </div>
        <div class="two">
          <span class="pull-right" style="margin-right: 0.4rem;font-weight: bold;color: #FB6B23">实付{{countMoney}}</span>
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
            <span>{{$route.query.LmData[0][0].receiveAddress}} <div style="position: relative;top: 0;left: 2.65rem">15938412527</div>
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
  import  Vue from 'vue'
    export default {
        name: "L-orderdetails",
      data(){
          return{
            orderDetailArr:[],
            //总计价格
            countMoney:Number,
            //图片地址
            imgSrc:'',
            //店铺名称
            shopName:'',
            //店铺id
            shopiD:Number,
          }
      },
      methods:{
        toAnain(){
          Vue.axios.get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=${this.shopiD}`).then((res)=>{
            // console.log(res.data);
            this.$store.state.nfoot=res.data;
            // console.log(this.$store.state.nfoot);
          }).catch((error)=>{
            console.log('请求错误!',error);
          });
          //判断数组是否长度为0
          // if(item.activities.length === 0){
          //   item.activities.push({'icon_name':'无活动'});
          // }
          // this.$store.state.nshoplist=item;
          // console.log(item);
        },
        toFoot(){
          Vue.axios.get(`https://elm.cangdu.org/shopping/v2/menu?restaurant_id=${this.shopiD}`).then((res)=>{
            // console.log(res.data);
            this.$store.state.nfoot=res.data;
            // console.log(this.$store.state.nfoot);
          }).catch((error)=>{
            console.log('请求错误!',error);
          });
          //判断数组是否长度为0
          // if(item.activities.length === 0){
          //   item.activities.push({'icon_name':'无活动'});
          // }
          // this.$store.state.nshoplist=item;
          // console.log(item);
        }
      },
      created(){
          console.log(this.$route.query.LmData[0],111)
          this.imgSrc="https://elm.cangdu.org/img/"+this.$route.query.LmData[0][0].imgPath
          this.shopiD=this.$route.query.LmData[0][0].id
          this.shopName=this.$route.query.LmData[0][0].storeName
          // //价格,计数 总计
          // let allMoney=0
          // console.log(this.$store.state.Z_shopTrolleyList);
          // this.orderDetailArr=this.$store.state.Z_shopTrolleyList;
          // for (let i in this.orderDetailArr){
          //   console.log(this.orderDetailArr[i].price)
          //   allMoney+=parseInt(this.orderDetailArr[i].num)*parseInt(this.orderDetailArr[i].price)
          // }
          let allMoney=0
          for(let i in this.$route.query.LmData[0]){
            allMoney=parseInt(this.$route.query.LmData[0][i].num)* parseInt(this.$route.query.LmData[0][i].price)
          }
          this.countMoney=allMoney+4+17348
        // console.log(this.countMoney,444)
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
  }
  .showHead{
    background: white;
    padding: 0.5rem;
  }
  .showimg{
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
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
    border-radius:50%;
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
