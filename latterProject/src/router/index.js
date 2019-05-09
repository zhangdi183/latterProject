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
import Ndownload from '../nComponents/Ndownload'
import Nintegral from '../nComponents/Nintegral'
// import Nmine_load from '../nComponents/Nmine_load'
import LblanceMoney from '../L-components/L-blanceMoney'
import LBalanceProblem from '../L-components/L-balanceProblem'
Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',component:Lcity},
    {path:'/balance',component:LblanceMoney},
    {path:'/lmBp',component:LBalanceProblem },
    {path:'/resetpassword',component:Lresetp},
    {path:'/login',component:Llogin},
    {path:'/find',component:LcityFind},
    {path:'/first',component:first},
    {path:'/search',component:search},
    {path:'/order',component:Order},
    {path:'/nmine',component:Nmine},
    {path:'/nscenter',component:Nscenter},
    {path:'/ndownload',component:Ndownload},
    {path:'/nintegral',component:Nintegral},
  ]
})
