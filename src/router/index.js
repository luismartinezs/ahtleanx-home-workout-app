import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home.vue')
const Workout = () => import('@/views/Workout.vue')
const CompletedWorkout = () => import('@/views/CompletedWorkout.vue')
const Contact = () => import('@/views/Contact.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/workout/:day/complete',
    name: 'CompletedWorkout',
    component: CompletedWorkout
  },
  {
    path: '/workout/:day',
    name: 'Workout',
    component: Workout
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '*',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
