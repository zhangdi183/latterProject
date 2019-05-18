<template>
    <div class="Z-shopTrolleys">
      <div class="Z-mask" v-if="Z_boolShopList" @click="Z_maskClick()"></div>
      <ul class="Z-shopList" v-if="Z_boolShopList">
        <div class="Z-shopListHead">
          <span class="shopListHead floatLeft">购物车</span>
          <span class="shopListHead floatRight" @click="empty()">清空</span>
        </div>
        <li v-for="(prodata,index) in Z_shopTrolleyList">
          <div class="proName floatLeft">{{prodata.name}}</div>
          <div class="proPrice floatLeft">{{prodata.price}}</div>
          <div class="proNums floatLeft">
            <span class="proNum" @click="proNumsub(prodata,index)">-</span>
            <span>{{prodata.num}}</span>
            <span class="proNum" @click="proNumadd(prodata,index)">+</span>
          </div>
        </li>
      </ul>
      <!--小红点显示商品数量-->
      <div class="Z-shopTrolleyLogo"  @click="Z_getShopTrolleyList()">
        <el-badge :value="Z_shopTrolleyListLength" class="item" :hidden="Z_shopTrolleyListLength?false:true">
        </el-badge>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconchat-gray"></use>
        </svg>
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
        totalVue.$on("Z_subShopTrolley-event", this.getNfootMsg2);
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
          this.$store.state.Z_tempList=[];
          let now = new Date();
          var year = now.getFullYear();//年
          var month = now.getMonth()+1;//月  (注意：月份+1)
          var date = now.getDate();//日
          var hours = now.getHours();//小时
          var minutes = now.getMinutes();//分钟
          if(month<10){
            month = "0"+month;
          }
          if(date<10){
            date = "0"+date;
          }
          if(hours<10){
            hours = "0"+hours;
          }
          if(minutes<10){
            minutes = "0"+minutes;
          }
          const nowtime=year+'-'+month+'-'+date+' '+hours+':'+minutes;
          let tempObj={name:"",price:0,num:0,imgPath:"",storeName:"",now:nowtime,id:0};
          tempObj.name=data[0].name;
          tempObj.price=data[0].price;
          tempObj.imgPath= this.Z_shoplist.image_path;
          tempObj.storeName= this.Z_shoplist.name;
          tempObj.id=this.Z_shoplist.id;
          if (this.Z_shopTrolleyList==null){
            this.Z_shopTrolleyList.push(tempObj);
            this.Z_shopTrolleyList[0].num++;
          } else {
            for (let i =0;i<this.Z_shopTrolleyList.length;i++){
              if (this.Z_shopTrolleyList[i].name===tempObj.name) {
                this.Z_shopTrolleyList[i].num++;
                this.getAllMoney();//计算总价
                this.getFootUpMoney();//计算起送价格
                return 0;
              }
            }
            tempObj.num++;
            this.Z_shopTrolleyList.push(tempObj);
          }
          // console.log(this.Z_shopTrolleyList);
          this.getAllMoney();//计算总价
          this.getFootUpMoney();//计算起送价格
        },
        getNfootMsg2(data){
            for (let i =0;i<this.Z_shopTrolleyList.length;i++){
              if (this.Z_shopTrolleyList[i].name==data[0].name) {
                this.Z_shopTrolleyList[i].num--;
                if (this.Z_shopTrolleyList[i].num<=0){
                  this.Z_shopTrolleyList[i].num=0;
                  this.Z_shopTrolleyList.slice(i,1);
                }
                this.getAllMoney();//计算总价
                this.getFootUpMoney();//计算起送价格
                this.$forceUpdate();
                return 0;
              }
            }
        },
        proNumsub(cart,index){
          if (this.Z_shopTrolleyList[index].num>1){
            this.Z_shopTrolleyList[index].num--;
          } else {
            this.Z_shopTrolleyList.splice(index,1);
          }
          this.getAllMoney();//计算总价
          this.getFootUpMoney();//计算起送价格
          totalVue.$emit("Z_subShopT-event", cart);
        },
        proNumadd(cart,index){
          this.Z_shopTrolleyList[index].num++;
          this.getAllMoney();//计算总价
          this.getFootUpMoney();//计算起送价格
          totalVue.$emit("Z_addShopT-event", cart);
        },
        empty(){
          this.Z_shopTrolleyList=[];
          this.getAllMoney();//计算总价
          this.getFootUpMoney();//计算起送价格
          totalVue.$emit("Z_emptyShopT-event");
        },
        Z_sendProList(){
          //存入已添加进购物车的商品列表
          this.$store.state.Z_tempData=this.Z_shopTrolleyList;
        },
        Z_maskClick(){
          this.Z_boolShopList=false;
        }
      }
    }
</script>

<style scoped>
  .item {
    position: absolute;
    left: 1.4rem;
    bottom: 1rem;
  }
  .Z-mask{
    width: 16rem;
    height: 25rem;
    background-color: rgba(0,0,0,0.3);
  }
  ul,li{
    list-style: none;
  }
  .icon {
    width: 1.5rem; height: 1.5rem;
    vertical-align: -0.15rem;
    fill: currentColor;
    overflow: hidden;
    margin-top: 0.3rem;
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
