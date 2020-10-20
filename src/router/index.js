import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 阻止重复点击报错(push)
const originalpush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalpush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // 目标路由地址
  const antdV = window.localStorage.getItem('antdV')
  if (to.path !== '/login') {
    if (antdV) {
      // 已经登录
      next()
    } else {
      // 未登录
      next('/login')
    }
  } else {
    if (antdV) {
      if (to.path !== '/login') {
        next()
      } else {
        next({ path: '/dashboard/analysis' })
      }
    } else {
      next()
    }
    // 正常放心
    next()
  }
})

export default router
