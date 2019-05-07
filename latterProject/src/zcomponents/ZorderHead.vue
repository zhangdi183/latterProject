<template>
    <div class="ZorderHead">
      <span><</span>
      <span>订单列表</span>
    </div>
</template>

<script>
    export default {
        name: "ZorderHead"
    }
</script>

<style scoped>
.ZorderHead{
  width: 16rem;
  height: 2rem;
  background-color: blue;
  font-size: 1.2rem;
  line-height: 2rem;
}
  .ZorderHead>span:last-child{
    margin-left: 5rem;
  }
</style>
