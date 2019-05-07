<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
  import {} from "./resize"
  import Zfooter from "./zcomponents/zfooter";
  export default {
  name: 'App',
    components: {Zfooter}
  }
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
