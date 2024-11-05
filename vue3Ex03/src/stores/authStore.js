import { defineStore } from 'pinia'
import { router } from '@/router'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        userInfo: 'xxxx',
        isLogin: false,
        returnUrl: null,
    }),
    actions: {
        async login(uid,pwd){
            try{
                if(uid!=null && pwd!=null){
                    this.userInfo = {'apikey':'abcedfg','apitype':'barerer'}
                    sessionStorage.setItem('userInfo',JSON.stringify(this.userInfo))
                    this.isLogin = true
                }
                router.push('/')
            }
            catch(error){
                console.log(error)
            }
        },
        logout(){
            this.userInfo = null
            sessionStorage.removeItem('userInfo')
            this.isLogin = false
            this.returnUrl = null
            router.push('/auth/login')
        }
    },
})