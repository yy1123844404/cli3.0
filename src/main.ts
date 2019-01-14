import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios,{ AxiosInstance } from 'axios'

Vue.config.productionTip = false

// 挂载axios
Vue.use(v => {
  v.prototype.$http = axios
})
// 挂载elementUI
Vue.use(ElementUI)
// 在vue上面声明一个 $http
declare module 'Vue/types/vue' {
  interface Vue {
    $http: AxiosInstance
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
