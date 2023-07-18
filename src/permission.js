import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { isRelogin } from '@/utils/request'
import { setToken } from './utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect', '/bind', '/register']
// const whiteList = ['/system']
let oneRun = true
let key = 1;
router.beforeEach((to, from, next) => {
  
  // if(oneRun){
  //     // oneRun = false
  //     key++;
  //     console.log(key,'走的次数')
  //     store.dispatch('GenerateRoutes').then(accessRoutes => {
  //       console.log(accessRoutes,'accessRoutes')
  //       // 根据roles权限生成可访问的路由表
  //       router.addRoutes(accessRoutes) // 动态添加可访问路由表
  //       console.log(router.addRoutes(accessRoutes),'router.addRoutes(accessRoutes)')
  //       // router.replace(to)
  //       next() // hack方法 确保addRoutes已完成
  //     })  
  // }
  // ========================
  // TODO:  下面是动态路由是否获取的逻辑判断,有实际接口再放开
  if (getToken()) {
    console.log(to.path)
    if(store.state.permission.routes.length) {
      next()
    } else {
      store.dispatch('GenerateRoutes').then(accessRoutes => {
        // console.log(accessRoutes,'accessRoutes')
        // 根据roles权限生成可访问的路由表
        router.addRoutes(accessRoutes) // 动态添加可访问路由表
        console.log(router.options.routes,'router.addRoutes(accessRoutes)')
        // router.replace(to)
        
        next({
          ...to,
          replace: true
        }) // hack方法 确保addRoutes已完成
      })
    }
    to.meta.title && store.dispatch('settings/setTitle', to.meta.title)
    
    /* has token*/
    // if (to.path === '/index') {
    //   console.log('登录熊她那个')
    //   next({ path: '/' })
    //   NProgress.done()
    // } else {
    //   if (store.getters.roles.length === 0) {
    //     isRelogin.show = true
    //     // 判断当前用户是否已拉取完user_info信息
    //     store.dispatch('GenerateRoutes').then(accessRoutes => {
    //       console.log(accessRoutes)
    //       // 根据roles权限生成可访问的路由表
    //       router.addRoutes(accessRoutes) // 动态添加可访问路由表
    //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
    //     })
    //   } else {
    //     next()
    //   }
    // }
  } else {
    console.log('没有token')
   
    store.dispatch('Login').then((res)=>{
      
    })
    NProgress.done()
    // 没有token
    // if (whiteList.indexOf(to.path) !== -1) {
    //   // 在免登录白名单，直接进入
    //   next()
    // } else {
    //   next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
    //   NProgress.done()
    // }
  }
})

router.afterEach(() => {
  NProgress.done()
})
