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
import 'animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuex);
Vue.use(MintUI);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(Vuex)
axios.defaults.withCredentials = true

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state:{
    //食品分类列表
    shopcart:[],
    //城市信息
    cityinfo:[],
    //这个是搜索城市历史的数组
    LmFindCitysHis:[],
    //这个是个人信息
    LmPersonInfor:{},
    //获取食品列表
    nfoot:'',
    //食品列表遍历之后
    nfootPro:{},
    //商铺列表
    nshoplist:{},
    //修改用户名
    changeUsername:'',
    //评价分数
    neva:'',
    //购物车列表
    Z_shopTrolleyList:[],
    //这个存的是备注信息
    LmLeaveMsg:''
  }
});

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
