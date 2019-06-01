import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Home/index.vue'
import Home from './views/Home/Home.vue'
import Course from './views/Course/Course.vue'
import Activity from './views/Activity/Activity.vue'
import User from './views/User/User.vue'
import store from './store'
Vue.use(Router)

let course_router = [
  {
    path: '/',
    name: 'jc',
    component: () => import(/* webpackChunkName: "jc" */ './views/Course/Course.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course/ck',
    name: 'ck',
    component: () => import(/* webpackChunkName: "ck" */ './views/Course/childPage/cunkuan.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course/qk',
    name: 'qk',
    component: () => import(/* webpackChunkName: "qk" */ './views/Course/childPage/qukuan.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course/newerJc',
    name: 'newerJc',
    component: () =>
      import(/* webpackChunkName: "newerJc" */ './views/Course/childPage/newerJC.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course/jszc',
    name: 'jszc',
    component: () => import(/* webpackChunkName: "jszc" */ './views/Course/childPage/jszc.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course/wfjc',
    name: 'wfjc',
    component: () => import(/* webpackChunkName: "wfjc" */ './views/Course/childPage/wfjc.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course/contact',
    name: 'contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ './views/Course/childPage/contact.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/course/privacy',
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
    component: () => import(/* webpackChunkName: "Userinfo" */ './views/Userinfo/index.vue')
  },
  {
    path: '/username',
    name: 'Username',
    component: () => import(/* webpackChunkName: "Username" */ './views/Username/index.vue')
  },
  {
    path: '/useravator',
    name: 'Useravator',
    component: () => import(/* webpackChunkName: "Useravator" */ './views/Useravator/index.vue')
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
      import(/* webpackChunkName: "SafeCenter" */ './views/SafeCenter/SafeCenter.vue')
  },
  {
    path: '/balance',
    name: 'balance',
    component: () => import(/* webpackChunkName: "Balance" */ './views/Balance/Balance.vue')
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
      import(/* webpackChunkName: "BalanceRecord" */ './views/BalanceRecord/BalanceRecord.vue')
  },
  {
    path: '/setPassword',
    name: 'setPassword',
    component: () =>
      import(/* webpackChunkName: "SetPassword" */ './views/SetPassword/SetPassword.vue')
  },
  {
    path: '/betDetail',
    name: 'betDetail',
    component: () => import(/* webpackChunkName: "BetDetail" */ './views/BetDetail/BetDetail.vue')
  },
  {
    path: '/edu',
    name: 'edu',
    component: () => import(/* webpackChunkName: "withdrawal" */ './views/edu/edu.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/chess-lists',
    name: 'ChessLists',
    component: () => import(/* webpackChunkName: "ChessLists" */ './views/ChessLists/index.vue')
  }
]
let routes = [
  {
    path: '/',
    component: Index,
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
        path: '/course',
        name: 'Course',
        component: Course,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/activity',
        name: 'Activity',
        component: Activity,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/user',
        name: 'User',
        component: User,
        meta: {
          keepAlive: true
        }
      }
    ]
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
      import(/* webpackChunkName: "CustomerService" */ './views/CustomerService/index.vue')
  },
  {
    path: '/mpage',
    name: 'mpage',
    component: () => import(/* webpackChunkName: "mpage" */ './views/mpage/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ './views/About/About.vue')
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
  }
  next()
})

export default router
