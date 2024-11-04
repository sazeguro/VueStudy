import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import authRoutes from './authRoute'
import Mainlayout from '@/views/layouts/MainLayout.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Mainlayout,
      children:[
        {path: '', redirect: '/first'},
        {path: 'first', component: () => import('@/views/contents/FirstMenu.vue')},
        {path: 'second', component: () => import('@/views/contents/SecondMenu.vue')},
      ]
    },
    { ...authRoutes },
    // catch all redirect to home page
		{ path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/auth','/auth/login','/auth/findpwd']
    const authRequired = !publicPages.includes(to.path)
    const authStore = useAuthStore()


		if (authRequired && !authStore.isLogin) {
        authStore.returnUrl = to.fullPath
        authStore.logout()
    }
})

// export default router
