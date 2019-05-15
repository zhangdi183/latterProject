<template>

      <div class="L_head">
        <div class="L_money">
        <router-link :to="{path:'/nmine'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="">我的余额</span>
        <!--这是余额展示-->
        <div class="L_body">
          <!--这是的第一排-->
          <h5>
            <small class="pull-left">当前余额</small>
            <small class="text-primary pull-right L_problem"><router-link :to="{path:'/Lcaption',query:{name:'余额问题',index:19}}">余额问题</router-link></small>

            <p class="clearfix"></p>
          </h5>
          <!--这是余额展示-->
          <div class="L_moneyShow">
            <h2>{{balance}}.00</h2>
            <span>元</span>
          </div>
          <button class="btn L_reflect">提现</button>
        </div>
      </div>
        <!--这是交易明细部分-->
        <div class="L_footer">
          <p class="text-muted L_detail">交易明细</p>
          <img src="../L-imgs/elm.png" height="98" width="98"/>
        </div>
        <p class="text-center text-muted">暂无明细记录哦</p>
    </div>
</template>

<script>
    export default {
        name: "L-blanceMoney",
        data(){
         return{
           balance:''
         }
        },
        created(){
          this.balance=this.$route.query.yue
        }

    }
</script>

<style scoped>
.L_money{
  position: relative;
  padding: 0.6rem 0.1rem 0.4rem;
  width: 16rem;
  background: rgb(49,144,232);
  color: white;
  text-align: center;
  font-weight: bold;
}
.L_head{

}
  .L_body{
    background: white;
    width: 15rem;
    margin:0.2rem auto;
    border-radius: 0.2rem;
    padding: 0.2rem;
    color: black;
  }
  .L_problem{
    background: url('../L-imgs/问号.png') no-repeat;
    background-size: contain;
    padding-left: 0.7rem;
    z-index: 100;
    position: absolute;
    right: 0.7rem;

  }
  .L_moneyShow{
    text-align: left;
    position:relative;
    top: -1.3rem;
  }
  .L_moneyShow h2,.L_moneyShow span{
    display: inline-block;
    font-weight: 400;
  }
  .L_reflect{
    width: 13rem;
    background: rgba(204,204,204,1);
    color: white;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 0.1rem;
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

</style>
