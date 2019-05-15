<template>
    <div class="L_problem">
      <!--这是头-->
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="L_headDiv">余额问题</span>
      </div>
      <!--这是问题-->
      <div>

      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import $ from '../../node_modules/jquery/dist/jquery'
    export default {
        name: "L-balanceProblem",
        data(){
           return{
              strArr:[]
            }
        },
        created(){
          Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res)=>{
            // console.log(res.data.balanceContent)
          }).catch((err)=>{
            console.log(err)
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
</style>
