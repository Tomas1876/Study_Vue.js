import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//vue가 vueRouter를 사용한다는 뜻
Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    
    //Home.vue 컴포넌트는 위에서 import 해줘서 이렇게만 써도 된다
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    //여기에 views폴더 밑에 있는 About.vue라는 컴포넌트를 넣어준것(위에서 import 하지 않아서 경로까지 다 써줘야 함)
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
