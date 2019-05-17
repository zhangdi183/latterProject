<template>
    <div>
      <!--过渡动画-->
      <div>
        <transition name="fade">
          <loading v-if="isLoading"></loading>
        </transition>
      </div>
      <!--商家详情-->
         <div class="aaa">
           <div class="top" v-if="tophide">
             <span class="glyphicon glyphicon-chevron-left back" aria-hidden="true" @click="$router.back(-1)"></span>
             <img :src="'//elm.cangdu.org/img/'+top.image_path" alt="" class="img">
             <div class="top_right">
               <strong>{{top.name}}</strong><br>
               <span>商家配送 / 分钟送达 / {{top.piecewise_agent_fee.tips}}</span><br>
               <span>公告: {{top.promotion_info}}</span>
             </div>
             <div class="clean"></div>
             <div class="res" >
               <router-link to="/nshowactive" class="rl">
                 <span class="red_res">{{top.activities[0].icon_name}}</span>
                 <span>{{top.activities[0].description}}</span>
                 <span>(APP专享)</span>
                 <span class="res_right">{{len}}个活动<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span></span>
                 <span class="clean"></span>
               </router-link>
             </div>
             <router-link to="/ndetails" class="right_next">
               <span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
               <span class="clean"></span>
             </router-link>
           </div>
           <img :src="'//elm.cangdu.org/img/'+top.image_path" alt="" class="bgimg" v-if="tophide">
           <!--头部选项卡-->
           <el-tabs v-model="activeName" id="tab">
             <el-tab-pane name="ss1" disabled></el-tab-pane>
             <el-tab-pane name="ss2" disabled></el-tab-pane>
             <el-tab-pane label="商品" name="first">
               <div class="middle">
                 <ul>
                   <li v-for="(data,index) in this.$store.state.nfoot" :class="{'selected':lidata.id===data.id?true:false}" @click="showInfo(data)" class="middle_left">
                     {{data.name}}
                     <el-badge :value="Z_addTrolleyNum[index]" class="item" v-if="Z_TrolleyNum[index]"></el-badge>
                     </li>
                 </ul>
                 <!--右边-->
                 <div class="right">
                   <div class="title">{{lidata.name}}
                     <span> {{lidata.description}}</span>
                     <span class="more">
                  <el-tooltip class="item" effect="dark" :content="lidata.name+' '+lidata.description" placement="bottom-end">
                <i class="el-icon-more"></i>
              </el-tooltip>
                </span>
                     <span class="clean"></span>
                   </div>
                   <!--右边--返回的商品数据-->
                   <ul>
                     <li v-for="(data1,index) in lidata.foods" class="middle_right">
                       <div @click="sendFoot(data1)">
                         <router-link to="/nprodes">
                           <img :src="'//elm.cangdu.org/img/'+data1.image_path" alt="">
                           <span class="new" v-if="newshow"><span>新品</span></span>
                         </router-link>
                         <div class="middle_r_r">
                      <span>
                        <strong>{{data1.name}}</strong>
                        <span class="pinp" v-if="zp">招牌</span>
                        <span class="clean"></span>
                      </span>
                           <div class="txt_des">{{data1.description}}</div>
                           <div class="rate">{{data1.tips.split(" ")[1]}}<span> 好评率{{data1.satisfy_rate}}%</span></div>
                           <div class="img_text" :class="data1.activity.image_text===''?'hid':''">{{data1.activity.image_text}}</div>
                           <div class="price" v-for="data2 in data1.specfoods">
                             <strong>¥{{data2.price}}</strong>
                             <span class="select_add" @click="addShopCart(data1.specfoods,getSj(data2),index)">{{getSj(data2)}}</span>
                               <span class="select_add" v-if="Z_boolPerNum[index]">{{Z_perNum[index]}}</span>
                               <span class="select_add" v-if="Z_boolPerNum[index]">-</span>
                             <div class="clean"></div>
                           </div>
                         </div>
                         <div class="clean"></div>
                       </div>
                     </li>
                   </ul>
                 </div>
               </div>
               <div class="clean"></div>
             </el-tab-pane>
             <el-tab-pane name="ss3" disabled></el-tab-pane>
             <el-tab-pane name="ss4" disabled></el-tab-pane>
             <!--评价-->
             <el-tab-pane label="评价" name="second" class="tab">
               <div class="rect_left">
                 <p>{{Math.floor(assess.overall_score * 10) / 10}}</p>
                 <span>综合评价</span><br>
                 <span class="small">高于周边商家{{Math.floor(assess.compare_rating*100 * 10) / 10}}%</span>
               </div>
               <div class="rect_right">
            <span>
              服务态度
              <el-rate
                v-model="cpj"
                disabled
                disabled-void-color="#ccc"
                show-score
                text-color="#ff9900"
                class="ele">
               </el-rate>
            </span>
                 <span>
              菜品评价
              <el-rate
                v-model="spj"
                disabled
                disabled-void-color="#ccc"
                show-score
                text-color="#ff9900"
                class="ele">
               </el-rate>
            </span>
                 <span>送达时间 <span class="small">{{assess.deliver_time}}分钟</span></span>
               </div>
               <span class="clean"></span>
               <!--评价-->
               <ul>
                 <li class="first">
                   <span v-for="(data,i) in tags" :class="pindex===i?'selected':data.name==='不满意'?'grey':'blue'" @click="getSelect(i)">{{data.name}}({{data.count}})</span>
                 </li>
                 <li v-for="data1 in assinfo">
                   <img :src="data1.avatar===''?avimg1:avimg2" alt="" class="tx">
                   <div class="pj_right">
                  <span>{{data1.username}}
                    <span class="time">{{data1.rated_at}}</span>
                  </span><br>
                     <span>
                    <el-rate
                      v-model="data1.rating_star"
                      disabled
                      disabled-void-color="#ccc"
                      class="ele">
                  </el-rate>
                    {{data1.time_spent_desc}}
                  </span>
                     <div class="center" v-if="ispj">
                       <div class="middle" v-if="ispjimg" v-for="pj in data1.item_ratings">
                         <img :src="pjimg+pj.image_hash.slice(0,1)+'/'+pj.image_hash.slice(1,3)+'/'+pj.image_hash.slice(3)+'.jpeg'" alt="">
                         <div class="clean"></div>
                       </div>
                       <div class="clean"></div>
                       <div class="bq" v-for="dor in data1.item_ratings">
                         <span>{{dor.food_name}}</span>
                       </div>
                     </div>
                   </div>
                   <div class="clean"></div>
                 </li>
               </ul>
             </el-tab-pane>
           </el-tabs>
         </div>
         <div class="alert_img" v-if="ishide" @click="closeThis">
           <div class="box" @click.stop>
             <div v-for="data in btndata">
               <p class="box_tit">{{data.name}}
                 <span @click="closeThis"><i class="el-icon-close"></i></span>
                 <span class="clean"></span>
               </p>
               <div class="space">
                 <p>规格</p>
                 <span v-for="(data1,i) in data.specs" class="sel" :class="ggselected===i?'seled':''" @click="willSeleced(i)">{{data1.value}}</span>
               </div>
               <div class="box_bottom">
                 <p>
                   <span class="fh">¥ </span>{{data.price}}
                   <span class="add_cart" @click="willAddCart(btndata)"><el-button type="primary" size="small">加入购物车</el-button></span>
                   <span class="clean"></span>
                 </p>
               </div>
             </div>
           </div>
         </div>
      <ZShopTrolley></ZShopTrolley>
    </div>
