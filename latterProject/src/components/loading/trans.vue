<template>
  <div class="loading">
    <div class="center">
      <div class="bgi"></div>
    </div>
    <div class="yy"></div>
  </div>
</template>

<script>
    export default {
        name: "Loading"// 定义的组件名称 使用时写法：loading
    }
</script>

<style scoped>
  .loading {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }
  .center{
    width: 4rem;
    height: 4rem;
    position: relative;
    top: 40%;
    left: 37%;
    animation: ani 1s linear 0s infinite;
  }
  .bgi{
    width: 100%;
    height: 100%;
    background: url('../../L-imgs/icon_loading.png') center center no-repeat transparent;
    -webkit-background-size: 100% 700%;
    background-size: 100% 700%;
    background-position: 0 0;
    animation: ani_tt 9s linear 0s infinite;
  }
  .yy{
    width: 1.5rem;
    height: 1rem;
    border-radius: 50% / 50%;
    background-color: #000;
    margin: 0 auto;
    position: relative;
    top: 40%;
    animation: ani_yy 1s linear 0s infinite;
  }
  /*关键帧动画*/
  @keyframes ani {
    0% {
      top: 40%;
      opacity: 1;
    }
    50%{
      top: 32%;
      opacity: 0.1;
    }
    100%{
      top: 40%;
      opacity: 1;
    }
  }
  @keyframes ani_tt {
    0% {background-position:0 0;}
    14.2% {background-position:0 0;}
    14.2001% {background-position:0 16%;}
    28.4% {background-position:0 16%;}
    28.4001% {background-position:0 33%;}
    42.6% {background-position:0 33%;}
    42.6001% {background-position:0 50%;}
    56.8% {background-position:0 50%;}
    56.8001% {background-position:0 67%;}
    71% {background-position:0 67%;}
    71.0001% {background-position:0 84%;}
    85.2% {background-position:0 84%;}
    85.2001% {background-position:0 100%;}
    100% {background-position:0 100%;}
  }
  @keyframes ani_yy {
    0%{
      width: 1.5rem;
      opacity: 0.05;
    }
    50%{
      width: 3rem;
      opacity: 0.01;
    }
    100%{
      width: 1.5rem;
      opacity: 0.05;
    }
  }
</style>
