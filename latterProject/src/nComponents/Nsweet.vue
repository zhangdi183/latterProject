<!--外卖页轮播的分页面-->
<template>
 <div>
   <!--顶部-->
   <mt-header :title="this.$store.state.shopcart" class="nhead">
     <router-link to="" slot="left">
       <mt-button icon="back" @click="$router.go(-1)"></mt-button>
     </router-link>
   </mt-header>
   <!--这个是个导航条-->
   <div class="sweetNav">
     <span @click="span1" :class="{textColor:isFalse}">{{$store.state.shopcart}} <span class="glyphicon glyphicon-triangle-bottom sanjiao" v-if="!isFalse"></span></span>
     <span>排序 <span class="glyphicon glyphicon-triangle-bottom sanjiao1"></span></span>
     <span>筛选 <span class="glyphicon glyphicon-triangle-bottom sanjiao2"></span></span>
   </div>
   <!--这个是分类列表-->
   <div style="position: relative;overflow-y: scroll;" class="animated bounceInDown" v-if="isspan1">
     <!--左边分类-->
     <div class="productKinds">
       <li>异国料理  <span class="glyphicon glyphicon-menu-right pull-right"></span> <span class="pull-right">1785</span></li>
       <ul v-for="(d,i) in objData">
         <li @click="ifName(d.name)" id="i" :class="{back:istrue}"><img :src="d.src" alt=""> {{d.name}} <span class="glyphicon glyphicon-menu-right pull-right"></span><span class="pull-right">{{d.count}}</span></li>
       </ul>
     </div>
     <!--右边详细的-->
     <div class="detailInfor">
       <ul v-for="d in Arrdata">
         <li>{{d.name}} <span class="pull-right">{{d.count}}</span></li>
       </ul>
     </div>
   </div>
   <!--这个是排序列表-->
    <div class="order">
      <!--这是展示图片的-->
      <div class="showImg">
        <div>
          <img src="../L-imgs/sort.png"/>
        </div>
        <div>
          <img src="../L-imgs/place.png"/>
        </div>
        <div>
          <img src="../L-imgs/flame.png"/>
        </div>
        <div>
          <img src="../L-imgs/money.png"/>
        </div>
        <div>
          <img src="../L-imgs/clock.png"/>
        </div>
        <div>
          <img src="../L-imgs/star.png" alt="">
        </div>
      </div>
      <!--这个展示文字-->
      <div class="showText">
        <div>
          <span>智能排序</span>
        </div>
        <div>
          <span>距离最近</span>
        </div>
        <div>
          <span>销量最高</span>
        </div>
        <div>
          <span>起送价最低</span>
        </div>
        <div>
          <span>配送速度最快</span>
        </div>
        <div>
          <span>评分最高</span>
        </div>
      </div>
    </div>
 </div>

