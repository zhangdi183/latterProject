<template>
    <div>
      <div class="L_head">
        <router-link :to="{path:'/preferential'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="L_headDiv">兑换红包</span>
      </div>
      <!--这是2个input标签-->
      <div  style="padding: 0.5rem">
        <input type="text" placeholder="请输入兑换码" class="Lminput1" v-model="isTrue">
        <input type="text" placeholder="验证码" class="Lminput2 pull-left" @input="inputCode" v-model="V">
        <!--这里放的是验证码-->
        <div class="pull-right code">
          <div id="coad">
            <img :src="isStr" alt="" class="img">
          </div>
          <span @click="getD">看不清 <p class="text-primary">换一张</p></span>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="text-center">
        <button :class="{btn:true}" class="Exchange" :style="bck" :disabled="isTrue1" @click="exchangeHb">兑换</button>
      </div>
      <!--这是个警告框-->
      <div class="alert alert-warning text-center LmAlert bounceIn" v-if="isShow">
        <img src="../L-imgs/感叹号.png" height="100" width="100"/>
        <p>无效的验证码</p>
        <button class="btn btn-success btn-group btn-block" @click="isShow=false">确认</button>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
      name: "L-exchangeHB",
      data() {
        return {
          isStr: '',
          //这是第一个输入框的值
          isTrue: '',
          isTrue1: true,
          V: '',
          bck: {
            background: '#cccccc'
          },
          id: Number,
          isShow:false,
          //这是兑换码返回的数据

        }
      },
      created() {
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
          this.isStr = res.data.code
          // console.log(this.isStr);
          Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
            this.id=res.data.user_id
          })
        })
      },
      methods: {
        //这是更换验证码的点机事件
        getD() {
          this.isFalse = !this.isFalse
          Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res) => {
            this.isStr = res.data.code
          })
        },
        inputCode() {
          if (this.V.length >= 4 && this.isTrue.length > 0) {
            this.bck.background = '#4CD964';
            this.isTrue1 = !this.isTrue1
          }
        },
        //这是兑换按钮的点击事件
        exchangeHb() {
          Vue.axios.post('https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange', {
            user_id: this.id,
            exchange_code: this.isTrue,
            captcha_code: this.V
          }).then((res) => {
            console.log(res)
            if (res.data.message==='无效的兑换码'){
              this.isShow=!this.isShow
            }
          })
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
  .Lminput1{
    outline: none;
    width: 15rem;
    line-height: 1.5rem;
    border: 0;
    border-radius: 0.1rem;
    padding: 0.3rem;
    margin-bottom: 0.5rem;
  }
  .Lminput2{
    outline: none;
    width: 7rem;
    line-height: 1.5rem;
    border: 0;
    border-radius: 0.1rem;
    padding: 0.3rem;
  }
  #coad{
    width: 3rem;
    line-height: 1rem;
    text-align: center;
    display: inline-block;
  }
  .code{
    background: white;
    width: 7.5rem;
    padding: 0.3rem;
    height: 2rem;
  }
  .code span{
    font-size: 0.6rem;
    display: inline-block;
    margin-left: 1.5rem;
  }
  .img{
    width: 100%;
    margin-bottom: 0.8rem;
    margin-left: 0.5rem;
  }
.Exchange{
  width: 15rem;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
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
