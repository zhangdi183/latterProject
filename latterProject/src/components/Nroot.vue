<template>
  <div>
    <span>{{time}}</span>
    <!--这是个警告框-->
    <div class="warn" v-if="isShowcs">
      <div class="alert alert-warning text-center LmAlert bounceIn">
        <img src="../L-imgs/感叹号.png" height="100" width="100"/>
        <p>支付超时</p>
        <button class="btn btn-success btn-group btn-block" @click="isShowcs=false">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Nroot",
      data () {
        return {
          time : '',
          flag : false,
          isShowcs:false,
        }
      },
      mounted () {
        let time = setInterval(()=>{
          if(this.flag == true){
            clearInterval(time);
          }
          this.timeDown()
        },500)
      },
      props : {
        endTime : {
          type : String
        },
        
      },
      methods : {
        timeDown () {
          const endTime = new Date(this.endTime);
          const nowTime = new Date();
          let leftTime = parseInt((endTime.getTime()-nowTime.getTime())/1000);
          let m = this.formate(parseInt(leftTime/60%60));
          let s = this.formate(parseInt(leftTime%60));
          if(leftTime <= 0){
            this.flag = true;
            this.isShowcs=true;
            this.isShow=false;
            this.$store.state.Z_tempList=[];
            //页面重新渲染
            this.$forceUpdate();
            this.$emit('time-end');
          }
          this.time = `去支付(还剩 ${m}分${s}秒)`
        },
        formate (time) {
          if(time>=10){
            return time
          }else{
            return `0${time}`
          }
        }
      }
    }
</script>

<style scoped>
  .warn{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .LmAlert{
    width: 13rem;
    background: white;
  }
  .warn button{
    margin-top: .5rem;
  }
</style>
