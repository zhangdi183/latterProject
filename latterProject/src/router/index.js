import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ZhomePage from '../zcomponents/ZhomePage'
import ZtoGo from '../zcomponents/ZtoGo'
import Zsearch from '../zcomponents/Zsearch'
import Zorder from '../zcomponents/Zorder'
import Zmine from '../zcomponents/Zmine'

export default new Router({
  routes: [
    // 路由重定向
    {path:'/', redirect:'/ZhomePage'},
    // 一级路由配置
    {path:'/ZhomePage', component:ZhomePage,children:[
        {path:'',redirect: 'ZtoGo'},
        {path:'ZtoGo',component:ZtoGo},
        {path:'Zsearch',component:Zsearch},
        {path:'Zorder',component:Zorder},
        {path:'Zmine',component:Zmine}
      ]},
  ]
})
