import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Loading from '../views/Loading.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List,
    children: [
      { path: '/loading', component: Loading },
    ]
  },
  // {
  //   path: '/loading',
  //   name: 'Loading',
  //   component: Loading
  // }
]

const router = new VueRouter({
  routes
})

export default router
