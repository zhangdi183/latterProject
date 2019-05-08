<template>
    <div>
      <!--标题-->
      <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈" class="tit">
        <router-link to="/" slot="left">
          <svg class="icon icon1" aria-hidden="true">
            <use xlink:href="#iconsousuo"></use>
          </svg>
        </router-link>
        <mt-button slot="right">
          <svg class="icon icon1" aria-hidden="true">
            <use xlink:href="#icongerenzhongxinyonghu01"></use>
          </svg>
        </mt-button>
      </mt-header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <ul>
              <li></li>
            </ul>
          </div>
          <div class="swiper-slide">Slide 2</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
  import { Header } from 'mint-ui';
  import Vue from 'vue'
  import Swiper from "swiper"
  
  Vue.component(Header.name, Header);
    export default {
        name: "first",
      mounted(){
        new Swiper ('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        });
        Vue.axios.get('https://elm.cangdu.org/v2/index_entry').then((res)=>{
          console.log(res.data);
        }).catch((error)=>{
          console.log('请求错误!',error);
        });
      }
    }
</script>

<style scoped>
  @import "../../node_modules/swiper/dist/css/swiper.css";
  .tit svg{
    font-size: .8rem;
  }
  .swiper-container {
    width: 100%;
    height: 200px;
  }
  .swiper-slide{
    background-color: #fff;
  }
</style>
