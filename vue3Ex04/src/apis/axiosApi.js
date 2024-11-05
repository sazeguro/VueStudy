import { api } from './intercept'

export default {
    postPosts() {
        return api({
                // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성
                url: 'posts',
                method: 'post',
                headers:{
                    'Content-Type': 'multipart/form-data'
                },
                data: {
                    username: 'uid',
                    password: 'upwd'
                }
            })
    },
    getPosts() {
        return api({
                url: '/posts',
                method: 'get'
        })
    },
    getUsers(){
        return api({
            url: '/users',
            method: 'get'
        })
    }
      
}