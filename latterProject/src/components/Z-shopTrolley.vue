<template>
    <div class="Z-shopTrolleys">
      <div class="Z-mask" v-if="Z_boolShopList"></div>
      <ul class="Z-shopList" v-if="Z_boolShopList">
        <div class="Z-shopListHead">
          <span class="shopListHead floatLeft">购物车</span>
          <span class="shopListHead floatRight" @click="empty()">清空</span>
        </div>
        <li v-for="(prodata,index) in Z_shopTrolleyList">
          <div class="proName floatLeft">{{prodata.name}}</div>
          <div class="proPrice floatLeft">{{prodata.price}}</div>
          <div class="proNums floatLeft">
            <span class="proNum" @click="proNumsub(index)">-</span>
            <span>{{prodata.num}}</span>
            <span class="proNum" @click="proNumadd(index)">+</span>
          </div>
        </li>
      </ul>
      <!--小红点显示商品数量-->
      <div class="Z-shopTrolleyLogo">
        <el-badge :value="Z_shopTrolleyListLength" class="item" :hidden="Z_shopTrolleyListLength?false:true">
        </el-badge>
      </div>

      <div class="Z-shopTrolley">
        <div class="Z-moneys" @click="Z_getShopTrolleyList()">
          <div class="Z-money">
            <span>￥{{allMoney}}</span>
          </div>
          <div class="Z-dispatch">
            <span>{{Z_shoplist.piecewise_agent_fee.tips}}</span>
          </div>
        </div>
        <div class="Z-biginDispatchs">
          <div class="Z-beginDispatch" v-if="Z_boolFootUp">还差￥{{Z_footUpMoney}}起送</div>
          <router-link to="/confirmorder">
            <div class="Z-footUp" v-if="!Z_boolFootUp" @click="Z_sendProList()">去结算</div>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import totalVue from "../Z_total";
    export default {
        name: "Z-shopTrolley",
      // 在组件实例化完毕之后立刻监听Z_shopTrolley-event事件
      created(){
        totalVue.$on("Z_shopTrolley-event", this.getNfootMsg);
      },
      data(){
          return{
            Z_boolFootUp:true,
            Z_boolShopList:false,
            Z_shoplist:this.$store.state.nshoplist,
            Z_shopTrolleyList:[],
            allMoney:0,
            Z_footUpMoney:0,
            Z_shopTrolleyListLength:0
          }
      },
      methods:{
        Z_getShopTrolleyList(){
          this.Z_boolShopList=!this.Z_boolShopList;
          },
        getAllMoney(){
          let temp=0;
          let length=0;
          for (let i =0;i<this.Z_shopTrolleyList.length;i++){
            temp+=this.Z_shopTrolleyList[i].price*this.Z_shopTrolleyList[i].num;
            length+=this.Z_shopTrolleyList[i].num;
          }
          this.allMoney=temp;
          this.Z_shopTrolleyListLength=length;
        },
        getFootUpMoney(){
          if (this.allMoney>=this.Z_shoplist.float_minimum_order_amount) {
            this.Z_boolFootUp=false;
          }else {
            this.Z_boolFootUp=true;
            this.Z_footUpMoney=this.Z_shoplist.float_minimum_order_amount-this.allMoney;
          }
        },
        getNfootMsg(data){
          let Z_onePro = {name:"",price:0,num:0};
          Z_onePro.name = data[0].name;
          Z_onePro.price = data[0].price;
          if (this.Z_shopTrolleyList==null){
            this.Z_shopTrolleyList.push(Z_onePro);
            this.Z_shopTrolleyList[0].num++;
          } else {
            for (let i =0;i<this.Z_shopTrolleyList.length;i++){
              if (this.Z_shopTrolleyList[i].name==data[0].name) {
                this.Z_shopTrolleyList[i].num++;
                this.getAllMoney();//计算总价
                this.getFootUpMoney();//计算起送价格
                return 0;
              }
            }
            Z_onePro.num=1;
            this.Z_shopTrolleyList.push(Z_onePro);
          }
          // console.log(this.Z_shopTrolleyList);
          this.getAllMoney();//计算总价
          this.getFootUpMoney();//计算起送价格
        },
        proNumsub(index){
          if (this.Z_shopTrolleyList[index].num>1){
            this.Z_shopTrolleyList[index].num--;
          } else {
            this.Z_shopTrolleyList.splice(index,1);
          }
          this.getAllMoney();//计算总价
          this.getFootUpMoney();//计算起送价格
        },
        proNumadd(index){
          this.Z_shopTrolleyList[index].num++;
          this.getAllMoney();//计算总价
          this.getFootUpMoney();//计算起送价格
        },
        empty(){
          this.Z_shopTrolleyList=[];
          this.getAllMoney();//计算总价
          this.getFootUpMoney();//计算起送价格
        },
        Z_sendProList(){
          this.$store.state.Z_shopTrolleyList=this.Z_shopTrolleyList;
        }
      }
    }
</script>

<style scoped>
  .item {
    margin-left: 25px;
  }
  .Z-mask{
    width: 16rem;
    height: 25rem;
    background-color: rgba(0,0,0,0.3);
  }
  ul,li{
    list-style: none;
  }
  .Z-shopTrolleys{
    width: 16rem;
    position: fixed;
    bottom: 0;
    left: 0;
    color: white;
    text-align: center;
  }
  .Z-shopTrolleyLogo{
    width: 2rem;
    height: 2rem;
    background-color: deepskyblue;
    border-radius: 50%;
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
    z-index: 10;
  }
  .Z-shopTrolley{
    width: 16rem;
    height: 2rem;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .Z-moneys{
    width: 11rem;
    height: 2rem;
    background-color: rgb(100,100,100);
    float: left;
  }
  .Z-money{
    line-height: 1rem;
  }
  .Z-dispatch{
    font-size: 12px;
  }
  .Z-biginDispatchs{
    width: 5rem;
    height: 2rem;
    background-color: rgb(50,50,50);
    float: left;
    line-height: 2rem;
  }
  .Z-beginDispatch{
    width: 5rem;
    height: 2rem;
    background-color: rgb(50,50,50);
  }
  .Z-footUp{
    width: 5rem;
    height: 2rem;
    background-color: yellowgreen;
  }
  .Z-shopList{
    color: black;
    background-color: white !important;
    margin-bottom: 2rem;
    z-index: 100;
    overflow: hidden;
  }
  .Z-shopListHead{
    width: 16rem;
    height: 2rem;
    overflow: hidden;
    background-color: rgb(200,200,200);
    line-height: 2rem;
  }
  .shopListHead{
    padding: 0 1rem;
  }
  .floatLeft{
    float: left;
  }
  .floatRight{
    float: right;
  }
  .proName{
    width: 8rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .proPrice{
    width: 3rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .proNums{
    width: 5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .proNum{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 1px black solid;
    border-radius: 50%;
    margin: 0.25rem 0.5rem 0;
    line-height: 1rem;
  }
</style>
