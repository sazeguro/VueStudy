import { createRouter, createWebHistory } from 'vue-router'
// import { useAuthStore } from '@/stores/authStore'
import authRoutes from './authRoute'
import chartRoutes from './chartRoute'
import Mainlayout from '@/views/layouts/MainLayout.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Mainlayout,
      children:[
        {path: '', redirect: '/fetchdt'},
        {path: 'fetchdt', component: () => import('@/views/contents/FetchDataTable.vue')},
        {path: 'fetchdi', component: () => import('@/views/contents/FetchDataIter.vue')},
        {path: 'axiosdt', component: () => import('@/views/contents/AxiosDataTable.vue')},
        {path: 'axiosis', component: () => import('@/views/contents/AxiosInfinite.vue')},
      ]
    },
    { ...authRoutes },
    { ...chartRoutes },
    // catch all redirect to home page
		{ path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

// router.beforeEach(async (to) => {
//     // redirect to login page if not logged in and trying to access a restricted page
//     const publicPages = ['/auth','/auth/login','/auth/findpwd']
//     const authRequired = !publicPages.includes(to.path)
//     const authStore = useAuthStore()


// 		if (authRequired && !authStore.isLogin) {
//         authStore.returnUrl = to.fullPath
//         authStore.logout()
//     }
// })

// export default router
