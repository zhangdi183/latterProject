<template>
    <div>
      <!--商家详情-->
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
      <el-tabs v-model="activeName" @tab-click="handleClick" id="tab">
        <el-tab-pane name="ss1" disabled></el-tab-pane>
        <el-tab-pane name="ss2" disabled></el-tab-pane>
        <el-tab-pane label="商品" name="first">
          <div class="middle">
            <ul>
              <li v-for="data in $store.state.nfoot" :class="{'selected':lidata.id===data.id?true:false}" @click="showInfo(data)" class="middle_left">{{data.name}}</li>
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
                <router-link to="/">
                  <li v-for="data1 in lidata.foods" class="middle_right">
                    <img :src="'//elm.cangdu.org/img/'+data1.image_path" alt="">
                    <span class="new" v-if="newshow"><span>新品</span></span>
                    <div class="middle_r_r">
                      <span>
                        <strong>{{data1.name}}</strong>
                        <!--招牌菜-----没有返回的数据!!!-->
                        <!--<span class="pinp" v-if="data1.is_featured==='0'">招牌</span>-->
                        <span class="pinp" v-if="zp">招牌</span>
                        <span class="clean"></span>
                      </span>
                      <div class="txt_des">{{data1.description}}</div>
                      <div class="rate">{{data1.tips.split(" ")[1]}}<span> 好评率{{data1.satisfy_rate}}%</span></div>
                      <div class="img_text" v-if="isshow">{{data1.activity.image_text}}</div>
                      <div class="price"><strong v-for="data2 in data1.specfoods">¥{{data2.price}}</strong></div>
                    </div>
                    <div class="clean"></div>
                  </li>
                </router-link>
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
                v-model="quZ"
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
                v-model="quZ1"
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
                <span v-for="data in tags" :class="data.name==='不满意'?'grey':'blue'">{{data.name}}({{data.count}})</span>
              </li>
            </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import { Navbar, TabItem } from 'mint-ui';
  import Vue from 'vue'
  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
    export default {
        name: "Nfoot",
      data(){
          return{
            activeName: 'first',
            tabPosition: 'left',
            sort:'',
            lidata:'',
            isshow:true,
            zp:true,
            newshow:true,
            top:this.$store.state.nshoplist,
            len:this.$store.state.nshoplist.activities.length,
            tophide:true,
          //  评价定义的变量
            eval:this.$store.state.nfoot,
            assess:'',
            tags:'',
          }
      },
      //配合first页面,将无活动的店铺筛选过滤,并将top隐藏
      beforeMount(){
        for(let arr of this.top.activities){
          if(arr.icon_name === '无活动'){
            this.tophide=false;
          }
        }
      },
      methods:{
        handleClick(tab, event) {
          // console.log(tab, event);
        },
        showInfo(e) {
          this.lidata = e;
          for (let i of e.foods) {
            //描述
            if (i.activity === null) {
              i.activity = {'image_text': ''};
              // let v=i.activity.hasOwnProperty('image_text');
            }
            /*描述将空的过滤掉*/
              // if (i.activity.image_text === '') {
              //   this.isshow = false;
              // }
  
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
        }
      },
      mounted(){
            for(let data1 of this.eval){
              //获取评价的分数的请求
              Vue.axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${data1.restaurant_id}/ratings/scores`).then((res)=>{
                // console.log(res.data);
                this.assess=res.data;
              }).catch((error)=>{
                console.log('请求错误!',error);
              });
              //获取评价分类
              Vue.axios.get(`https://elm.cangdu.org/ugc/v2/restaurants/${data1.restaurant_id}/ratings/tags`).then((res)=>{
                // console.log(res.data);
                this.tags=res.data;
              }).catch((error)=>{
                console.log('请求错误!',error);
              });
              //获取评价信息

            }
      },
      computed:{
          quZ(){
            var qz1 =parseFloat(this.assess.service_score).toFixed(1);
            // var qz1 = Math.floor(this.assess.service_score * 10) / 10;
            return qz1;
          },
        quZ1(){
          var qz2 =parseFloat(this.assess.food_score).toFixed(1);
          // var qz2 =Math.floor(this.assess.food_score * 10) / 10;
          return qz2;
        },
      }
    }
</script>

<style scoped>
  .clean{
    clear: both;
  }
  li{
    list-style: none;
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
  .tab ul .first{
    box-sizing: border-box;
    padding: .5rem;
  }
  .tab ul .first .blue{
    display: inline-block;
    margin: 0 .6rem .5rem 0;
    font-size: .6rem;
    color: #6d7885;
    padding: .3rem;
    background-color: #ebf5ff;
    border-radius: .2rem;
    border: 1px;
  }
  .tab ul .first .grey{
    display: inline-block;
    margin: 0 .6rem .5rem 0;
    font-size: .6rem;
    padding: .3rem;
    background-color: #f5f5f5;
    color: #aaa;
    border-radius: .2rem;
    border: 1px;
  }
</style>
