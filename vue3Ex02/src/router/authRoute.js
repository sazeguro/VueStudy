import { Login, FindPasswd } from '@/views/auth'
import Blanklayout from '@/views/layouts/BlankLayout.vue'

export default {
	path: '/auth',
	component: Blanklayout,
	children: [
		{ path: '', redirect: '/auth/login' },
		{ path: 'login', component: Login },
		{ path: 'findpwd', component: FindPasswd },
	],
}
