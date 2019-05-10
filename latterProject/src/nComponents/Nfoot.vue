<template>
    <div>
      <!--头部选项卡-->
      <el-tabs v-model="activeName" @tab-click="handleClick" id="tab">
        <el-tab-pane name="ss1" disabled></el-tab-pane>
        <el-tab-pane name="ss2" disabled></el-tab-pane>
        <el-tab-pane label="商品" name="first">
          <div class="middle">
            <ul>
              <li v-for="data in $store.state.nfoot" :class="{'selected':liid===data.id?true:false}" @click="showInfo(data)">{{data.name}}</li>
            </ul>
            <div class="right">
              <div class="title">{{liname}}
                <span> {{des}}</span>
                <span class="more">
                  <el-tooltip class="item" effect="dark" :content="liname+' '+des" placement="bottom-end">
                <i class="el-icon-more"></i>
              </el-tooltip>
                </span>
                <span class="clean"></span>
              </div>
              <!--右边--返回的商品数据-->
              <ul>
                <li v-for="data1 in $store.state.nfoot">
                  <img :src="'//elm.cangdu.org'+data1.image_path" alt="">
                </li>
              </ul>
            </div>
          </div>
          <div class="clean"></div>
        </el-tab-pane>
        <el-tab-pane name="ss3" disabled></el-tab-pane>
        <el-tab-pane name="ss4" disabled></el-tab-pane>
        <el-tab-pane label="评价" name="second" class="tab"></el-tab-pane>
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
            liname:'',
            liid:'',
            des:''
          }
      },
      methods:{
        handleClick(tab, event) {
          // console.log(tab, event);
        },
        showInfo(e){
          this.liname=e.name;
          this.des=e.description;
          this.liid=e.id;
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
    height: 8rem;
    background-color: #fff;
    float: left;
  }
  .selected{
    border-left: .15rem solid #3190e8;
    background-color: #fff;
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
</style>