</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Nsweet",
      data(){
          return{
            meat:this.$store.state.shopcart,
            objData:[
              {name:'快餐便当',src:'https://fuss10.elemecdn.com/b/ff/533cf9617bd57fe1dfb05603bebcfpng.png',count:1384},
              {name:'小吃夜宵',src:'https://fuss10.elemecdn.com/4/35/a7eda7659bac613e524ca7c1ae12epng.png',count:114},
              {name:'果蔬生鲜',src:'https://fuss10.elemecdn.com/6/23/5a6fce94bed63a21508f68a72c158png.png',count:55},
              {name:'特色菜系',src:'https://fuss10.elemecdn.com/6/55/ac1bfd1e818013a9f099e964f1e9djpeg.jpeg',count:49},
              {name:'商店超市',src:'https://fuss10.elemecdn.com/a/c1/5c5dd59b641bdfdeb822362547fb4png.png',count:24},
              {name:'鲜花蛋糕',src:'https://fuss10.elemecdn.com/0/e0/7558e305abfb2618ae760142222f9png.png',count:14},
              {name:'全部商家',src:'//elm.cangdu.org/img/default.jpg',count:0},
              {name:'甜品饮品',src:'https://fuss10.elemecdn.com/4/82/43703799592368585b23589cf3ba8png.png',count:24},
            ],
            backStyle:{
              background:''
            },
            istrue:false,
            Arrdata:[],
            //这个事判断分类列表
            isspan1:false,
            //这个是判断列表第一个的
            isFalse:false
          }
      },
      methods:{
          ifName(e){

            Vue.axios.get(`https://elm.cangdu.org/shopping/v2/restaurant/category`).then((res)=>{
              console.log(res)
              this.Arrdata=res.data[1].sub_categories
              if (e==='快餐便当'){
                let a=res.data[1].sub_categories.splice(0,1)
                this.Arrdata=res.data[1].sub_categories
              }else if (e==='小吃夜宵'){
                let  a=res.data[2].sub_categories.splice(0,1)
                this.Arrdata=res.data[2].sub_categories
              }else if (e==='果蔬生鲜'){
                let  a=res.data[3].sub_categories.splice(0,1)
                this.Arrdata=res.data[3].sub_categories
              }else if (e==='特色菜系'){
                let  a=res.data[4].sub_categories.splice(0,1)
                this.Arrdata=res.data[4].sub_categories
              }else if (e==='商店超市'){
                let  a=res.data[5].sub_categories.splice(0,1)
                this.Arrdata=res.data[5].sub_categories
              }else if (e==='鲜花蛋糕'){
                let  a=res.data[6].sub_categories.splice(0,1)
                this.Arrdata=res.data[6].sub_categories
              }else if (e==='全部商家'){
                let  a=res.data[7].sub_categories.splice(0,1)
                this.Arrdata=res.data[7].sub_categories
              }else if (e==='甜品饮品'){
                let  a=res.data[8].sub_categories.splice(0,1)
                this.Arrdata=res.data[8].sub_categories
              }
            })
          },
        span1(){
            this.isspan1=!this.isspan1
          this.isFalse=!this.isFalse
        }
      },
      created(){
        Vue.axios.get(`https://elm.cangdu.org/shopping/v2/restaurant/category`).then((res)=>{
          console.log(res)
          this.Arrdata=res.data[1].sub_categories
        });
      }
    }
</script>

<style scoped>
  .sweetNav{
    font-size: 0.6rem;
    padding: 0.2rem 0 0.2rem 1.5rem  ;
    width: 16rem;
    background: white;
    position: relative;
  }
  .sweetNav span{
    display: inline-block;
    width: 4.1rem;
    text-align: center;
    margin-left: 0.5rem;
    padding: 0 0.2rem;
    background: no-repeat  ;
    background-size: contain;
    border-right: 0.05rem solid #9f9f9f;
  }
  .sweetNav span:last-child{
    border: 0;

  }
  .productKinds{
    font-size: 0.55rem;
    width: 50%;
    background: #f1f1f1;
    display: inline-block;
  }
  .productKinds li{
    list-style: none;
    padding: 0.2rem 0.5rem;
    color: #9f9f9f;
    margin: 0 !important;
  }
  .productKinds li img{
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.2rem;
  }
  .productKinds li span:last-child{
    color: white;
    margin-right: 0.2rem;
    border-radius: 20%;
    background: #9f9f9f;
    font-size: 0.5rem;
    padding: 0.1rem;
  }
  .productKinds li:nth-child(2){
    list-style: none;
    padding: 0.2rem 0;
    background: white !important;
    color: #9f9f9f;
  }
  .back:nth-child(n){
    background: white !important;
  }
  .detailInfor{
    display: inline-block;
    width: 49%;
    font-size: 0.65rem;
    position: absolute;
    top: 0;
    background: white;
  }
  .detailInfor li{
    list-style: none;
    padding: 0.2rem 0.5rem;
    color: #9f9f9f;
    margin: 0 !important;
    border-bottom: 0.05rem solid #9f9f9f;
  }
  .sanjiao{
    position: absolute;
    top: 0.45rem;
    left:3rem;
  }
  .sanjiao1{
    position: absolute;
    top: 0.45rem;
    left:7.35rem;
  }
  .sanjiao2{
    position: absolute;
    top: 0.45rem;
    left:12.35rem;
  }
  .textColor{
    color: #337AB7;
  }
  .order{
    width: 16rem;
    background: white;
  }
.showImg{
  display: inline-block;
  width: 2rem;
  text-align: right;
}
  .showImg div{
    padding: 0.5rem;
    box-sizing: border-box;
  }
  .showImg img{
    width: 80%;
  }
  .showText{
    display: inline-block;
    width: 13rem;
    text-align: left;
  }
  .showText div{
    padding: 0.5rem 0 0.5rem 0.5rem;
    font-size: 0.65rem;
    border-bottom: 0.05rem solid #E4E4E4;
  }

</style>
