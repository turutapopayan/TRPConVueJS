import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/RutasFavoritas',
    name: 'RutasFavoritas',
    component: () => import('../views/RutasFavoritas.vue')
  },
  {
    path: '/IniciarSesion',
    name: 'IniciarSesion',
    component: () => import('../views/IniciarSesion.vue')
  },
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/NuestraCultura',
    name: 'NuestraCultura',
    component: () => import('../views/NuestraCultura.vue')
  },
  {
    path: '/Registrarme',
    name: 'Registrarme',
    component: () => import('../views/Registrarme.vue')
  },
  {
    path: '/Turismo',
    name: 'Turismo',
    component: () => import('../views/Turismo.vue')
  },
  {
    path: '/VerRutas',
    name: 'VerRutas',
    component: () => import('../views/VerRutas.vue')
  },
  {
    path: '/AdondeQuieresIr',
    name: 'AdondeQuieresIr',
    component: () => import('../views/AdondeQuieresIr.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
