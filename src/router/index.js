import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/board',
    name: 'board',
    component: () => import('../views/Board.vue')
  },
  {
    path: '/board/view',
    name: 'board-view',
    component: () => import('../views/BoardView.vue')
  },
  {
    path: '/board/write',
    name: 'board-write',
    component: () => import('../views/BoardWrite.vue')
  },
  {
    path: '/board/modify',
    name: 'board-modify',
    component: () => import('../views/BoardModify.vue')
  },
  //여기까지가 김민태 페이지 라우팅
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/feeds',
    name: 'feed',
    component: () => import('../views/Feeds.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/Todo.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
