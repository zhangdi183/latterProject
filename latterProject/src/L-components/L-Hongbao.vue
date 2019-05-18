<template>
    <div class="Hongbao">
      <h5 class="Lmh5">
        <small>有<span class="markText">{{gift_amount}}</span>个红包即将到期</small>
        <small class="text-primary pull-right L_problem"><router-link :to="{path:'/Lcaption',query:{name:'红包问题',index:12}}">红包问题</router-link></small>
      </h5>
      <!--这个是可用红包-->
      <div class="useHongBao"  v-for="(i,d) in Arr" :key="d">
          <div class="topImg"></div>
          <div class="LmHongbao">
            <div>
              <span>￥<span class="LmHongbaospan">{{i.amount}}</span></span>
              <h5><small>满20元可用</small></h5>
            </div>
            <div class="LmCenter">
              <h5>{{i.name}}</h5>
              <p>{{i.end_date}}</p>
              <p>限收货手机号为{{i.phone }}</p>
            </div>
            <span style="color: red; position: relative; top: -2.4rem; right: 0.16rem;">剩3日</span>
          </div>
      </div>
      <h4><small style="position: relative;bottom: 0.5rem;">限品类:快餐便当,特色菜系,小吃夜宵,甜品饮品,异国料理</small></h4>
      <!--这里是查看过期红包-->
      <div class="text-center">
        <router-link :to="{path:'/Hishongbao'}">
          <span class="text-muted" style="font-size: 0.5rem">查看过期红包 <span class="glyphicon glyphicon-menu-right"></span></span>
        </router-link>
      </div>
      <!--这里是底部的路由-->
        <div class="L_nav">
            <span class="pull-left" :style="span1" @click="L_span1">兑换红包</span>
            <span class="pull-right" :style="span2" @click="L_span2">推荐有奖</span>
            <div class="clearfix"></div>
        </div>
    </div>

</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-Hongbao",
      data(){
        return{
          userId:'',
          get:'',
          Arr:[1,2,4.5],
          gift_amount:'',
          span1:{
            color:'black',
            borderRight:'',
            zIndex:100
          },
          span2:{
            color:'black',
            borderBottom:''
          }
        }
      },
      created(){
        Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
          // console.log(res.data);
          this.userId=res.data.user_id;
          this.gift_amount=res.data.gift_amount
          this.get='https://elm.cangdu.org/promotion/v2/users/'+`${this.userId}`+'/hongbaos?limit=20&offset=0'
          console.log(this.get,'111')
        })
      },
      mounted(){
          Vue.axios.get('https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0').then((res)=>{
            this.Arr=res.data;
            console.log(res.data)
          })
      },
      methods:{
        L_span1(){
            this.$router.push({path:'/exchangeHb'})
        },
        L_span2(){
          this.$router.push({path:'/Lprize'})
        }
      },
    }
</script>

<style scoped>
  .Hongbao{
    position: relative;
  }
.markText{
  color: red;
}
.L_problem{
  background: url('../L-imgs/问号.png') no-repeat;
  background-size: contain;
  padding-left: 0.7rem;
  z-index: 100;
  position: absolute;
  right: 0.7rem;

}
  .Lmh5{
    padding: 0 0.5rem;
  }
  .useHongBao{
    width: 14rem;
    background: white;
    margin: 0.5rem auto;
    padding: 0.5rem 0.3rem 0.3rem;
    border-radius: 0.2rem;
  }
  .topImg{
    width: 14rem;
    background: url("../L-imgs/hongbao.png") repeat-x;
    height: 0.3rem;
    background-size: contain;
    position: relative;
    top: -0.45rem;
    left: -0.3rem;
    border-radius: 0.2rem 0.2rem 0 0;
  }
  .LmHongbao{

  }
  .LmHongbao div:first-child{
    display: inline-block;
    padding: 0.3rem;
    border-right: 0.05rem #9f9f9f dashed ;
    box-sizing: border-box;
    color: red;

  }
  .LmHongbaospan{
    font-size: 1.4rem;
    font-weight: bold;
  }
  .LmCenter{
    display: inline-block;
    padding: 0.4rem;
  }
  .LmCenter h5,p{
    position:relative;
    top: -0rem;
  }
  .LmCenter p{
    font-size: 0.5rem;
    color: #9f9f9f;
  }
  .L_nav{
    width: 16rem;
    background: white;
    padding: 0.5rem 2.5rem 0.3rem;
    text-align: center;
    position: relative;
    bottom: -3.2rem;
    z-index: 1;
  }
  h4{
    width: 14rem;
    margin: 0.5rem auto;
    font-size: 0.7rem;
    padding: 0 0.9rem;
  }
</style>
