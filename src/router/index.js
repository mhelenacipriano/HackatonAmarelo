import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Informacoes from '../views/Informacoes'
import Acompanhamento from '../views/Acompanhamento'
import Entidade from '../views/Entidade'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Informacoes',
    component: Informacoes
  },
  {
    path: '/Acompanhamento',
    component: Acompanhamento
  },
  {
    path: '/Entidade',
    component: Entidade
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
