import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Archves from '../views/Archves.vue'
import Blog from '../views/Blog.vue'


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
