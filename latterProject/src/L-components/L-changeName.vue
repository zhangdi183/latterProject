<template>
    <div>
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="L_headDiv">账户信息</span>
      </div>
      <div class="text-center" style="padding: 0.3rem">
        <input type="text" class="input" placeholder="输入用户名"  :style="style1" v-model="V" >
        <h6><small style="position: relative; left: -3.7rem;" v-if="isIf1">用户名只能修改一次(5-24字符之间)</small></h6>
        <h6><small style="position: relative; left: -3.7rem;color: red" v-if="isIf">用户名长度在5-24字符之间</small></h6>
        <div class="text-center">
          <button class="btn btn-primary" style="width: 14rem" @click="change">确认修改</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "L-changeName",
      data(){
        return{
          style1:{
            border: '0.05rem solid #9f9f9f',
          },
          isIf:false,
          isIf1:true,
          V:'',
        }
      },
      methods:{
        change(){
          this.$store.state.changeUsername=this.V;
          console.log(this.$store.state.changeUsername);
          this.$router.go(-1)
        }
      },
      watch:{
          V:function(oldV,newV){
            if (oldV.length<5){
              this.isIf=!this.isIf
              this.isIf1=!this.isIf1
              this.style1.border= '0.05rem solid red'
            }else {
              this.isIf=false
              this.isIf1=true
              this.style1.border= '0.05rem solid #9f9f9f'
            }
            // console.log(oldV.length,newV.length)
          }
      }
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
  .input{
    background: rgba(240,240,240,1);
    width: 15rem;
    line-height: 1.3rem;
    font-size: 0.7rem;
    padding: 0.2rem;
    outline: none;
  }
</style>
