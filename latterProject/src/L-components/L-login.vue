<template>
    <div class="Llogin">
      <div class="L_head">
        <router-link :to="{path:'/'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="">密码登录</span>
      </div>
      <!--这是账号密码-->
      <div class="LmPass">
        <input type="text" placeholder="账号" v-model="LmV">
        <input :type="isPass" placeholder="密码" v-model="LmP">
        <div class="LmShowPass" @click="Showpass">
          <span :style="LmSpan2"></span>
          <span :style="LmSpan1">abc...</span>
        </div>
        <input type="text" placeholder="验证码" v-model="LmY">
        <div id="coad">
          <img :src="isStr" alt="" class="img">
        </div>
        <span @click="getD" class="Lcantsee">
          看不清<br><span class="text-primary">换一张</span>
        </span>

        <p>温馨提示:未注册过的账号,登陆时将被自动注册</p>
        <p>注册过的用户可凭账号密码登录</p>
        <div></div>
        <button class="btn btn-success btn-group btn-block" @click="login">登录</button>
      </div>
      <router-link :to="{path:'/resetpassword'}"><h6 class="text text-primary pull-right" style="margin-right:0.5rem ">重置密码?</h6></router-link>
      <!--这是个警告框-->
      <div class="alert alert-warning text-center LmAlert" v-if="isShow">
        <img src="../L-imgs/感叹号.png" height="100" width="100"/>
        <p>请输入手机号/邮箱/用户名</p>
        <button class="btn btn-success btn-group btn-block" @click="isShow=false">确认</button>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-login",
      data(){
          return{
            //这是span标签的样式
            LmSpan1:{
              background:'#9f9f9f',
              borderRadius: '0.5rem',
              padding:' 0 0.4rem',
              color:'white',
              fontSize:'0.65rem'
            },
            LmSpan2:{
              display:"inline-block",
              width:'0.9rem',
              height:'0.9rem',
              borderRadius: '50%',
              background:'rgb(241,241,241)',
              position:'relative',
              top:'0.2rem',
              right:'-0.9rem'
            },
            isPass:"password",
            LmV:'',
            LmP:'',
            LmY:'',
            LmCoad:'',
            isTrue:false,
            isShow:false,
            isStr:'',
            loginReturn:''

          }
      },
      methods:{
        Showpass(){
          if(this.isPass ==='password'){
            this.LmSpan1.background='lightgreen';
            this.LmSpan2.right='-2.9rem';
            this.isPass='text'
          }else{
            this.LmSpan1.background='#9f9f9f';
            this.LmSpan2.right='-0.9rem';
            this.isPass ='password'
          }
        },
        login(){
          if(this.LmV!='' && this.LmP !='' && this.LmY!=''){
            Vue.axios.post('https://elm.cangdu.org/v2/login',{
              username:this.LmV,
              password:this.LmP,
              captcha_code:this.LmY
            }).then((res)=>{
              this.loginReturn = res.data.message
              if (this.loginReturn==='密码错误') {
                this.isShow=true;
              }else {
                this.$router.push({path:'/nmine_load'})
                // this.$store.state.LmPersonInfor=res.data
              }
            }).catch((err)=>{
              console.log(err)
            })
          }else if (this.LmV==='' && this.LmP ==='' && this.LmY==='') {
            this.isShow=true;
          }
        },
        getD(){
          this.isFalse=!this.isFalse
          Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
            this.isStr = res.data.code
          })
        }
      },
      created(){
        this.isFalse=!this.isFalse
        Vue.axios.post('https://elm.cangdu.org/v1/captchas').then((res)=>{
          this.isStr = res.data.code
          console.log(this.isStr);
        })
      }
    }
</script>

<style scoped>

.Llogin{
  background:rgba(0,0,0,0.1);
  position: relative;
}
.L_head{
  padding: 0.6rem 0.1rem 0.4rem;
  width: 16rem;
  background: rgb(49,144,232);
  color: white;
  text-align: center;

}
.L_head span{
  font-size: 0.8rem;
  font-weight: bold;
}
  .LmPass{
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
  .LmPass button{
    width: 80%;
    margin: 0.5rem 1.5rem;
  }
.LmPass p,p:first-child{
  margin-top: 0.3rem;
  color: red;
  font-size: 0.6rem;
}
.LmShowPass{
  padding: 0 0.5rem;
  position: absolute;
  top: 5rem;
  right: 0.8rem;
}
  #coad{
    width: 3rem;
    line-height: 1rem;
    padding: 0.5rem;
    border: 0.01rem black solid;
    text-align: center;
    position: absolute;
    background: rgba(0,0,0,0.1);
    top: 6.55rem;
    right: 3rem;
    color:darkred;
    display: inline-block;
  }
  .LmAlert{
    background: white;
    position: absolute;
    top:50%;
    left:20%;
  }
  .img{
    width: 100%;
  }
  .Lcantsee{
    position: absolute;
    top: 6.55rem;
    right: 0.5rem;
  }

</style>
