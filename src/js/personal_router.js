export default [
    {
        path: '/',
        name: 'personalHome',
        component:  () => import(/* webpackChunkName: "jc" */ '../views/PersonalCenter/subViews/PersonalHome/PersonalHome.vue'),
        meta: {
            getUserInfo: false,
            footShow: true
        }
    },
    {
        path: 'edu',
        name: 'personalHome',
        component:  () => import(/* webpackChunkName: "jc" */ '../views/PersonalCenter/subViews/edu.vue'),
        meta: {
            getUserInfo: false,
            footShow: false
        }
    },
  ]