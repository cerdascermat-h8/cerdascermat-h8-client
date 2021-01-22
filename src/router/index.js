import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainGame from '../views/MainGame'
import RoomGame from '../views/RoomGame'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'MainGamme',
    component: MainGame
  },
  {
    path: '/rooms',
    name: 'roomGame',
    component: RoomGame
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
