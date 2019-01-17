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
          path: '/first',
          name: 'first',
          component: () => import(/* webpackChunkName: "about" */ './components/main/routeView/first.vue')
        },
        {
          path: '/second',
          name: 'second',
          component: () => import(/* webpackChunkName: "about" */ './components/main/routeView/second.vue')
        },
        {
          path: '/third',
          name: 'third',
          component: () => import(/* webpackChunkName: "about" */ './components/main/routeView/third.vue')
        },
        {
          path: '/forth',
          name: 'forth',
          component: () => import(/* webpackChunkName: "about" */ './components/main/routeView/forth.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
