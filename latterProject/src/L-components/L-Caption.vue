<template>
    <div>
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="L_headDiv">{{titleText}}</span>
      </div>
      <div>
        {{contentText}}
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-Caption",
      data() {
          return{
            titleText:'',
            contentText:'',
            data:{}

          }
        },
      created(){
        const arrdata=[]
        Vue.axios.get('https://elm.cangdu.org/v3/profile/explain').then((res)=>{
          let arr=[]
          //将所有的键值对放进数组
          for(let a in res.data){
            arr.push(a)
          }
          let arr1=[]
          //将问题取出放进数组
          for(let i=0;i<arr.length;i++){
            if (arr[i].indexOf('Content')!=-1){
              arr1.push(arr[i])
            }
          };
          for (let i in arr1){
            // console.log(i)
            // console.log(res.data[arr2[i]])
            arrdata.push(res.data[arr1[i]])
          }
          this.contentText=arrdata[this.$route.query.index]
        });
        //接收路由传值
        this.titleText=this.$route.query.name
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
    font-weight: bold;
  }
</style>