</template>

<script>
  import { Navbar, TabItem } from 'mint-ui';
  import Vue from 'vue'
  import Loading from '../components/loading/trans'
  import ZShopTrolley from "../components/Z-shopTrolley";
  import totalVue from "../Z_total"
  import Bottom from "../components/Bottom";
  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
    export default {
        name: "Nfoot",
      components:{Bottom, Loading,ZShopTrolley },
      data(){
          return{
            activeName: 'first',
            tabPosition: 'left',
            sort:'',
            lidata:'',
            zp:true,
            newshow:true,
            top:this.$store.state.nshoplist,
            len:this.$store.state.nshoplist.activities.length,
            tophide:true,
            //加购 选规格的变量
            isadd:true,
            issele:true,
            lengg:'',
          //  评价定义的变量
            eval:this.$store.state.nfoot,
            assess:'',
            tags:'',
            assinfo:'',
            pindex:0,
            second:'',
            cpj:0,
            spj:0,
            //头像
            avimg1:'',
            avimg2:'',
            //评价图片
            pjimg:'https://fuss10.elemecdn.com/',
            //定义变量分别控制评价图片和标签的显隐
            ispjimg:true,
            ispj:true,
            //无限滚动
  
            isLoading: true,
            ishide:false,
            btndata:'',
            ggselected:'',
            //小红圈数字
            Z_addTrolleyNum:[],
            //控制小红圈显隐
            Z_TrolleyNum:[],
            //商品购买数量
            Z_perNum:[],
            //商品数量的显隐
            Z_boolPerNum:[],
          }
      },
      mounted(){
        const me = this;
        // 初始化页面数据
        me.loadPageData();
        
      },
      //配合first页面,将无活动的店铺筛选过滤,并将top隐藏
      beforeMount(){
        for(let arr of this.top.activities){
          if(arr.icon_name === '无活动'){
            this.tophide=false;
          }
        }
      },
      //-----------------------------------------------------
      created(){
        // console.log(this.$store.state.nfoot[0]);
        this.lidata = this.$store.state.nfoot[0];
        for(let e of this.$store.state.nfoot) {
          for (let i of e.foods) {
            //描述
            if (i.activity === null) {
              i.activity = {'image_text': ''};
              // let v=i.activity.hasOwnProperty('image_text');
            }

            /*招牌--新品*/
            let v = i.attributes;
            for (let food of v) {
              if (food === null) {
                this.zp = false;
                this.newshow = false;
              } else if (v.length === 2) {
                this.zp = true;
                this.newshow = true;
              } else if (v.length === 1 && food.icon_name === "招牌") {
                this.zp = true;
                this.newshow = false;
              } else if (v.length === 1 && food.icon_name === "新") {
                this.newshow = true;
                this.zp = false;
              }
            }
            // console.log(v.length,v);

            let hash = {};
            i.specfoods = i.specfoods.reduce((preVal, curVal) => {
              hash[curVal.id] ? '' : hash[curVal.id] = true && preVal.push(curVal);
              return preVal
            }, []);
          }
        }
        for (let i=0;i<this.$store.state.nfoot.length;i++){
          this.Z_addTrolleyNum[i]=0;
        }
        for (let i=0;i<this.lidata.foods.length;i++){
          this.Z_perNum[i]=0;
        }
      },
      methods:{
        showInfo(e) {
          // console.log(this.$store.state.nfoot);
          this.lidata = e;
          for (let i of e.foods) {
            //描述
            if (i.activity === null) {
              i.activity = {'image_text': ''};
              // let v=i.activity.hasOwnProperty('image_text');
            }
  
            /*招牌--新品*/
            let v = i.attributes;
            for (let food of v) {
              if(food === null) {
                this.zp = false;
                this.newshow = false;
              } else if (v.length === 2) {
                this.zp = true;
                this.newshow = true;
              } else if (v.length === 1 && food.icon_name === "招牌") {
                this.zp = true;
                this.newshow = false;
              } else if (v.length === 1 && food.icon_name === "新") {
                this.newshow = true;
                this.zp = false;
              }
            }
              // console.log(v.length,v);
              
            let hash = {};
            i.specfoods = i.specfoods.reduce((preVal, curVal) => {
              hash[curVal.id] ? '' : hash[curVal.id] = true && preVal.push(curVal); return preVal
            }, []);
          }
        },
        //评价点击变色
        getSelect(i){
          this.pindex=i;
        },
        sendFoot(footdata){
          // console.log(footdata);
          this.$store.state.nfootPro=footdata;
        },
        
        getSj(e){
          if(e.specs.length===0){
            return '+'
          }else {
            return '选规格'
          }
        },
        //分类按钮小红圈数字改变
        Z_shopTrolleyNumChange(cart){
          console.log(this.$store.state.nfoot);
          console.log(cart);
          for (let i=0;i<this.$store.state.nfoot.length;i++){
            for (let j=0;j<this.$store.state.nfoot[i].foods.length;j++) {
              if (this.$store.state.nfoot[i].foods[j].item_id==cart[0].item_id) {
                this.Z_addTrolleyNum[i]++;
                this.Z_TrolleyNum[i]=true;
              }
            }
          } 
        },
        /*购物车*/
        addShopCart(cart1,eve,index){
          // console.log(cart1);
          if(eve==='+'){
            // console.log(this.$store.state.Z_shopTrolleyList);
            totalVue.$emit("Z_shopTrolley-event", cart1);
            this.Z_shopTrolleyNumChange(cart1);
            this.Z_perNum[index]++;
            this.Z_boolPerNum[index]=true;
            this.$forceUpdate();
          }
          if(eve==='选规格'){
            //传16、获取食品列表 specfoods数组
            this.ishide=true;
            this.btndata=cart1;
          }
        },
        closeThis(){
          this.ishide=false;
        },
        willSeleced(index){
          this.ggselected=index;
        },
        //加入购物车的点击事件
        willAddCart(cart2){
          this.ishide=false;
          totalVue.$emit("Z_shopTrolley-event", cart2);
          this.Z_shopTrolleyNumChange(cart2);
          // console.log(this.$store.state.nfootPro);
          // console.log(this.lidata);
        },
        /*过渡动画*/
    loadPageData: function() {
      for(let data1 of this.eval){
        //获取评价的分数的请求
        Vue.axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${data1.restaurant_id}/ratings/scores`).then((res)=>{
          this.isLoading = false;
          // console.log(res.data);
          this.assess=res.data;
          this.cpj=Number(this.assess.service_score.toFixed(1));
          this.spj=Number(this.assess.food_score.toFixed(1));
          // console.log(typeof this.cpj,typeof this.spj);
        }).catch((error)=>{
          console.log('请求错误!',error);
        });
        //获取评价分类
        Vue.axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${data1.restaurant_id}/ratings/tags`).then((res)=>{
          this.isLoading = false;
          // console.log(res.data);
          this.tags=res.data;
        }).catch((error)=>{
          console.log('请求错误!',error);
        });
        //获取评价信息
        Vue.axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${data1.restaurant_id}/ratings?offset=0&limit=10`).then((res)=>{
          this.isLoading = false;
          // console.log(res.data);
          this.assinfo=res.data;
          for(let img of this.assinfo){
            //头像图片获取
            let urlimg='https://fuss10.elemecdn.com/';
            if(img.avatar!==''){
              this.avimg2=urlimg+img.avatar.slice(0,1)+'/'+img.avatar.slice(1,3)+'/'+img.avatar.slice(3)+'.jpeg'
            }else {
              this.avimg1='//elm.cangdu.org/img/default.jpg';
            }
            //判断评价是否有图片
            for(let is of img.item_ratings){
              if(is===null){
                this.ispj=false;
              }else {
                let arr=[];
                arr.push(is.image_hash);
                if(arr===null){
                  this.ispjimg=false;
                }
              }
            }
          }
        }).catch((error)=>{
          console.log('请求错误!',error);
        });
      }
    },
      },
    }
</script>

<style scoped>
  .clean{
    clear: both;
  }
  li{
    list-style: none;
  }
  .aaa{
    margin-bottom: 1.7rem;
  }
  .middle_left{
    box-sizing: border-box;
    padding: .6rem 0 .6rem .5rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  ul{
    width: 23%;
    float: left;
  }
  .right{
    width: 77%;
    /*height: 8rem;*/
    background-color: #fff;
    float: left;
  }
  .selected{
    border-left: .15rem solid #3190e8;
    background-color: #fff;
  }
  .show{
    display: none;
  }
  .title{
    background-color: #f5f5f5;
    font-size: .7rem;
    color: #666;
    font-weight: 700;
    box-sizing: border-box;
    padding: .4rem;
  }
  .title span{
    font-size: .5rem;
    color: #999;
  }
  .title .more{
    float: right;
  }
  .right ul{
    width: 100%;
  }
  .middle_right{
    /*background-color: red;*/
    width: 100%;
    box-sizing: border-box;
    padding: .5rem 0 .5rem .3rem;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
  }
  .middle_right img{
    width: 20%;
    float: left;
  }
  .middle_right .new{
    display: inline-block;
    width: 3rem;
    height: 3rem;
    font-size: .4rem;
    position: absolute;
    left: -1rem;
    top: -1rem;
    color: rgb(255, 255, 255);
    background-color: rgb(94, 196, 82);
    transform: rotate(-45deg) translate(.2rem,-1rem);
  }
  .middle_right .new span{
    position: absolute;
    bottom: .05rem;
    left: .8rem;
  }
  .middle_r_r{
    width: 80%;
    /*background-color: yellow;*/
    float: left;
    box-sizing: border-box;
    padding: .1rem .3rem;
  }
  .middle_r_r .pinp,.middle_r_r .img_text{
    display: inline-block;
    border: 1px solid rgb(240, 115, 115);
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
    font-size: .3rem;
    font-weight: 400;
    padding: 0 .15rem;
  }
  .middle_r_r .pinp,.middle_r_r .hid{
    display: none;
  }
  .middle_r_r .pinp{
    color: rgb(240, 115, 115);
    float: right;
  }
  .middle_r_r .img_text{
    color: rgb(241, 136, 79);
    max-width: 8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .middle_r_r strong{
    font-size: .7rem;
    color: #333;
  }
  .middle_r_r .txt_des{
    font-size: .5rem;
    color: #999;
    line-height: .9rem;
  }
  .middle_r_r .rate{
    font-size: .5rem;
    color: #333;
  }
  .middle_r_r .price strong{
    font-size: .7rem;
    color: #f60;
    font-weight: 700;
  }
  .middle_r_r .price span{
    display: inline-block;
    font-size: .55rem;
    color: #fff;
    padding: .06rem .2rem;
    background-color: #3190e8;
    border-radius: .2rem;
    border: 1px solid #3190e8;
    float: right;
    margin-right: .35rem;
    }
  .middle_r_r .price .add{
    font-weight: 900;
  }
  .middle_r_r .price .hidden{
    display: none;
  }
  .top{
    background-color: rgba(0,0,0,0.3);
    box-sizing: border-box;
    padding: .5rem .35rem .5rem .35rem;
    position: relative;
    /*overflow: hidden;*/
    z-index: 99;
  }
  .top .back{
    background-color: transparent;
    position: absolute;
    top: .2rem;
    left: .4rem;
    color: #fff;
    font-size: .8rem;
  }
  .top .img{
    width: 3.2rem;
    float: left;
  }
  .top .top_right{
    max-width: 65%;
    float: left;
    /*background-color: #ffdeda;*/
    padding: .1rem 0 0 .25rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .top .top_right strong{
    font-size: .8rem;
    color: #fff;
    margin-bottom: .3rem;
  }
  .top .top_right span{
    font-size: .4rem;
    color: #fff;
    margin-bottom: .3rem;
  }
  .top .res{
    margin-top: .5rem;
    color: #fff;
    font-size: .5rem;
  }
  .top .res a{
    color: #fff;
  }
  .top .res .red_res{
    background-color: rgb(240, 115, 115);
    border-color: rgb(240, 115, 115);
    padding: .1rem;
  }
  .top .res .res_right{
    float: right;
    color: #fff;
  }
  .top .res .rl{
    display: inline-block;
    width: 100%;
  }
  .top .res .res_right span{
    opacity: 0.5;
  }
  .top .right_next{
    color: #fff;
    position: absolute;
    right: .3rem;
    top: 43%;
  }
   .bgimg{
    position: absolute;
    top: -2rem;
    left: 0;
    width: 100%;
     height: 7.4rem;
    -webkit-filter: blur(6px);
    filter: blur(6px);
  }
  .tab .rect_left{
    width: 35%;
    float: left;
    text-align: center;
    border-right: .01rem solid #ccc;
    background-color: #fff;
    padding: .45rem 0;
  }
  .tab .color{
    background-color: #fff;
  }
  .tab .rect_right{
    width: 65%;
    float: left;
    box-sizing: border-box;
    background-color: #fff;
    padding: .5rem 0 .5rem .2rem;
  }
  .tab .rect_left p{
    font-size: 1.2rem;
    color: #f60;
    text-align: center;
    margin: 0;
  }
  .tab .rect_left span{
    font-size: .65rem;
    color: #666;
    margin-bottom: .1rem;
  }
  .tab .rect_left .small, .tab .rect_right .small{
    font-size: .3rem;
    color: #999;
  }
  .tab .rect_right span{
    color: #666;
    display: inline-block;
    padding: .08rem 0;
  }
  .tab .rect_right .ele{
    display: inline-block;
  }
  .tab ul{
    background-color: #fff;
    width: 100%;
    margin: .4rem 0;
  }
  .tab ul li{
    border-bottom: .01rem solid #ccc;
    box-sizing: border-box;
    padding: .5rem;
  }
  .tab ul .first .blue,.tab ul .first .grey,.tab ul .first .selected{
    display: inline-block;
    margin: 0 .6rem .5rem 0;
    font-size: .6rem;
    padding: .3rem;
    border-radius: .2rem;
    border: 1px;
  }
  .tab ul .first .blue{
    color: #6d7885;
    background-color: #ebf5ff;
  }
  .tab ul .first .grey{
    background-color: #f5f5f5;
    color: #aaa;
  }
  .tab ul .first .selected{
    background-color: #3190e8;
    color: #fff;
  }
  .tab ul li .tx{
    width: 1.8rem;
    border-radius: 50%;
    float: left;
    margin-right: .8rem;
  }
  .tab ul li .pj_right{
    float: left;
    width: 80%;
    color: #666;
    margin-bottom: .2rem;
  }
  .tab ul li .middle{
    display: inline-block;
    float: left;
    font-size: 0;
  }
  .tab ul li .middle img{
    width: 3rem;
    margin-right: .4rem;
  }
  .tab ul li .pj_right .time{
    float: right;
    font-size: .4rem;
    color: #999;
  }
  .tab ul li .ele{
    display: inline-block;
    font-size: .45rem;
    color: #666;
  }
  .tab ul li .pj_right .bq{
    background-color: red;
    font-size: .55rem;
    color: #999;
  }
  .tab ul li .pj_right .bq span{
    display: inline-block;
    width: 2.2rem;
    padding: .2rem;
    border: .025rem solid #ebebeb;
    border-radius: .15rem;
    margin: .5rem .3rem 0 0;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .alert_img{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .alert_img .box{
    width: 12rem;
    background-color: #fff;
    border-radius: .3rem;
  }
  .alert_img .box .box_tit{
    margin: 0;
    font-size: .7rem;
    color: #222;
    font-weight: 400;
    text-align: center;
    padding: .5rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .alert_img .box .box_tit span{
    float: right;
    font-size: .8rem;
    color: #999;
  }
  .alert_img .box .space{
    box-sizing: border-box;
    padding: .9rem .5rem;
  }
  .alert_img .box .space p{
    font-size: .6rem;
    color: #666;
  }
  .alert_img .box .space .sel{
    font-size: .6rem;
    padding: .3rem .5rem;
    border: .025rem solid #ddd;
    border-radius: .2rem;
    margin-right: .5rem;
    margin-bottom: .2rem;
  }
  .alert_img .box .box_bottom{
    background-color: #f9f9f9;
    padding: .4rem;
    border: 1px;
    border-bottom-left-radius: .2rem;
    border-bottom-right-radius: .2rem;
  }
  .alert_img .box .box_bottom p{
    color: #ff6000;
    font-size: .75rem;
    font-weight: 700;
  }
  .alert_img .box .box_bottom .fh{
    font-size: .5rem;
  }
  .alert_img .box .box_bottom .add_cart{
    float: right;
  }
  .alert_img .box .space .seled{
    border-color: #3199e8;
    color: #3199e8;
  }
</style>
