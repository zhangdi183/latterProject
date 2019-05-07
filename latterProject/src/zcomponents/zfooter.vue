<template>
    <div class="zfooter">
      <router-link class="zfooterChild" :to="{path:'/ZhomePage/ZtoGo'}">外卖</router-link>
      <router-link class="zfooterChild" :to="{path: '/ZhomePage/Zsearch'}">搜索</router-link>
      <router-link class="zfooterChild" :to="{path:'/ZhomePage/Zorder'}">订单</router-link>
      <router-link class="zfooterChild" :to="{path:'/ZhomePage/Zmine'}">我的</router-link>
    </div>
</template>

<script>
    export default {
        name: "zfooter"
    }
</script>

<style scoped>
.zfooter{
  width: 16rem;
  height: 2rem;
  background-color: yellowgreen;
  display: flex;
  text-align: center;
  line-height: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
}
  .zfooterChild{
    width: 4rem;
    height: 2rem;
  }
</style>
