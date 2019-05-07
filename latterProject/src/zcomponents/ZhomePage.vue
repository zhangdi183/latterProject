<template>
    <div class="ZhomePage">
      <router-view></router-view>
      <zfooter></zfooter>
    </div>
</template>

<script>
    import Zfooter from "./zfooter";
    export default {
        name: "ZhomePage",
      components: {Zfooter}
    }
</script>

<style scoped>
.ZhomePage{
  width: 16rem;
}
</style>
