import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'homepage',
          component: () => import('./views/homepage.vue')
        },
        {
          path: '/first',
          name: 'first',
          component: () => import('./components/main/routeView/first.vue')
        },
        {
          path: '/second',
          name: 'second',
          component: () => import('./components/main/routeView/second.vue')
        },
        {
          path: '/third',
          name: 'third',
          component: () => import('./components/main/routeView/third.vue')
        },
        {
          path: '/forth',
          name: 'forth',
          component: () => import('./components/main/routeView/forth.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
