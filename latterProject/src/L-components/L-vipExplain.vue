<template>
    <div>
      <div>
        <div class="L_head">
         <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.back(-1)"></span>
          <span class="L_headDiv">会员说明</span>
        </div>
      <div>
        ### 会员权益调整 尊敬的用户，随着会员服务体系优化，「蜂鸟专送」商家得到大规模普及，大大丰富了会员用户的用餐选择，从2016年9月1日开始，新购及续费的会员服务将由免配送费调整为每单最高减免4元配送费，之前购买的会员服务不受影响，感谢您的支持！敬请期待更多会员特权。 ### Q1: 特权介绍 * 减配送费：饿了么会员卡绑定账户，每日前3单在「蜂鸟专送」标识商家可减配送费，每单最高可减4元。 * 更多特权，敬请期待！ ### Q2: 会员资费 * 月卡20元（一个月按31天计算） ### Q3: 购卡说明 * 在线购买：饿了么App &gt; 我的 &gt; 饿了么会员卡。 * 请认准饿了么官方认证渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "L-vipExplain"
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
</style>
