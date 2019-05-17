<template>
    <div>
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="">选择地址</span>
      </div>
      <!--输入信息的页面-->
      <div class="userInformation">
          <div class="username">
            <p style="display: inline-block;width: 3rem">联系人</p>
            <input type="text" placeholder="你的名字" v-model="inputName">
          </div>
          <div style="text-align: right;padding-right: 5.2rem;padding-top: 0.5rem;padding-bottom: 0.5rem; border-bottom: 0.05rem solid #e1e1e1">
            <el-radio v-model="radio" label="1">先生</el-radio>
            <el-radio v-model="radio" label="2">女士</el-radio>
          </div>
        <div class="username">
          <p style="display: inline-block;width: 3rem">联系电话</p>
          <input type="text" placeholder="你的电话" v-model="inputPhone">
          <img src="../L-imgs/手机.png" alt="">
        </div>
        <div class="username" @click="toChooseaddress">
          <p style="display: inline-block;width: 3rem">送餐地址</p>
          <input type="text" placeholder="您的地址" v-model="inputAddress">
        </div>
        <div style="text-align: right;padding-top: 0.5rem;padding-bottom: 0.5rem; border-bottom: 0.05rem solid #e1e1e1">
          <input type="text" placeholder="详细地址(如门牌号)" class="input1" v-model="inputDetail">
        </div>
        <div class="username">
          <p style="display: inline-block;width: 3rem">标签</p>
          <input type="text" placeholder="无/家/学校/公司" v-model="inputType">
        </div>
        <div class="text-center">
          <button class="btn btn-success" style="width: 13rem" @click="add">确定</button>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "LshopcarAddress",
      data(){
          return{
            radio: '1',
            inputAddress:'',
            inputName: '',
            inputPhone:'',
            inputDetail:'',
            inputType:'',
            id:Number,
            geohash:''
          }
      },
      methods:{
        toChooseaddress(){
            this.$router.push({path:'/LchooseAddress1'})
        },
        add(){
          Vue.axios.post(`https://elm.cangdu.org/v1/users/${this.id}/addresses`,{
            address:this.inputAddress,
            address_detail:this.inputDetail,
            geohash:this.geohash,
            name:this.inputName,
            phone:this.inputPhone,
            tag:this.inputType,
            sex:parseInt(this.radio),
            phone_bk:'110',
            tag_type:2
          }).then((res)=>{
            if(res.data.success==='添加地址成功'){
              this.$router.push({path:'/chooseShopCarADD'})
            }
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
          // console.log(res)
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
  .userInformation{
    background: white;
    padding: 0.3rem;
    font-size: 0.7rem;
  }
  .username{
    padding: 0.2rem;
    margin-top: 0.3rem;
  }
  .username input{
    width: 11rem;
    line-height: 1.5rem;
    background: white;
    border: 0;
    border-bottom: 0.05rem solid #e1e1e1;
    outline: none;
    padding: 0rem 0.5rem;
    font-size: 0.6rem;
  }
  .username img{
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    right: 0.5rem;
    top: 7.5rem;
  }
  .input1{
    width: 12rem;
    line-height: 1.5rem;
    background: white;
    border: 0;
    outline: none;
    padding: 0rem 0.5rem;
    font-size: 0.6rem;
  }
</style>
