import Vue from 'vue'
import Router from 'vue-router'
import Nmine from '../nComponents/Nmine'
import first from '../components/first'
import search from '../components/search'
import Order from '../components/Order'
import Lcity from '../L-components/L-citys'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',component:Lcity},
    {path:'/first',component:first},
    {path:'/search',component:search},
    {path:'/order',component:Order},
    {path:'/nmine',component:Nmine}
  ]
})
