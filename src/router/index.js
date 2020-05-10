import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register.vue'
import Contact from '../components/Contact.vue'

Vue.use(VueRouter)

const routes = [


  {
    path: '/',
    component: Register,
    name: 'Register'

  },
  {
    path: '/contact',
    component: Contact,
    name: 'Contact'

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
