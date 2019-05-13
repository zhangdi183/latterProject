<template>
  <!--服务中心-->
    <div>
      <div class="serve">
        <mt-header fixed title="服务中心">
          <router-link to="/nmine" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
      </div>
      <div class="two">
        <router-link to="/" class="surplus">
          <svg class="icon icon1" aria-hidden="true">
            <use xlink:href="#iconfuwuzhongxin"></use>
          </svg><br>
          <span>在线客服</span>
        </router-link>
        <div class="surplus" @click="hotLine">
          <svg class="icon icon2" aria-hidden="true">
            <use xlink:href="#icondianhua"></use>
          </svg><br>
          <span>在线热线</span>
        </div>
        <div class="clean"></div>
      </div>
      <!--热门问题-->
      <div>
        <mt-cell-swipe title="热门问题" class="problem"></mt-cell-swipe>
        <router-link to="/" v-for="(data,index,i) in array" :key="i" class="pro">
          <mt-cell-swipe :title="data" is-link></mt-cell-swipe>
        </router-link>
      </div>
    </div>
</template>

<script>
  import { CellSwipe } from 'mint-ui';
  import Vue from 'vue'
  import { MessageBox } from 'mint-ui';
  
  Vue.component(CellSwipe.name, CellSwipe);
    export default {
        name: "Nscenter",
      data(){
        return{
          all:'',
          problem:'',
          content:[],
          array:[]
        }
      },
      methods:{
        hotLine(){
          window.confirm('要打开 选取应用 吗?');
        },
      },
      mounted(){
        Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res)=>{
          let arr=[]
          //将所有的键值对放进数组
          for(let a in res.data){
            arr.push(a)
          }
          let arr1=[]
          //将问题取出放进数组
          for(let i=0;i<arr.length;i++){
            if (arr[i].indexOf('Caption')!=-1){
              arr1.push(arr[i])
            }
          };

          for (let i in arr1){
            // console.log(i)
            // console.log(res.data[arr2[i]])
            this.array.push(res.data[arr1[i]])
          }
        }).catch((error)=>{
          console.log('请求错误!',error);
        });
      },
    }
</script>

<style scoped>
  .clean{
    clear: both;
  }
  .surplus{
    float:left;
    color: #000;
    width: 50%;
    text-align: center;
    border-right: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    text-decoration: none;
    padding: .8rem 0;
    background: #fff;
  }
  .two{
    margin-top: 1.8rem;
  }
  .icon{
    font-size: 1.2rem;
  }
  .icon1{
    color:rgb(255, 123, 82);
  }
  .icon2{
    color: rgb(6, 255, 39);
  }
  .surplus span{
    font-size: .6rem;
    color: #666;
  }
  .problem{
    font-weight: 700;
  }
  .pro{
    color: #333;
  }
</style>
