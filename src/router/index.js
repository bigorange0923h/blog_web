import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Archves from '../views/Archves.vue'
import Blog from '../views/Blog.vue'
import MD from '../views/MD.vue'
import Login from '../views/admin/login.vue'
import Index from '../views/admin/Index.vue'
import Admin from '../views/admin/Admin.vue'

const routes = [
  {
    path: '/',
    redirect: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/archves',
    name: 'Archves',
    component: Archves
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/md',
    name: 'MD',
    component: MD
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin/index',
    name: 'index',
    component: Index
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
