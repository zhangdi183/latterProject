<!--外卖页轮播的分页面-->
<template>
  <!--顶部-->
  <mt-header :title="this.$store.state.shopcart" class="nhead">
    <router-link to="/first" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
    export default {
        name: "Nsweet",
      data(){
          return{
            meat:this.$store.state.shopcart,
          }
      }
    }
</script>

<style scoped>

</style>
