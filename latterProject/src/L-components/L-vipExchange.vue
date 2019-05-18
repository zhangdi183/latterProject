<template>
    <div>
      <div class="L_head">
        <router-link :to="{path:'/vip'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="L_headDiv">兑换会员</span>
      </div>
      <h5 style="margin-left: 0.5rem;"><small>成功兑换后将关联当前账号:</small><span>{{$route.query.name}}</span></h5>
      <div class="form">
        <input type="text" placeholder="请输入10位卡号" maxlength="10" v-model="V">
        <input type="password" placeholder="请输入6位卡密"maxlength="6" v-model="P" @input="inputP">
      </div>
      <div class="text-center">
        <button :class="{btn:true}" class="Exchange" :style="bck" :disabled="isTrue1" @click="exchangeHb">兑换</button>
      </div>
      <!--这是个警告框-->
      <div class="alert alert-warning text-center LmAlert bounceIn" v-if="isShow">
        <img src="../L-imgs/感叹号.png" height="100" width="100"/>
        <p>无效的卡号</p>
        <button class="btn btn-success btn-group btn-block" @click="isShow=false">确认</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "L-vipExchange",
      data(){
        return{
          bck: {
            background: '#cccccc',
            width:'13rem',
            color:'white',
            fontWeight:"bold"
          },
          isTrue1: true,
          P:'',
          V:'',
          isShow:false
        }
      },
      methods:{
        //这是兑换按钮的点击事件
        exchangeHb() {
          this.isShow=!this.isShow
        },
        inputP(){
          if(this.V.length===10&&this.P.length===6){
            this.isTrue1=!this.isTrue1
            this.bck.background='#4CD964'
          }
        }
      },
    }
</script>

<style scoped>
  .L_head{
    padding: 0.6rem 0.1rem 0.4rem;
    width: 16rem;
    background: rgb(49,144,232);
    color: white;
    text-align: center;
    font-weight: bold;
  }
  .form{
    margin:0.3rem 0;
  }
  input{
    line-height: 2rem;
    font-size: 0.7rem;
    width: 100%;
    border: 0;
    padding-left: 0.6rem;
    margin-top: 0.05rem;
    outline: none;

  }
  .LmAlert{
    width: 12rem;
    background: white;
    position: absolute;
    top:15%;
    left:13%;
  }
</style>
