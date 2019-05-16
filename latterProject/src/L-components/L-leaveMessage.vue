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
          <div >
            <el-radio-group v-model="radio4" size="mini" v-for="(a,i) in cities0" >
             <div @click="noteMessage(a)">
               <el-radio-button :label="i" ref="ref" >{{a}}</el-radio-button>
             </div>
            </el-radio-group>
          </div>
          <div >
            <el-checkbox-group v-model="checkboxGroup4" size="mini">
              <el-checkbox-button v-for="city in cities1" :label="city" :key="city"><div  @click="a(city)">{{city}}</div></el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div >
            <el-checkbox-group v-model="checkboxGroup4" size="mini">
              <el-checkbox-button v-for="city in cities2" :label="city" :key="city"><div  @click="a(city)">{{city}}</div></el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div >
            <el-checkbox-group v-model="checkboxGroup4" size="mini">
              <el-checkbox-button v-for="city in cities3" :label="city" :key="city"><div  @click="a(city)">{{city}}</div></el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div >
            <el-checkbox-group v-model="checkboxGroup4" size="mini">
              <el-checkbox-button v-for="city in cities4" :label="city" :key="city"><div  @click="a(city)">{{city}}</div></el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div >
            <el-checkbox-group v-model="checkboxGroup4" size="mini">
              <el-checkbox-button v-for="city in cities5" :label="city" :key="city"><div  @click="a(city)">{{city}}</div></el-checkbox-button>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <!--其他备注-->
      <div class="ortherNote">
        <p>其他备注</p>
        <div>
          <textarea rows="5" cols="20" class="textArea" placeholder="请输入备注内容(可不填)" v-model="area"></textarea>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-success" style="width: 13rem" @click="sureText">确认</button>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "L-leaveMessage",
      data(){
          return{
            checkboxGroup4: ['上海'],
            cities0: [],
            cities1: [],
            cities2: [],
            cities3: [],
            cities4: [],
            cities5: [],
            radio4: '上海',
            radio5: '上海',
            text:'',
            area:'',
          }
      },
      methods:{
        noteMessage(name){
          this.text=name+','
        },
        a(name){
          this.text+=name+','
        },
       sureText(){
         this.$store.state.LmLeaveMsg=this.text+this.area;
         this.$router.go(-1)
       }
      },
      created(){
          Vue.axios.get('https://elm.cangdu.org/v1/carts/1/remarks').then((res)=>{
            this.cities0=res.data.remarks[0]
            this.cities1=res.data.remarks[1]
            this.cities2=res.data.remarks[2]
            this.cities3=res.data.remarks[3]
            this.cities4=res.data.remarks[4]
            this.cities5=res.data.remarks[5]
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
    font-size: 0.6rem;
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
