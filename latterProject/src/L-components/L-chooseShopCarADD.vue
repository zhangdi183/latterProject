<template>
    <div>
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="">选择地址</span>
      </div>
      <div class="address" v-for="d in Arr" @click="toShopCar(d)">
        <img src="../L-imgs/选中.png" alt="">
       <div style="display: inline-block;">
         <div>
           <span>{{d.name}}</span>
           <span>{{d.sex}}</span>
           <span>{{d.phone}}</span>
         </div>
         <div style="margin-top: 0.3rem">
           <span style="background: red;color: white;padding: 0.1rem;border-radius: 0.2rem;font-size: 0.5rem">{{d.tag}}</span>
           <span>{{d.address_detail}}</span>
           <span>{{d.address}}</span>
         </div>
       </div>
      </div>
      <router-link to="/Lshopcaraddress">
        <div class="addAddress">
          <img src="../L-imgs/定位.png"/>
          <span>增加收货地址</span>
        </div>
      </router-link>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-chooseShopCarADD",
      data(){
        return{
          Arr:[],
        }
      },
      methods:{
        toShopCar(d){
          this.$router.push({path:'/confirmorder',query:{
              data:d.address
            }})
        }
      },
      created(){
        Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
          Vue.axios.get(`https://elm.cangdu.org/v1/users/${res.data.id}/addresses`).then((res)=>{
            let a=res.data.reverse()
            for (let i in a){
              console.log(a[i].sex)
              if(a[i].sex===1){
                a[i].sex='先生'
              }else if(a[i].sex===2){
                a[i].sex='女士'
              }
            }
            this.Arr=a
            console.log(a)
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
  .address{
    width: 16rem;
    background: white;
    border-bottom: 0.05rem solid #e1e1e1;
    padding: 0.3rem;
  }
  .address img{
    width:1.5rem;
    height: 1.5rem;
    position: relative;
    top: -0.5rem;
  }
  .addAddress{
    text-align: center;
    margin-top: 0.5rem;
  }
  .addAddress img{
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
  }
</style>
