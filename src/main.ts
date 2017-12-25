// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TodoApp from './components/TodoApp.vue'
import { RouteViews } from './models'

Vue.use(VueRouter)

const viewNames = ['completed', 'active', '*']
const routes = viewNames.map((view): RouteConfig => ({
  path: '/' + view,
  component: TodoApp,
  props: {
    currentView: view === '*' ? 'all' : view
  }
}))

const router = new VueRouter({
  routes
})
// Vue.config.productionTip = false

/* eslint-disable no-new */
let rooVue = new Vue({
  el: '#app',
  template: '<router-view></router-view>',
  router
  // mixins: [VueRouter],
})
