import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'

/*
    axios 인스턴스를 생성합니다.
    생성할때 사용하는 옵션들 (baseURL, timeout, headers 등)은 다음 URL에서 확인할 수 있습니다.
    https://github.com/axios/axios 의 Request Config 챕터 확인
*/
export const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
	// baseURL: '/api',
	//timeout: 1000,
})

/*
    1. 요청 인터셉터를 작성합니다.
    2개의 콜백 함수를 받습니다.

    1) 요청 바로 직전 - 인자값: axios config
    2) 요청 에러 - 인자값: error
*/
api.interceptors.request.use(
	function (config) {
		// 요청 바로 직전
		// axios 설정값에 대해 작성합니다.
		console.log('요청 직전 인터셉터')
		const { userinfo } = useAuthStore()
		const isLoggedIn = !!userinfo?.apikey

		if (isLoggedIn) {
			config.headers.Authorization = `${userinfo.apitype} ${userinfo.apikey}`
		}

		return config
	},
	function (error) {
		// 요청 에러 처리를 작성합니다.
		console.log('요청시 에러 처리')
		return Promise.reject(error)
	},
)

/*
    2. 응답 인터셉터를 작성합니다.
    2개의 콜백 함수를 받습니다.

    1) 응답 작성 - 인자값: http response
    2) 응답 에러 - 인자값: http error
*/
api.interceptors.response.use(
	function (response) {
		/*
        http status가 200인 경우
        응답 바로 직전에 대해 작성합니다. 
        .then() 으로 이어집니다.
    */
		console.log('응답 직전 처리. status 가 200 일때')
		return response
	},

	function (error) {
		/*
        http status가 200이 아닌 경우
        응답 에러 처리를 작성합니다.
        .catch() 으로 이어집니다.    
    */
		console.log(error)
		console.log('응답 status 가 200 이 아닐때 에러 처리')
		const { userinfo, logout } = useAuthStore()
		if (error.response.status == 401 && userinfo) {
			// auto logout if 401 Unauthorized or 403 Forbidden response returned from api
			alert(error.response.data.detail)
			logout()
		}
		if (error.response.status == 403){
			alert(error.response.data.detail)
		}

		return Promise.reject(`${error.response.status} ${error.response.statusText}`)
	},
)

// 생성한 인스턴스를 익스포트 합니다.
//export default instance;
