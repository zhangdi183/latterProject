<template>
    <div>
      <!--商家详情-->
      <div class="top">
        <img :src="'//elm.cangdu.org/img/'+top.image_path" alt="">
        <!--<div class="top_right">-->
          <!--<h3>{{}}</h3>-->
        <!--</div>-->
      </div>
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
        <el-tab-pane label="评价" name="second" class="tab">憋看了,全是差评,哈哈哈哈哈</el-tab-pane>
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
          }
      },
      created(){
        console.log(this.$store.state.nshoplist)
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
            if (i.activity.image_text === '') {
              this.isshow = false;
            }
  
            /*招牌--新品*/
            // let v = i.attributes;
            // for (let food of v) {
            //   if (v.length === 0 || food.icon_name === "") {
            //     this.zp = false;
            //     this.newshow = false;
            //   } else if (v.length === 2) {
            //     this.zp = true;
            //     this.newshow = true;
            //   } else if (v.length === 1 && food.icon_name === "招牌") {
            //     console.log(2222222);
            //     this.zp = true;
            //     this.newshow = false;
            //   } else if (v.length === 1 && food.icon_name === "新") {
            //     this.newshow = true;
            //     this.zp = false;
            //   }
            // }
              // console.log(v.length,v);
              
            let hash = {};
            i.specfoods = i.specfoods.reduce((preVal, curVal) => {
              hash[curVal.id] ? '' : hash[curVal.id] = true && preVal.push(curVal); return preVal
            }, []);
          }
        }
      },
      mounted(){
      
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
  .top img{
    width: 2.5rem;
  }
</style>
