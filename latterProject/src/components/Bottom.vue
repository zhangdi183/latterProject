<template>
  <!--底部-->
    <div class="foot">
      <ul>
        <li @click="outC">
          <router-link :to="{path:'/first'}" class="btnc">
              <svg class="icon" :class="{'icon1':out}" aria-hidden="true">
                <use xlink:href="#iconSSS"></use>
              </svg><br>
              <span>外卖</span>
          </router-link>
        </li>
        <li @click="searchC">
          <router-link :to="{path:'/search'}" class="btnc">
              <svg class="icon" :class="{'icon1':search}" aria-hidden="true">
                <use xlink:href="#iconzhizhen"></use>
              </svg><br>
              <span>搜索</span>
          </router-link>
        </li>
        <li @click="orderC">
          <router-link :to="{path:'/order'}" class="btnc">
              <svg class="icon" :class="{'icon1':order}" aria-hidden="true">
                <use xlink:href="#icondingdan"></use>
              </svg><br>
              <span>订单</span>
          </router-link>
        </li>
        <li @click="toMine">
          <router-link :to="{path:'/nmine'}" class="btnc">
              <svg class="icon" :class="{'icon1':mine}" aria-hidden="true">
                <use xlink:href="#icongerenzhongxinyonghu01"></use>
              </svg><br>
              <span>我的</span>
          </router-link>
        </li>
        <span class="clean"></span>
      </ul>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Bottom",
      data(){
          return{
            out:false,
            search:false,
            order:false,
            mine:false,
          }
      },
      methods:{
        toMine(){
          this.out=false;
          this.search=false;
          this.order=false;
          this.mine=true;
          
          Vue.axios.get('https://elm.cangdu.org/v1/user').then((res)=>{
            if (res.data.message==='通过session获取用户信息失败'){
              this.$router.push({path:'/nmine'})
            }else{
              this.$router.push({path:'/nmine_load'})
            }
          })
        },
        outC(){
          this.out=true;
          this.search=false;
          this.order=false;
          this.mine=false
        },
        searchC(){
          this.out=false;
          this.search=true;
          this.order=false;
          this.mine=false
        },
        orderC(){
          this.out=false;
          this.search=false;
          this.order=true;
          this.mine=false
        }
      },
    }
</script>

<style scoped>
  .clean{
    clear: both;
  }
  li{
    list-style: none;
  }
  .foot{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
  }
  .foot ul li{
    width: 25%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: .2rem 0;
  }
  svg{
    font-size: 1rem;
    color: #333;
  }
  a{
    text-decoration: none;
    color: #000;
  }
  .icon{
    margin: .2rem 0;
  }
  .btnc .icon1{
    color: #3a83ff;
  }
</style>
