<template>
    <div >
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="L_headDiv">编辑地址</span>
        <span class="pull-right" style="margin-right: 0.5rem">编辑</span>
      </div>
      <div>
        <!--这个显示的是收货地址-->
        <div class="showAddress" v-for="data in dataArr">
          <span>{{data.address}}</span>
          <span>{{data.phone}}</span>
        </div>
        <hr>
       <router-link :to="{path:'/addShoppingAddress'}">
         <div class="add">
           <span>新增地址</span>
           <span class="glyphicon glyphicon-menu-right pull-right"></span>
           <div class="clearfix"></div>
         </div>
       </router-link>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-shoppingAddress",
      data(){
          return{
            dataArr:[]
          }
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
            Vue.axios.get(`https://elm.cangdu.org/v1/users/${res.data.id}/addresses`).then((res)=>{
              let a=res.data.reverse()
              this.dataArr=a
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

</style>
