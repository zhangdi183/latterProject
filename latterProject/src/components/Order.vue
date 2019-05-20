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
      <div class="one" v-for="(data,index) in order">
        <!--<div v-for="data1 in z_price">-->
          <!--图片请求-->
        <router-link to="/Lorderdetails">
          <img :src="'//elm.cangdu.org/img/'+data[0].imgPath" alt="暂无图片" @click="sendOrder(order)">
        </router-link>
          <ul>
            <router-link to="/Lorderdetails">
              <li class="first" @click="sendOrder(order)">
                <!--商品名字-->
                <span class="proname">
              {{data[0].storeName}}<i class="el-icon-arrow-right icon"></i>
            </span>
                <span class="pay">等待支付</span><br>
                <span class="clean"></span>
                <!--下单时间-->
                <span class="time">{{data[0].now}}</span>
              </li>
              <!--商品名称,数量,价格-->
              <li class="sencod" @click="sendOrder(order)">
                <span class="num">{{data[0].name}} 等{{data.length}}件商品</span>
                <span class="price">¥{{z_price[index]}}</span>
              </li>
        </router-link>
            <!--剩余支付时间-->
            <li class="tird">
            <span class="topay" @click="payPro">
              <span><Nroot :endTime='endTime' class="time_res"></Nroot></span>
            </span>
              <span class="clean"></span>
            </li>
          </ul>
          <div class="clean"></div>
        <!--</div>-->
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
  import Nroot from './Nroot'
    export default {
        name: "Order",
      components: {Nroot, Bottom},
      data(){
          return{
            isShow:false,
            order:this.$store.state.Z_tempList,
            z_price:[],
            //剩余支付时间
            endTime:'',
          }
      },
      methods:{
        payPro(){
          this.isShow=true;
        },
        sendOrder(data){
          console.log(data);
          this.$router.push({path:'/Lorderdetails',query:{LmData:data}})
        }
      },
      created(){
          console.log(this.order);
        for(let i=0;i<this.$store.state.Z_tempList.length;i++){
          if(this.$store.state.Z_tempList[i].length===0){
            this.$store.state.Z_tempList.splice(i,1);
          }
        }
        this.order=this.$store.state.Z_tempList;
        console.log(this.order);
        // console.log(this.order);
          /*价格*/
          let aa=0;
          for(let i=0;i<this.order.length;i++){
            for(let b of this.order[i]){
              aa += b.price*b.num;
            }
            this.z_price[i]=aa;
            aa=0;
          }
          
          /*时间*/
        for(let data of this.order){
          this.endTime=data[0].now.split(':')[0]+':'+(Number(data[0].now.split(':')[1])+15)%60+':'+'00';
          console.log(this.endTime);
        }
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
  .one ul .topay .time_res Nroot{
    background-color: blue;
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
