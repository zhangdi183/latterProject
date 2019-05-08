import Vue from 'vue'
import Router from 'vue-router'
import Nmine from '../nComponents/Nmine'
import first from '../components/first'
import search from '../components/search'
import Order from '../components/Order'
import Lcity from '../L-components/L-citys'
import LcityFind from '../L-components/L-cityFind'
import Nscenter from '../nComponents/Nscenter'
import Llogin from '../L-components/L-login'
import Lresetp from '../L-components/L-resetPassword'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Lcity},
    {path:'/resetpassword',component:Lresetp},
    {path:'/login',component:Llogin},
    {path:'/find',component:LcityFind},
    {path:'/first',component:first},
    {path:'/search',component:search},
    {path:'/order',component:Order},
    {path:'/nmine',component:Nmine},
    {path:'/nscenter',component:Nscenter},
  ]
})
