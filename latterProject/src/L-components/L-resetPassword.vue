<template>
  <div class="Llogin">
    <div class="L_head">
      <router-link :to="{path:'/login'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
      <span class="">重置密码</span>
    </div>
    <!--这是账号密码-->
    <div class="LmPass">
      <input type="text" placeholder="账号" v-model="LmV">
      <input :type="isPass" placeholder="旧密码" v-model="LmLP">
      <input :type="isPass" placeholder="新密码" v-model="LmP">
      <input :type="isPass" placeholder="确认新密码" v-model="LmP">
      <input type="text" placeholder="验证码" v-model="LmY">
      <div id="coad"><span v-if="isTrue">{{LmCoad}}</span><span @click="isTrue=!isTrue;isFalse=!isFalse" v-if="isFalse">点击显示验证码</span></div>

      <button class="btn btn-success btn-group btn-block" @click="login">确认修改</button>
    </div>
    <!--这是个警告框-->
    <div class="alert alert-warning text-center LmAlert" v-if="isShow">
      <img src="../L-imgs/感叹号.png" height="100" width="100"/>
      <p>正确的账号</p>
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
        LmLP:'',
        isTrue:false,
        isFalse:true,
        isShow:false

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
        if(this.LmV!='' && this.LmP !='' && this.LmLP&& (this.LmY!='' &&this.LmY===this.LmCoad)){
          Vue.axios.post('https://elm.cangdu.org/v2/login',{
            username:this.LmV,
            password:this.LmP
          }).then((res)=>{
            console.log(res)
          }).catch((err)=>{
            console.log(err)
          })
          this.$router.push({path:'/nmine'})
        }else{
          this.isShow=true;
        }
      },
    },
    created(){
      let a=String(Math.floor(Math.random()*9))
      let b=String(Math.floor(Math.random()*9))
      let c=String(Math.floor(Math.random()*9))
      let d=String(Math.floor(Math.random()*9))
      this.LmCoad=a+b+c+d;
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

  #coad{
    /*width: 3rem;*/
    line-height: 1rem;
    padding: 0.5rem;
    border: 0.01rem black solid;
    text-align: center;
    position: absolute;
    background: rgba(0,0,0,0.1);
    top: 10.6rem;
    right: 1rem;
    color:darkred;
  }
  .LmAlert{
    width:10rem;
    height:10rem;
    background: white;
    position: absolute;
    top:50%;
    left:20%;
  }

</style>
