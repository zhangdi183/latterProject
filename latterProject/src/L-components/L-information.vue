<template>
    <div>
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="L_headDiv">账户信息</span>
      </div>
      <!--这个是账户信息内容主体部分-->
      <div class="LmInforBody">
          <div>
            <!--这是上传头像的部分-->
            <input type="file" id="file" v-show="false" ref="inputefile"  @change="uphead">
            <label for="file">
                <div class="text-muted headfile">
                  <span class="head">头像</span>
                  <span class="glyphicon glyphicon-menu-right pull-right right"></span>
                  <div>
                    <img src="../L-imgs/8.png" alt="这个是头像">
                  </div>
                  <div class="clearfix"></div>
                </div>
            </label>
            <!--这个是用户名-->
            <router-link :to="{path:'/changeUsername'}">
              <div class="username">
                <span class="pull-left text-muted">用户名</span>
                <span class="glyphicon glyphicon-menu-right pull-right text-muted"></span>
                <span class="pull-right">{{name}}</span>
                <div class="clearfix"></div>
              </div>
            </router-link>
            <!--这个是收货地址-->
            <router-link :to="{path:'/LshoppingAdd'}">
              <div class="address">
                <span class="pull-left text-muted">收货地址</span>
                <span class="glyphicon glyphicon-menu-right pull-right text-muted"></span>
                <div class="clearfix"></div>
              </div>
            </router-link>
          </div>
      </div>
      <h5 style="margin-left: 0.9rem"><small>绑定手机号</small></h5>
      <!--这个是绑定手机号-->
      <div class="address" @click="alert1">
        <img src="../L-imgs/bindphone.png" height="22" width="20" class="pull-left" style="margin-right: 0.5rem"/>
        <span class="pull-left text-muted">手机</span>
        <span class="glyphicon glyphicon-menu-right pull-right text-muted"></span>
        <div class="clearfix"></div>
      </div>
      <h5 style="margin-left: 0.9rem"><small>安全设置</small></h5>
      <!--这个是修改密码-->
      <router-link :to="{path:'/resetpassword'}">
        <div class="address">
          <span class="pull-left text-muted">登陆密码</span>
          <span class="glyphicon glyphicon-menu-right pull-right text-muted"></span>
          <span class="pull-right">修改</span>
          <div class="clearfix"></div>
        </div>
      </router-link>
      <div class="text-center">
        <button class="btn btn-danger" style="width: 13rem;margin: 0.3rem auto" @click="exit">退出登录</button>
      </div>
      <!--这是个警告框-->
      <div class="alert alert-warning text-center LmAlert bounceIn" v-if="isShow">
        <img src="../L-imgs/感叹号.png" height="100" width="100"/>
        <p>{{alertTxt}}</p>
        <button class="btn btn-success btn-group btn-block" @click="isShow=false">确认</button>
      </div>
      <!--这是个退出警告框-->
      <div class="alert alert-warning text-center LmAlert bounceIn" v-if="isShow1">
        <img src="../L-imgs/感叹号.png" height="100" width="100"/>
        <h2>是否退出登录</h2>
        <div>
          <button class="btn btn-default" @click="isShow1=false">再想想</button>
          <button class="btn btn-danger" @click="exitLogin">退出登录</button>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-information",
      data(){
          return{
            alertTxt:'',
            isShow:false,
            isShow1:false,
            name:''
          }
      },
      methods:{
          uphead(){
            this.isShow=!this.isShow
            this.alertTxt='上传失败'
          },
        alert1(){
          this.isShow=!this.isShow
          this.alertTxt='请在手机APP中设置'
        },
        exit(){
          this.isShow1=!this.isShow
        },
        exitLogin(){
            Vue.axios.get('https://elm.cangdu.org/v2/signout').then((res)=>{
              if (res.data.message==='退出成功'){
                this.name='请登录'
                this.$router.push({path:'/nmine'})
              }
            })
        }
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
            if (this.$store.state.changeUsername!=''){
              this.name=this.$store.state.changeUsername
            }else{
              this.name=res.data.username
            }
            console.log(res.data)
          });
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
  .LmInforBody{
    background: white;
    margin-top: 0.3rem;
    width: 16rem;
  }
  .headfile{
    width: 16rem;
    padding: 1rem 0.9rem;
    font-size: 0.65rem;
    border-bottom: 0.05rem solid rgba(240,240,240,1);
  }
  .headfile div{
    display: inline-block;
    width: 2rem;
    float: right;
    position: relative;
    top: -0.3rem;
  }
  .headfile div img{
    width: 100%;
    border-radius: 50%;
    display: inline-block;
  }
  .head{
    position: relative;
    top: 0.3rem;
  }
  .right{
    position: relative;
    top: 0.35rem;
  }
  .username,.address{
    width: 16rem;
    width: 16rem;
    padding: 0.5rem 0.9rem;
    font-size: 0.65rem;
    border-bottom: 0.05rem solid rgba(240,240,240,1);
    background: white;
  }
  .LmAlert{
    width: 12rem;
    background: white;
    position: absolute;
    top:20%;
    left:13%;
  }
</style>
