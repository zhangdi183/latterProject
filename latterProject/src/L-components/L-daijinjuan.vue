<template>
    <div class="daijinjuan">
        <h5>
          <small class="text-primary pull-right L_problem"><router-link :to="{path:'/Lcaption',query:{name:'商家代金卷说明',index:17}}">商家代金卷说明</router-link></small>
        </h5>
      <!--这个是中间部分-->
      <div class="L_body">
        <!--这是交易明细部分-->
        <div class="L_footer">

          <img src="../L-imgs/voucher.png" height="85" width="150"/></div>

        <h5 class="text-center ">
          <p class="text-center text-muted">无法使用代金卷</p>
          <small>非客户端或客户端版本过低</small>
          <button class="btn btn-success btn-block Lmdownload" @click="download">下载或升级客户端</button>
        </h5>
      </div>
    </div>
</template>

<script>
    export default {
        name: "L-daijinjuan",
      methods:{
        download(){
          this.$router.push({path:'/ndownload'})
        }
      }
    }
</script>

<style scoped>
  .L_problem{
    background: url('../L-imgs/问号.png') no-repeat;
    background-size: contain;
    padding-left: 0.7rem;
    z-index: 100;
    position: absolute;
    right: 0.7rem;
  }
  .L_footer{
    font-size: 0;
    text-align: center;
  }
  .L_detail{
    text-align: left;
    margin: 0.2rem;
    font-size: 0.6rem;
  }
  .L_footer img{
    display: inline-block;
    margin-top: 1.5rem;
  }
  .Lmdownload{
    width: 10rem;
    margin: 0 auto;
  }
</style>
