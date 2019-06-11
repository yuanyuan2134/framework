// import router from '.'
// import store from '../store'
// import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css'// progress bar style
// import { getToken } from '@/system/auth' // getToken from cookie



// NProgress.configure({ showSpinner: false })// NProgress Configuration

// // permission judge function
// function hasPermission(roles, permissionRoles) {
//   if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
//   if (!permissionRoles) return true
//   return roles.some(role => permissionRoles.indexOf(role) >= 0)
// }

// const whiteList = ['/login', '/auth-redirect']// no redirect whitelist

// router.beforeEach((to, from, next) => {
//   NProgress.start() // start progress bar
//   if (getToken()/*true*/) { // determine if there has token
//     /* has token*/
//     if (to.path === '/login') {
//       next({ path: '/' })
//       NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
//     } else {
//       console.log(store);
//       if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
//         // store.dispatch('GetUserInfo').then(res => { // 拉取user_info
//           // const roles = res.data.data.roles // note: roles must be a array! such as: ['editor','develop']
//           const roles = ['shop'] // note: roles must be a array! such as: ['editor','develop']
//           store.commit('SET_ROLES', roles)
//           store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
//             // router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//             //saas用户 创建门店路由隐藏 start
//               if(roles[0] == 'shop'){
//                 // store.dispatch('GetUserId').then(() => {
//                 //   let uniacid = store.getters.uniacid
//                 //   if(uniacid > 0){
//                     let routers = store.getters.addRouters
//                     let routeList = routers[0].children
//                     routeList[2].hidden = true
//                   // }
//                 // })
//               }
//               router.addRoutes(store.getters.addRouters)
//             //saas用户 创建门店路由隐藏 end
//             next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//           })
//         // }).catch((err) => {
//         //   store.dispatch('FedLogOut').then(() => {
//         //     Message.error(err || 'Verification failed, please login again')
//         //     next({ path: '/' })
//         //   })
//         // })
//       } else {
//         // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
//         if (hasPermission(store.getters.roles, to.meta.roles)) {
//           next()
//         } else {
//           next({ path: '/401', replace: true, query: { noGoBack: true }})
//         }
//         // 可删 ↑
//       }
//     }
//   } else {
//     /* has no token*/
//     if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//       next()
//     } else {
//       next(`/login`) // 否则全部重定向到登录页
//       NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
//     }
//   }
// })

// router.afterEach(() => {
//   NProgress.done() // finish progress bar
// })