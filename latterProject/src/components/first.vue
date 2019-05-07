<template>
    <div>
      <!--标题-->
      <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

    </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import Vue from 'vue'
  
  Vue.component(Header.name, Header);
    export default {
        name: "first"
    }
</script>

<style scoped>

</style>
