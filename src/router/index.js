import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Workout from '../views/Workout.vue'
import Dev from '@/views/Dev.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dev',
    name: 'Dev',
    component: Dev
  },
  {
    path: '/workout/:day',
    name: 'Workout',
    component: Workout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
