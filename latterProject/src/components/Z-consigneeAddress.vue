<template>
  <div >
    <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
      <span class="L_headDiv">选择地址</span>
      <span class="pull-right" style="margin-right: 0.5rem" @click="editor">{{titleText}}</span>
    </div>
    <div>
      <!--这个显示的是收货地址-->
      <div class="showAddress" v-for="data in dataArr">
        <span>{{data.address}}</span>
        <span>{{data.phone}}</span>
        <span class="deleteAddress" v-if="isTrue" @click="deleteaddress(data.id)">X</span>
      </div>
    </div>
    <router-link :to="{path:'/addShoppingAddress'}">
      <div class="add">
        <span>新增地址</span>
        <span class="glyphicon glyphicon-menu-right pull-right"></span>
        <div class="clearfix"></div>
      </div>
    </router-link>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "L-shoppingAddress",
    data(){
      return{
        dataArr:[],
        titleText:'编辑',
        isTrue:false,
        userid:Number
      }
    },
    methods:{
      editor(){
        if (this.titleText==='编辑'){
          this.titleText='完成';
          this.isTrue=true
        }else if (this.titleText==='完成'){
          this.titleText='编辑';
          this.isTrue=false
        }
      },
      deleteaddress(id){
        Vue.axios.delete(`https://elm.cangdu.org/v1/users/${this.userid}/addresses/${id}`).then((res)=>{
          if (res.data.success==='删除地址成功'){
            Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
              this.userid=res.data.user_id
              Vue.axios.get(`https://elm.cangdu.org/v1/users/${res.data.id}/addresses`).then((res)=>{
                let a=res.data.reverse()
                this.dataArr=a;
              })
            })
          }
        })
      }
    },
    created(){
      Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
        this.userid=res.data.user_id
        Vue.axios.get(`https://elm.cangdu.org/v1/users/${res.data.id}/addresses`).then((res)=>{
          let a=res.data.reverse()
          this.dataArr=a;
        })
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
  .add{
    width: 16rem;
    background: white;
    padding: 0.5rem 0.2rem;
    color: black;
  }
  .showAddress{
    width:16rem;
    background: white;
    padding: 0.3rem;
    border-bottom: 0.05rem solid #9f9f9f;
  }
  .showAddress span{
    display: block;
    font-size: 0.65rem;
  }
  .showAddress:first-child{
    width:16rem;
    background: #FFF8C3;
    padding: 0.3rem;
    border-bottom: 0.05rem solid #9f9f9f;
  }
  .deleteAddress{
    position: relative;
    top: -1.4rem;
    right: -14.25rem;
  }

</style>
