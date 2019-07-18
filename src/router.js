import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Home/index.vue'
import Home from './views/Home/Home.vue'
import Share from './views/Share/index.vue'
import Activity from './views/Activity/Activity.vue'
import User from './views/User/User.vue'
Vue.use(Router)

let course_router = [
  {
    path: '/course',
    name: 'course',
    component: () => import(/* webpackChunkName: "course" */ './views/Course/Course.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course-ck',
    name: 'ck',
    component: () => import(/* webpackChunkName: "ck" */ './views/Course/childPage/cunkuan.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course-qk',
    name: 'qk',
    component: () => import(/* webpackChunkName: "qk" */ './views/Course/childPage/qukuan.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course-newerJc',
    name: 'newerJc',
    component: () =>
      import(/* webpackChunkName: "newerJc" */ './views/Course/childPage/newerJC.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course-jszc',
    name: 'jszc',
    component: () => import(/* webpackChunkName: "jszc" */ './views/Course/childPage/jszc.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course-wfjc',
    name: 'wfjc',
    component: () => import(/* webpackChunkName: "wfjc" */ './views/Course/childPage/wfjc.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course-contact',
    name: 'contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ './views/Course/childPage/contact.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course-privacy',
    name: 'privacy',
    component: () => import(/* webpackChunkName: "about" */ './views/Course/childPage/privacy.vue'),
    meta: {
      keepAlive: false
    }
  }
]
export let needLoginRoutes = [
  {
    path: '/userinfo',
    name: 'Userinfo',
    component: () => import(/* webpackChunkName: "Userinfo" */ './views/User/Userinfo/index.vue')
  },
  {
    path: '/username',
    name: 'Username',
    component: () => import(/* webpackChunkName: "Username" */ './views/User/Username/index.vue')
  },
  {
    path: '/useravator',
    name: 'Useravator',
    component: () =>
      import(/* webpackChunkName: "Useravator" */ './views/User/Useravator/index.vue')
  },
  {
    path: '/bank-charge',
    name: 'bank-charges',
    component: () => import(/* webpackChunkName: "bank-charge" */ './views/BankCharge/index.vue')
  },
  {
    path: '/bank-savings',
    name: 'bank-savings',
    component: () => import(/* webpackChunkName: "bank-savings" */ './views/BankSavings/index.vue')
  },
  {
    path: '/safeCenter',
    name: 'safeCenter',
    component: () =>
      import(/* webpackChunkName: "SafeCenter" */ './views/User/SafeCenter/SafeCenter.vue')
  },
  {
    path: '/balance',
    name: 'balance',
    component: () => import(/* webpackChunkName: "Balance" */ './views/User/Balance/Balance.vue')
  },
  {
    path: '/fundsDetail',
    name: 'FundsDetail',
    component: () =>
      import(/* webpackChunkName: "FundsDetail" */ './views/FundsDetail/FundsDetail.vue')
  },
  {
    path: '/balanceRecord',
    name: 'balanceRecord',
    component: () =>
      import(/* webpackChunkName: "BalanceRecord" */ './views/User/BalanceRecord/BalanceRecord.vue')
  },
  {
    path: '/setPassword',
    name: 'setPassword',
    component: () =>
      import(/* webpackChunkName: "SetPassword" */ './views/User/SetPassword/SetPassword.vue')
  },
  {
    path: '/betDetail',
    name: 'betDetail',
    component: () => import(/* webpackChunkName: "BetDetail" */ './views/BetDetail/BetDetail.vue')
  },
  {
    path: '/edu',
    name: 'edu',
    component: () => import(/* webpackChunkName: "edu" */ './views/User/edu/edu.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/chess-lists',
    name: 'ChessLists',
    component: () => import(/* webpackChunkName: "ChessLists" */ './views/ChessLists/index.vue')
  },
  {
    path: '/siteMail',
    name: 'SiteMail',
    component: () => import(/* webpackChunkName: "SiteMail" */ './views/User/SiteMail/SiteMail.vue')
  },
  {
    path: '/commissionAll',
    name: 'commissionAll',
    component: () =>
      import(/* webpackChunkName: "commissionAll" */ './views/commissionAll/commissionAll.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import(/* webpackChunkName: "team" */ './views/Share/team/team.vue')
  },
  {
    path: '/agent',
    name: 'agent',
    component: () => import(/* webpackChunkName: "agent" */ './views/agent/agent.vue')
  },
  {
    path: '/agentInstructions',
    name: 'agentInstructions',
    component: () => import(/* webpackChunkName: "agentInstructions" */ './views/agent/agentInstructions.vue')
  },
  {
    path: '/ptp',
    name: 'ptp',
    component: () => import(/* webpackChunkName: "ptp" */ './views/agent/ptp.vue')
  },
]
let routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: Index,
    name: 'index',
    meta: {
      keepAlive: true
    },
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/share',
        name: 'share',
        component: Share,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/activity',
        name: 'activity',
        component: Activity,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/user',
        name: 'user',
        component: User,
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/regist',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ './views/login/login.vue')
  },
  {
    path: '/activity-detail',
    name: 'ActivityDetail',
    component: () =>
      import(/* webpackChunkName: "ActivityDetail" */ './views/ActivityDetail/index.vue')
  },
  {
    path: '/customer-service',
    name: 'CustomerService',
    component: () =>
      import(/* webpackChunkName: "CustomerService" */ './views/User/CustomerService/index.vue')
  },
  {
    path: '/mpage',
    name: 'mpage',
    component: () => import(/* webpackChunkName: "mpage" */ './views/mpage/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/User/About/About.vue')
  },
  ...needLoginRoutes,
  ...course_router
]

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  let U_TK = localStorage.getItem('U_TK')
  if (!U_TK) {
    //如果没有token 而且访问的路由需要登入那就到首页
    let needLogin = needLoginRoutes.some(item => {
      return to.path == item.path
    })
    if (needLogin) {
      next('/')
    }
  } else {
    if (to.path == '/login') {
      next('/')
    }
  }
  next()
})

export default router
