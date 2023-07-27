import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import EducaView from '../views/EducaView.vue'
import ContatoView from '../views/ContatoView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component:  HomeView,
  },
  {
    path: '/sobre',
    name: 'sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SobreView.vue')
  },
  {
    path: '/educa',
    name: 'educa',
    component: EducaView
  },
  {
    path: '/projetos',
    name: 'projetos',
    component: ProjetosView
  },
  {
    path: '/contato',
    name: 'contato',
    component: ContatoView
  },
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
