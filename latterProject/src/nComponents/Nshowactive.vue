<template>
  <!--公告展示页-->
    <div class="show_info">
      <p class="title">{{text.name}}</p>
      <div class="favourable">
        <div class="favourable_info">
          <span class="tit">优惠信息</span>
        </div>
        <div class="des" v-for="(data,i) in text.activities" :key="i">
            <span class="des_name" :style="{backgroundColor:'#'+data.icon_color}">{{data.icon_name}}</span>
            <span>{{data.description}}</span>
            <span>(APP专享)</span>
        </div>
      </div>
      <div class="public">
        <div class="public_info">
          <span class="tit">商家公告</span>
        </div>
        <div class="des">
          <span>{{text.promotion_info}}</span>
        </div>
      </div>
      <div class="close" @click="$router.back(-1)">
        <i class="el-icon-close"></i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Nshowactive",
      data(){
          return{
            text:this.$store.state.nshoplist,
          }
      },
    }
</script>

<style scoped>
  body,html{
    position: relative;
  }
  .show_info{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    background-color: rgba(0,0,0,0.9);
  }
  .show_info .title{
    text-align: center;
    font-size: .75rem;
    color: #fff;
    font-weight: 300;
    margin: 1.5rem 0;
  }
  .show_info .favourable{
    margin-bottom: 2rem;
  }
  .show_info .favourable_info, .show_info .public_info{
    text-align: center;
    margin: .8rem 0;
  }
  .show_info .favourable .tit, .show_info .public .tit{
    font-size: .5rem;
    color: #fff;
    border: .025rem solid #555;
    padding: .2rem .4rem;
    border-radius: .5rem;
  }
  .show_info .favourable .des, .show_info .public .des{
    box-sizing: border-box;
    padding-left: 1.3rem;
  }
  .show_info .favourable .des{
    margin: .3rem 0;
  }
  .show_info .favourable .des .des_name{
    border-radius: .1rem;
    padding: .1rem;
  }
  .show_info .close{
    color: #fff;
    font-size: 1.5rem;
    bottom: 1rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #fff;
    border-radius: 50%;
    padding: .4rem;
  }
</style>
