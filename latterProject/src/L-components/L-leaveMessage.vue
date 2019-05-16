<template>
    <div>
      <div class="L_head">
        <span class="glyphicon glyphicon-menu-left pull-left" style="color: white;" @click="$router.go(-1)"></span>
        <span class="L_headDiv">订单备注</span>
      </div>
      <!--快速备注-->
      <div class="note">
        <p>快速备注</p>
        <div class="fastNote">
          <div class="spicy" v-for="d in note">
            <span v-for="i in d">{{i}}</span>
          </div>
        </div>
      </div>
      <!--其他备注-->
      <div class="ortherNote">
        <p>其他备注</p>
        <div>
          <textarea rows="5" cols="20" class="textArea" placeholder="请输入备注内容(可不填)"></textarea>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-success" style="width: 13rem">确认</button>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-leaveMessage",
      data(){
          return{
            note:[]
          }
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/v1/carts/1/remarks').then((res)=>{
            this.note=res.data.remarks
          })
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
  .note{
    background: white;
    width: 16rem;
    font-size: 0.65rem;
    padding: 0.5rem;
  }
  .fastNote div{
    display: inline-block;
    border:0.05rem solid rgb(49,144,232) ;
    border-radius: 0.2rem;
    padding:0 0.2rem;
    font-size: 0.6rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
  .spicy span{
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border-right: 0.05rem solid rgb(49,144,232);
  }
  .spicy span:last-child{
    border-right: 0;
  }
  .ortherNote{
    width: 16rem;
    background: white;
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 0.65rem;
  }
  .textArea{
    width: 15rem;
    padding: 0.3rem;
    outline: none;
    background: #F9F9F9;
  }
</style>
