<template>
    <div>
      <mt-header :title="footlist.name">
        <router-link to="" slot="left">
          <mt-button icon="back" @click="$router.back(-1)"></mt-button>
        </router-link>
      </mt-header>
      <img :src="'//elm.cangdu.org/img/'+footlist.image_path" alt="无" class="z_img">
      <div class="bottom">
        <p class="des">{{footlist.description}}</p>
        <p class="name">{{footlist.name}}</p>
        <p>评分
          <el-rate
            v-model="footlist.rating"
            disabled
            disabled-void-color="#ccc"
            show-score
            text-color="#ff9900"
            class="ele">
          </el-rate>
        </p>
        <p>
          <span class="ys">{{footlist.tips.split(" ")[1]}}</span>
          <span class="price" v-for="data in footlist.specfoods">售价 ¥{{data.price}} 起</span>
        </p>
        <p class="foot">
          <span>评论数 {{footlist.tips.split("评价")[0]}}</span>
          &nbsp;
          <span>好评率 {{footlist.satisfy_rate}}%</span>
        </p>
      </div>
      <ZShopTrolley></ZShopTrolley>
    </div>
</template>

<script>
  import ZShopTrolley from "../components/Z-shopTrolley";
    export default {
        name: "Nprodes",
      components: {ZShopTrolley},
      data(){
          return{
            footlist:this.$store.state.nfootPro,
          }
      }
    }
</script>

<style scoped>
  .z_img{
    width: 100%;
  }
  .bottom{
    box-sizing: border-box;
    padding: .5rem .4rem;
  }
  .bottom .des{
    font-size: .6rem;
    color: #666;
  }
  .bottom .name{
    font-size: .7rem;
    color: #333;
    margin-bottom: .2rem;
  }
  .bottom .ele{
    display: inline-block;
  }
  .bottom .ys{
    font-size: .6rem;
    color: #666;
    margin-right: .4rem;
  }
  .bottom .price{
    font-size: .6rem;
    color: #f60;
    margin-right: .2rem;
  }
  .bottom .foot{
    font-size: .6rem;
    color: #666;
  }
</style>
