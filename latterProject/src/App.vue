<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
  import {} from "./resize"
  import {} from './iconfont'
  import Bottom from "./components/Bottom";
  export default {
  name: 'App',
    components: {Bottom},
  }
</script>

<style>
  @import url('../node_modules/bootstrap/dist/css/bootstrap.min.css');

  *{
    padding: 0;
    margin: 0;
  }
  body,html{
    width: 100%;
    height: 100%;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  body,html{
    background-color: #f5f5f5;
  }
</style>
