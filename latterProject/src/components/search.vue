<template>
    <div>
      <!--顶部-->
      <mt-header title="搜索">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
  <!--搜索-->
  
</template>
<script>
  import { Search } from 'mint-ui';
  import { Header } from 'mint-ui';
  import Vue from "vue";

  Vue.component(Header.name, Header);
  Vue.component(Search.name, Search);
    export default {
        name: "search"
    }
</script>

<style scoped>

</style>
