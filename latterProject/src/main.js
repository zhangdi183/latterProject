// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(MintUI);
Vue.use(VueAxios, axios);
import Vuex from 'vuex'

Vue.use(Vuex)
axios.defaults.withCredentials = true


//这是vuex的代码块
const store = new Vuex.Store({
  state:{
    //这个是搜索城市历史的数组
    LmFindCitysHis:[],
    //这个是个人信息
    LmPersonInfor:{}
  }
})

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state:{
    //食品分类列表
    shopcart:[],
    //城市信息
    cityinfo:[],
  }
});

new Vue({
  el: '#app',
  store,
  router,
  store,
  components: { App },
  template: '<App/>'
});
