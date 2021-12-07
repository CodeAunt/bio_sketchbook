import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Canvas from '../views/Canvas.vue'
import Plant from '../views/Plant.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: Canvas
  },
  {
    path: '/plant',
    name: 'Plant',
    component: Plant
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
