import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
Vue.use(Router)
 
export const syncRouterMap = [ //同步路由表
  /*{
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/views/HelloWorld')
  },*/
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    //redirect: '/login',
    redirect: '/shop/decoration'
  }
]  
export const asyncRouterMap = [  //异步路由表
	{
		path: '/shop',
    component: Layout,
    redirect: {
      name: 'shopDecoration'
    },
    name: 'shopManage',
    meta: {
      roles: ['shop'],
      title: '店铺管理',
      icon: 'shop'
    },
    children: [
    	{
        path: 'decoration',
        component: () => import('@/views/shop/decoration'),
        name: 'shopDecoration',
        meta: { title: 'demo页', noCache: true }
      },
    ]
	}
] 

export default new Router({
  mode: 'history', 
  scrollBehavior: () => ({ y: 0 }),
  routes: syncRouterMap
})

