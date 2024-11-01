import { createRouter, createWebHistory } from 'vue-router'
import authRoutes from './auth'
import Mainlayout from '@/views/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Mainlayout,
      children:[
        {path: '', redirect: 'first'},
        {path: 'first', component: () => import('@/views/contents/FirstMenu.vue')},
        {path: 'second', component: () => import('@/views/contents/SecondMenu.vue')},
      ]
    },
    { ...authRoutes },
    // catch all redirect to home page
		{ path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
