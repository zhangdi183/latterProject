<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
  import {} from "./resize"
  import {} from './iconfont'
  import Bottom from "./components/Bottom";
  export default {
  name: 'App',
    components: {Bottom},
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path == '/') {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-left';
        }
      }
    },
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
  /*路由动画的样式*/
  .child-view {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
