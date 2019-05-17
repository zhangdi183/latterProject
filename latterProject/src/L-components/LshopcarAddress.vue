<template>
    <div>
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="">选择地址</span>
      </div>
      <!--输入信息的页面-->
      <div class="userInformation">
          <div class="username">
            <p style="display: inline-block;width: 3rem">联系人</p>
            <input type="text" placeholder="你的名字">
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "LshopcarAddress"
    }
</script>

<style scoped>
  .L_head{
    padding: 0.6rem 0.1rem 0.4rem;
    width: 16rem;
    background: rgb(49,144,232);
    color: white;
    text-align: center;
    font-weight: bold;
  }
  .userInformation{
    background: white;
  }
  .username input{
    width: 12rem;
    line-height: 1.5rem;
    background: white;
    border: 0;
  }
</style>
