<template>
  <div>
    <!--顶部-->
    <mt-header title="订单列表">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <Bottom></Bottom>
  </div>
</template>

<script>
  import Bottom from './Bottom'
    export default {
        name: "Order",
      components: {Bottom}
    }
</script>

<style scoped>

</style>
