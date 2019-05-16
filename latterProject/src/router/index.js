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
import Nsweet from '../nComponents/Nsweet'
import NMLOAD from '../nComponents/Nmine_load'
import Lpreferential from '../L-components/L-preferential'
import Lhongbao from '../L-components/L-Hongbao'
import Ldaijinjuan from '../L-components/L-daijinjuan'
import Lhishongbao from '../L-components/L-Hishoingbao'
import LexchangeHb from '../L-components/L-exchangeHB'
import Lprize from '../L-components/L-prize'
import integral from '../L-components/L-integral'
import Lvip from '../L-components/L-vip'
import vipE from '../L-components/L-vipExplain'
import VipPay from '../L-components/L-vipPay'
import vipExchange from '../L-components/L-vipExchange'
import vipHistory from '../L-components/L-vipHistory'
import Nfoot from '../nComponents/Nfoot'
import Linfor from '../L-components/L-information'
import LchangeName from '../L-components/L-changeName'
import LshoppingAddress from '../L-components/L-shoppingAddress'
import Laddshopping from '../L-components/L-addShoppingAddress'
import Lchoose from '../L-components/L-chooseAddress'
import Nshowactive from '../nComponents/Nshowactive'
import Ndetails from '../nComponents/Ndetails'
import ZconfirmOrder from '../components/Z-confirmOrder'
import Nprodes from '../nComponents/Nprodes'
import Nbill from '../nComponents/Nbill'
import Lcaption from '../L-components/L-Caption'
import Llmsg from '../L-components/L-leaveMessage'
import Lorderdetails from '../L-components/L-orderdetails'

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
    {path:'/sweet',component:Nsweet},
    {path:'/nmine_load',component:NMLOAD},
    {path:'/nfoot',component:Nfoot},
    {path:'/nshowactive',component:Nshowactive},
    {path:'/ndetails',component:Ndetails},
    {path:'/ndetails',component:Ndetails},
    {path:'/nbill',component:Nbill},
    //这是优惠界面 包含二级路由
    {path:'/preferential',component:Lpreferential,children:[
        {path:'',redirect:{
          path:'/preferential/Lhongbao',component:Lhongbao
          }},
        {path:'/preferential/Lhongbao',component:Lhongbao},
        {path:'/preferential/Ldaijinjuan',component:Ldaijinjuan}
      ]},
  //  这是历史红包的路由
    {path:'/Hishongbao',component:Lhishongbao},
  //  这是兑换红包的路由
    {path:'/exchangeHb',component:LexchangeHb},
    //这是推荐有奖的路由
    {path:'/Lprize',component:Lprize},
  //  这个是我的积分的路由
    {path:'/integral',component:integral},
    //这个是vip的路由
    {path:'/vip',component:Lvip},
    //这个是跳转会员说明的路由
    {path:'/vipExplain',component:vipE},
  //  这个跳转到会员支付页面
    {path:'/vipPay',component:VipPay},
    //这个跳转到会员兑换
    {path:'/vipexchange',component:vipExchange},
    //这个跳转到会员历史
    {path:'/viphistory',component:vipHistory},
    //这个跳转到账户信息
    {path:'/Linformation',component:Linfor},
    //这个跳转到修改用户姓名
    {path:'/changeUsername',component:LchangeName},
    //这个是收货地址的路由
    {path:'/LshoppingAdd',component:LshoppingAddress},
    //这个是新增收货地址的路由
    {path:'/addShoppingAddress',component:Laddshopping},
    //这个是选择具体地址的路由
    {path:'/LchooseAddress',component:Lchoose},
    {path:'/nprodes',component:Nprodes},
    //这个是跳转到所有问题的路由
    {path:'/Lcaption',component:Lcaption},
    //Z订单确认页面
    {path:'/confirmorder',component:ZconfirmOrder},
    //这个是订单留言的路由
    {path:'/Lleavemessage',component:Llmsg},
    //这个是订单详情的路由
    {path:'/Lorderdetails',component:Lorderdetails}
  ]
})
