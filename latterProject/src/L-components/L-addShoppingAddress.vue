<template>
    <div>
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="L_headDiv">新增地址</span>
      </div>
      <div class="input">
        <input type="text" placeholder="请填写你的名字" v-model="inputName">
        <input type="text" :placeholder="alert" v-model="inputAddress" @click="chooseAddress">
        <input type="text" placeholder="请填写详细送餐地址" v-model="inputDetailed" :style="style1" @blur="detail">
        <p style="color: red;font-size: 0.5rem;position: relative;left: -4rem; top: 0.3rem;" v-if="isfalse">送餐地址太短了,不能辨识</p>
        <input type="text" placeholder="请填写能够联系到您的电话" :style="style1" v-model="inputPhoneNum" @blur="inputPhoneNum1">
        <p style="color: red;font-size: 0.5rem;position: relative;left: -4.65rem; top: 0.3rem;" v-if="isFalse">{{alertText}}</p>
        <input type="text" placeholder="备用联系电话(选填)" v-model="inputPhoneStandby">
      </div>
      <div class="text-center">
        <button class="btn btn-success" style="width: 14rem; margin-top: 0.5rem" :disabled="istrue" @click="add">新增地址</button>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-addShoppingAddress",
      data(){
          return{
            inputName:'',
            inputAddress:'',
            inputDetailed:'',
            inputPhoneNum:'',
            inputPhoneStandby:'',
            alertText:'',
            isFalse:false,
            isfalse:false,
            istrue:true,
            style1:{
              border: '0.05rem solid #9f9f9f',
            },
            alert:'请输入小区/写字楼/学校等',
            id:Number,
            geohash:''
          }
      },
      methods:{
        inputPhoneNum1(){
          if (this.inputPhoneNum.length<11){
            this.style1.border='0.05rem solid red'
            this.alertText='请输入正确的手机号';
            this.isFalse=true
          }else if(this.inputPhoneNum>=11){
            this.isFalse=false;
            if(this.inputName!=''&&this.inputPhoneNum!=''&&this.inputAddress!=''&&this.inputDetailed!=''){
              this.istrue=false;
            }
          }
        },
        chooseAddress(){
          this.$router.push({path:'/LchooseAddress'})
        },
        detail(){
          if (this.inputDetailed.length<5){
            this.style1.border='0.05rem solid red'
            this.isfalse=true
          }else if(this.inputPhoneNum>=5){
            this.isfalse=false;
            }
          },
        add(){
          Vue.axios.post(`https://elm.cangdu.org/v1/users/${this.id}/addresses`,{

            address:this.inputAddress,
            address_detail:this.inputDetailed,
            geohash:this.geohash,
            name:this.inputName,
            phone:this.inputPhoneNum,
            tag:'123',
            sex:1,
            phone_bk:this.inputPhoneStandby,
            tag_type:2
          }).then((res)=>{
            console.log(res)
          })
        }
        },
      created(){
          if (this.$route.query.name!=''){
            this.inputAddress=this.$route.query.name
            this.geohash=this.$route.query.jingwei
          };
          Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
            this.id=res.data.user_id
            console.log(res)
          })
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
    background: white;
    padding: 0.5rem;
    margin-top: 0.5rem;
    text-align: center;
  }
  .input input {
    width: 14rem;
    line-height: 1.2rem;
    margin-top: 0.5rem;
    font-size: 0.65rem;
    padding: 0 0.3rem;
    border: 0.05rem solid #9f9f9f;
    border-radius: 0.2rem;
    outline: none;
  }
</style>
