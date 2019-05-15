<template>
  <!--商家详情页-->
    <div>
      <div class="head">
        <i class="el-icon-arrow-left left_back" @click="$router.back(-1)"></i>
        <span class="clean"></span>
        商家详情</div>
      <!--活动与属性-->
      <ul class="active">
        <li class="title">活动与属性</li>
        <li v-for="data in text.activities">
          <span class="des_name" :style="{backgroundColor:'#'+data.icon_color}">{{data.icon_name}}</span>
          <span>{{data.description}}</span>
          <span>(APP专享)</span>
        </li>
        <li v-for="data1 in text.supports">
          <span class="des_name" :style="{backgroundColor:'#'+data1.icon_color}">{{data1.icon_name}}</span>
          <span>{{data1.description}}</span>
          <span>(APP专享)</span>
        </li>
      </ul>
      <!--食品监督安全公示 -- 没有获取的数据-->
      <ul class="eat">
        <li class="title">
            <span>食品监督安全公示
              <!-- 没有数据 -->
              <!--<span class="info_des">企业认证详情 <i class="el-icon-arrow-right"></i></span>
              <span class="clean"></span>-->
            </span>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconlianghao"></use>
          </svg>
          <div class="right">
            <p>监督检查结果: <span>良好</span></p>
            <p>检查日期:</p>
          </div>
          <span class="clean"></span>
        </li>
      </ul>
      <!--商家信息-->
      <ul class="sj_info">
        <li class="title">商家信息</li>
        <li>{{text.name}}</li>
        <li>地址: {{text.address}}</li>
        <li>营业时间: {{text.opening_hours}}</li>
        <li @click="getYy">营业执照
          <i class="el-icon-arrow-right right_next"></i>
          <span class="clean"></span>
        </li>
        <li @click="getCy">餐饮服务许可证
          <i class="el-icon-arrow-right right_next"></i>
          <span class="clean"></span>
        </li>
      </ul>
      <!--弹出图片-->
      <div class="alert_img" v-if="ishide" @click="hideImg">
        <img :src="'//elm.cangdu.org/img/'+getimg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "Ndetails",
      data(){
        return{
          text:this.$store.state.nshoplist,
          getimg:'',
          ishide:false
        }
      },
      methods:{
        getYy(){
          this.ishide=true;
          this.getimg=this.text.license.business_license_image;
        },
        getCy(){
          this.ishide=true;
          this.getimg=this.text.license.catering_service_license_image;
        },
        hideImg(){
          this.ishide=false;
        }
      }
    }
</script>

<style scoped>
  .clean{
    clear: both;
  }
  .head{
    background-color: #3190e8;
    color: #fff;
    font-size: .8rem;
    text-align: center;
    padding: .25rem .3rem;
  }
  .head .left_back{
    float: left;
    margin-top: .2rem;
  }
  li{
    list-style: none;
  }
  ul{
    background-color: #fff;
    padding-bottom: .4rem;
  }
  .des_name{
    color: #fff;
  }
  .active, .sj_info{
    margin: .4rem 0;
  }
  ul .des_name{
    border-radius: .1rem;
    padding: .1rem;
  }
  ul .title{
    font-size: .7rem;
    color: #333;
    line-height: 1.8rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: .3rem;
  }
  .eat .title .info_des{
    float: right;
    font-size: .65rem;
    color: #bbb;
    vertical-align: middle;
  }
  .active li{
    padding: .36rem .5rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .sj_info li{
    padding: .6rem .5rem;
    border-bottom: .03rem solid #f5f5f5;
  }
  .active .title, .eat .title, .sj_info .title{
    padding: 0 .5rem;
  }
  .sj_info .right_next{
    float: right;
  }
  .alert_img{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.2);
  }
  .alert_img img{
    width: 100%;
    margin-top: 35%;
  }
  .eat li{
    padding: 0 .5rem;
  }
  .eat svg{
    float: left;
    font-size: 2.1rem;
    margin-right: .5rem;
    color: #7ed321;
  }
  .eat .right span{
    color: #7ed321;
  }
</style>
