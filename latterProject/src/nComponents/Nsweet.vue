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
     <span @click="span1" :class="{textColor:isFalse}">{{$store.state.shopcart}} <span class="glyphicon glyphicon-triangle-bottom sanjiao"></span></span>
     <span @click="span2" :class="{textColor:isFalse1}">排序 <span class="glyphicon glyphicon-triangle-bottom sanjiao1"></span></span>
     <span @click="span3" :class="{textColor:isFalse2}">筛选 <span class="glyphicon glyphicon-triangle-bottom sanjiao2"></span></span>
   </div>
   <!--这个是分类列表-->
   <div style="position: absolute;overflow-y: scroll;width: 16rem;z-index: 100; background: white" class="animated bounceInDown" v-if="isspan1">
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
         <li @click="rightDetail(d)">{{d.name}} <span class="pull-right">{{d.count}}</span></li>
       </ul>
     </div>
   </div>
   <!--这个是排序列表-->
    <div class="order animated bounceInDown"  v-if="isspan2">
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
        <div v-for="(item,index) in orderArr"  :id="index">
          <span @click="orderBy(item)">{{item}}</span>
        </div>
      </div>
    </div>
   <!--商家品牌-->
   <div class="near">
     <router-link to="/nfoot" v-for="(item,i) in shop" :key="i" class="bottom">
       <a @click="sendId(item.id,item)">
         <img :src="'//elm.cangdu.org/img/'+item.image_path" alt="img" class="img">
         <div class="right">
            <span class="zong"><span class="pp" v-if="item.is_premium===true">品牌</span>{{item.name}}<span class="fr">
              <span class="bzp" v-for="items in item.supports">{{items.icon_name}}</span><span class="clean"></span>
            </span></span>
           <div class="pf">
             <!--评分-->
             <el-rate
               v-model="item.rating"
               disabled
               disabled-void-color="#ccc"
               show-score
               text-color="#ff9900"
               class="ele">
             </el-rate>
             <span class="ys">月售{{item.recent_order_num}}单</span><br>
             <span class="pr">
                  <span class="fn">{{item.delivery_mode.text}}</span>
                  <span class="zsd">{{item.supports[1].name}}</span>
               </span><br>
             <span class="clean"></span>
             <span class="clean"></span>
             <!--起送-->
             <span class="qs">
              ¥{{item.float_minimum_order_amount}}起送 / {{item.piecewise_agent_fee.tips}}
              <span class="dis">{{item.distance}} / <span class="time">{{item.order_lead_time}}</span></span>
            </span>
           </div>
         </div>
         <div class="clean"></div>
       </a>
     </router-link>
   </div>
   <!--这是筛选页面-->
   <div class="screen animated bounceInDown" v-if="isspan3">
    <h6><small>配送方式</small></h6>
     <div class="Courier" @click="choose1" :style="back1"><img src="../L-imgs/蜂鸟.png" >蜂鸟专送</div>
     <h6><small>商家属性(可以多选)</small></h6>
     <div>
       <div class="screen_text" @click="choose2">
         <span class="Lm_screen_text">{{t1}}</span>
         <span>品牌商家</span>
       </div>
       <div class="screen_text" @click="choose3">
         <span class="Lm_screen_text1">{{t2}}</span>
         <span>外卖保</span>
       </div>
       <div class="screen_text" @click="choose4">
         <span class="Lm_screen_text">{{t3}}</span>
         <span>准时达</span>
       </div>
       <div class="screen_text" @click="choose5">
         <span class="Lm_screen_text2">{{t4}}</span>
         <span>新店</span>
       </div>
       <div class="screen_text" @click="choose6">
         <span class="Lm_screen_text3">{{t5}}</span>
         <span>在线支付</span>
       </div>
       <div class="screen_text" @click="choose7">
         <span class="Lm_screen_text1">{{t6}}</span>
         <span>开发票</span>
       </div>
     </div>
     <div class="text-center" style="margin-top: 0.5rem">
       <button class="btn button1" @click="btn1">清空</button>
       <button class="btn btn-success button2" @click="btn2">确认({{count}})</button>
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
            isspan2:false,
            isspan3:false,
            //这个是判断列表第一个的
            isFalse:false,
            isFalse1:false,
            isFalse2:false,
            //这是一个假的
            orderArr:['智能排序','距离最近','销量最高','起送价最低','配送速度最快','评分最高'],
            shop:'',
            sureText:'确认',
            count:0,
            //这些都是属性的背景样式
            back1:{
              background: 'white'
            },
            t1:'品',
            t2:'保',
            t3:'准',
            t4:'新',
            t5:'付',
            t6:'票',
            //这是个数组
            a:[],
          }
      },
      methods:{
          //这是第一个点击事件
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
        //这个是导航页的第一个点击事件
        span1(){
            this.isspan1=!this.isspan1
          this.isFalse=!this.isFalse
          if (this.isspan2 === true) {
            this.isspan2=false
            this.isFalse1=!this.isFalse1
          }else if (this.isspan3===true){
            this.isFalse2=!this.isFalse2
            this.isspan3=!this.isspan3
          }
        },
        //这个是排序页的点击事件
        orderBy(name){
             if (name==='智能排序'){
               Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.$store.state.LmFindCitysHis[0].latitude}&longitude=${this.$store.state.LmFindCitysHis[0].longitude}&order_by=4`).then((res)=>{
                 console.log(res)
               });
             }else if(name==='距离最近'){
               Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.$store.state.LmFindCitysHis[0].latitude}&longitude=${this.$store.state.LmFindCitysHis[0].longitude}&order_by=5`).then((res)=>{
                 this.shop=res.data
               });
             }else if(name==='销量最高'){
               Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.$store.state.LmFindCitysHis[0].latitude}&longitude=${this.$store.state.LmFindCitysHis[0].longitude}&order_by=6`).then((res)=>{
                 this.shop=res.data
               });
             }else if(name==='起送价最低'){
               Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.$store.state.LmFindCitysHis[0].latitude}&longitude=${this.$store.state.LmFindCitysHis[0].longitude}&order_by=1`).then((res)=>{
                 this.shop=res.data
               });
             }else if(name==='配送速度最快'){
               Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.$store.state.LmFindCitysHis[0].latitude}&longitude=${this.$store.state.LmFindCitysHis[0].longitude}&order_by=2`).then((res)=>{
                 this.shop=res.data
               });
             }else if(name==='评分最高'){
               Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.$store.state.LmFindCitysHis[0].latitude}&longitude=${this.$store.state.LmFindCitysHis[0].longitude}&order_by=3`).then((res)=>{
                 this.shop=res.data
               });
             }
        },
        span2(){
            this.isFalse1=!this.isFalse1
            this.isspan2=!this.isspan2
          if (this.isspan1===true){
            this.isspan1=false
            this.isFalse=!this.isFalse
          }else if (this.isspan3===true){
            this.isFalse2=!this.isFalse2
            this.isspan3=!this.isspan3
          }
        },
        span3(){
            this.isFalse2=!this.isFalse2
            this.isspan3=!this.isspan3
          if(this.isspan1===true){
            this.isspan1=false
            this.isFalse=!this.isFalse
          }else if (this.isspan2===true){
            this.isspan2=false
            this.isFalse1=!this.isFalse1
          }
        },
        //以下是商家属性的点击操作
        choose1(){
            if (this.back1.background==='white'){
              this.back1.background='#e1e1e1'
              this.count+=1
              this.a.push(1)
            } else if(this.back1.background==='#e1e1e1'){
              this.back1.background='white';
              this.a.pop()
              if (this.count>0){
                this.count-=1
              }
            }
        },
        choose2(){
          if (this.t1==='品'){
            this.t1='√'
            this.count+=1
            this.a.push(2)
          } else if(this.t1==='√'){
            this.t1='品';
            this.a.pop()
            if (this.count>0){
              this.count-=1
            }
          }
        },
        choose3(){
          if (this.t2==='保'){
            this.t2='√'
            this.count+=1
            this.a.push(7)
          } else if(this.t2==='√'){
            this.t2='保';
            this.a.pop()
            if (this.count>0){
              this.count-=1
            }
          }
        },
        choose4(){
          if (this.t3==='准'){
            this.t3='√'
            this.count+=1
            this.a.push(9)
          } else if(this.t3==='√'){
            this.t3='准';
            this.a.pop()
            if (this.count>0){
              this.count-=1
            }
          }
        },
        choose5(){
          if (this.t4==='新'){
            this.t4='√'
            this.count+=1
            this.a.push(8)
          } else if(this.t4==='√'){
            this.t4='新';
            this.a.pop()
            if (this.count>0){
              this.count-=1
            }
          }
        },
        choose6(){
          if (this.t5==='付'){
            this.t5='√'
            this.count+=1
            this.a.push(5)
          } else if(this.t5==='√'){
            this.t5='付';
            this.a.pop()
            if (this.count>0){
              this.count-=1
            }
          }
        },
        choose7(){
          if (this.t6==='票'){
            this.t6='√'
            this.count+=1
            this.a.push(4)
          } else if(this.t6==='√'){
            this.t6='票';
            this.a.pop()
            if (this.count>0){
              this.count-=1
            }
          }
        },
        //这个是清空按钮的点击事件
        btn1(){
            this.back1.background='white';
            this.t1='品';
            this.t2='保';
            this.t3='准';
            this.t4='新';
            this.t5='付';
            this.t6='票';
            this.count=0
        },
        btn2(){
            this.isspan3=!this.isspan3
          Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.$store.state.cityinfo.latitude}&longitude=${this.$store.state.cityinfo.longitude}&delivery_mode[]=${this.a}`).then((res)=>{
          console.log(res.data)
          }).catch((err)=>{
            console.log(err,'请求错误')
          })
          },
        //这个是查看具体商铺的点击事件
        rightDetail(data){
            this.isspan1=!this.isspan1
           Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.$store.state.cityinfo.latitude}&longitude=${this.$store.state.cityinfo.longitude}&restaurant_category_ids[]=${data.id}`).then((res)=>{
             this.shop=res.data
           })
        }
      },
      created(){
        Vue.axios.get(`https://elm.cangdu.org/shopping/v2/restaurant/category`).then((res)=>{
          this.Arrdata=res.data[1].sub_categories
        });
        Vue.axios.get('https://elm.cangdu.org/shopping/restaurants?latitude=this.$store.state.cityinfo.latitude&longitude=this.$store.state.cityinfo.longitude').then((res)=>{
          // console.log(res.data);
          this.shop=res.data;
        }).catch((error)=>{
          console.log('请求错误!',error);
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
    /*position: absolute;*/
    /*z-index: 100;*/
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
    position:absolute;
    z-index: 100;
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
  .clean{
    clear: both;
  }
  .ele{
    /*background-color: red;*/
    box-sizing: border-box;
    display: inline-block;
  }
  .tit svg{
    font-size: .9rem;
    color: #fff;
  }
  .swiper-container {
    width: 100%;
    height: 8.3rem;
  }
  .swiper-slide{
    background-color: #fff;
    padding-top: .5rem;
  }
  .swiper-slide a{
    display: block;
    width: 25%;
    float: left;
    list-style: none;
    text-align: center;
    font-size: .55rem;
    color: #666;
  }
  .swiper-slide a img{
    width: 48%;
    margin-bottom: .3rem;
  }
  .business{
    background-color: #fff;
    margin-top: .6rem;
  }
  .business .ic{
    padding: .5rem 0 0 .5rem;
    color: #999;
  }
  .bottom{
    display: block;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    padding: .9rem .4rem;
  }
  .near{
    margin-bottom: 2.5rem;
  }
  .bottom .img{
    width: 3rem;
    float: left;
  }
  .right span{
    color: #000;
    font-weight: 700;
    /*font-size: 0.65rem;*/
    line-height: 0.65rem;
  }
  .right .zong{
    display: inline-block;
    width: 100%;
  }
  .right .pp{
    font-size: .5rem;
    line-height: .6rem;
    background-color: #ffd930;
    padding: 0 .1rem;
    border-radius: .1rem;
    margin-right: .2rem;
  }
  .right .bzp{
    font-size: .5rem;
    color: #999;
    border: .025rem solid #f1f1f1;
    padding: 0 .04rem;
    border-radius: .08rem;
    margin-left: .05rem;
  }
  .right .fr{
    float: right;
  }
  .right svg{
    fill: #d1d1d1;
  }
  .right{
    /*background-color: #74ff64;*/
    width: 11.4rem;
    height: 3rem;
    float: left;
    margin-left: .5rem;
  }
  .right .ys{
    transform: scale(.8);
    margin-left: .2rem;
    font-size: .6rem;
    line-height: .9rem;
    color: #666;
    float: right;
  }
  .right .pr{
    /*background-color: red;*/
    float: right;
  }
  .right .fn{
    display: inline-block;
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
    font-size: .3rem;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
  }
  .right .zsd{
    color: #3190e8;
    border: .025rem solid #3190e8;
    font-size: .3rem;
    padding: .04rem .08rem 0;
    border-radius: .08rem;
  }
  .right .qs{
    transform: scale(.9);
    font-size: .55rem;
    color: #666;
    word-wrap:break-word
  }
  .right .dis{
    color: #999;
    font-weight: 400;
    margin-left: 2rem;
  }
  .time{
    color: #3190e8 !important;
    font-weight: 200 !important;
    font-size: 0.5rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .screen{
    background: white;
    width: 16rem;
    position: absolute;
    top: 3.3rem;
    padding: 0.5rem;
  }
  .Courier{
    width: 4rem;
    padding: 0.3rem;
    font-size: 0.5rem;
    border: 0.05rem solid #e1e1e1;
  }
  .Courier img{
    width:1.2rem;
    height:1.2rem;
  }
  .screen_text{
    width: 4.5rem;
    display: inline-block;
    padding: 0.3rem ;
    font-size: 0.5rem;
    border: 0.05rem solid #e1e1e1;
    margin-right: 0.25rem;
    margin-top: 0.2rem;
    text-align: center;
  }
  .Lm_screen_text{
    border: 0.05rem solid #3190E8;
    padding: 0.1rem;
    border-radius: 0.2rem;
    color: #3190E8;
  }
  .Lm_screen_text1{
    border: 0.05rem solid #999999;
    padding: 0.1rem;
    border-radius: 0.2rem;
    color: #999999;
  }
  .Lm_screen_text2{
    border: 0.05rem solid #EEA667;
    padding: 0.1rem;
    border-radius: 0.2rem;
    color: #EEA667;
  }
  .Lm_screen_text3{
    border: 0.05rem solid #FF4E00;
    padding: 0.1rem;
    border-radius: 0.2rem;
    color: #FF4E00;
  }
  .button1{
    background: white;
    border :0.05rem solid #e1e1e1;
    width: 5rem;
    margin-right:0.5rem ;
  }
  .button2{
    width: 5rem;
  }

</style>
