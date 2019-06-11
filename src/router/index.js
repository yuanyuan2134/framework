import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
 
export const syncRouterMap = [ //同步路由表
  {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/views/HelloWorld')
    }
]  
export const asyncRouterMap = [  //异步路由表

] 

export default new Router({
  mode: 'history', 
  scrollBehavior: () => ({ y: 0 }),
  routes: syncRouterMap
})

