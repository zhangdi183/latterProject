<template>
    <div class="Lmcitysfind">
      <div class="L_head">
        <router-link :to="{path:'/'}"><span class="glyphicon glyphicon-menu-left pull-left" style="color: white;"></span></router-link>
        <span class="L_headDiv">{{LmSubmitName}}</span>
        <router-link :to="{path:'/'}"><span class="LmChangeCity pull-right">切换城市</span></router-link>
      </div>
      <!--这是请求地址的表单-->
      <div class="LmCityForm">
          <input type="text" class="input-group input-group-lg" id="LmInput" v-model="LmInputV" placeholder="输入学校,商务楼,地址">
          <button class="btn btn-primary LmSubmitBtn" @click="LmSubmit">提交</button>
      </div>
      <!--这是展示搜索结果的div-->
      <div class="LmFindHis" v-if="isTrue">
        <router-link to="/first">
          <h5 v-for="data in LmFindCitysArr" @click="LmGetData(data)">{{ data.name}}<small class="center-block">{{data.address}}</small></h5>
        </router-link>
      </div>
      <!--这是搜索历史页面-->
      <div class="LmFindHis" v-if="LmIsTrue1">
        <h5><small>搜索历史</small></h5>
        <router-link :to="{path:'/first'}">
          <h5 v-for="data in LmHistory" @click="getdata1(data)" style="font-size: 0.65rem">{{data.name}}<small class="center-block">{{data.address}}</small></h5>
        </router-link>
        <p style="text-align: center;font-size: 0.5rem" @click="LmDeleteData" v-if="LmIsTrue">清空所有历史</p>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-cityFind",
        data(){
          return{
            LmInputV:'',
            LmSubmitName:'',
            LmSubmitId:Number,
            LmFindCitysArr:[],
            LmHistory:[],
            isTrue:false,
            LmIsTrue:false,
            LmIsTrue1:true,
          }
        },
      methods:{
          //这是提交按钮点击事件
        LmSubmit(){
          let LmStr= 'https://elm.cangdu.org/v1/pois'+'?'+'city_id'+'='+this.LmSubmitId+'&'+'keyword='+ this.LmInputV+'&type=search';
          Vue.axios.get(LmStr).then((res)=>{
            this.LmFindCitysArr = res.data
            if (this.LmFindCitysArr.length>0){
              this.LmIsTrue1=!this.LmIsTrue1
            }
          }).catch((err)=>{
            console.log('请求出错',err)
          });
          if (this.LmInputV != ''){
            this.isTrue=!this.isTrue
          }
        },
        getdata1(data){
          this.$store.state.cityinfo=data;
        },
        //这是搜索到的内容
        LmGetData(data){
          this.$store.state.LmFindCitysHis.push(data);
          this.$store.state.cityinfo=data;
        },
        //这是清除所有历史数据
        LmDeleteData(){
          this.$store.state.LmFindCitysHis.splice(0)
          this.LmIsTrue = false
        },
      },
        created(){
          this.LmHistory = this.$store.state.LmFindCitysHis
          // console.log(this.$route.query)
          this.LmSubmitName=this.$route.query.Lcitysname;
          this.LmSubmitId=this.$route.query.LMcityid;
          //判断历史记录是否为空
          if (this.$store.state.LmFindCitysHis.length>0){
            this.LmIsTrue = true
          } else {
            this.LmIsTrue = false
          }
        }
    }
</script>

<style scoped>

.L_head{
  padding: 0.6rem 0.1rem 0.4rem;
  width: 16rem;
  background: rgb(49,144,232);
  color: white;
  text-align: center;
}
.L_head span{
  font-size: 0.8rem;
}
/*.L_headDiv{*/
  /*font-size: 0.8rem;*/
  /*font-weight: bold;*/
  /*position: relative;*/
  /*left: 37%;*/
  /*text-align: center;*/
  /*display: inline-block;*/

/*}*/
  .LmChangeCity{

    color: white;
    font-size: 0.6rem;
  }
  .LmSubmitBtn{
    background: rgb(49,144,232);
    outline: none;
    width: 12rem;
    position: relative;
    left: 1.9rem;
  }
  .LmFindHis{
    width: 16rem;
    margin-top: 0.05rem;
}
  .LmFindHis h5{
    border-bottom: 0.05rem solid #9f9f9f;
    padding: 0.5rem ;
    font-size: 0.5rem;
  }
  #LmInput{
    width: 13rem;
    margin: 0.5rem auto;
    padding-left: 0.25rem;
    line-height: 1.5rem;
    font-size: 0.7rem;
  }
  .LmCityForm{
    background: white;
    padding: 0.5rem;
  }

</style>
