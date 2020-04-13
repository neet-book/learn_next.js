import { Context } from '@nuxt/types'
import VueRouter, { Route, RawLocation } from 'vue-router/types'
import Vue from 'vue/types'

type next = (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
export default (context: Context): void => {
  const app = context.app
  const router = app.router as VueRouter
  router.beforeEach((to: Route, from: Route, next: next) => {
    if (to.path !== '/loging') return next('/loging')
     console.log(window.sessionStorage.getItem('token'))
    next()
  })
}
