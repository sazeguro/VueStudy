var jsonUrl = "https://jsonplaceholder.typicode.com/"

// /posts	100 posts
// /comments	500 comments , filtering : /comments?postId=2
// /albums	100 albums
// /photos	5000 photos , filtering : /photos?albumId=2
// /todos	200 todos , filtering : /todos?userId=2
// /users	10 users

export default{
    fetchGet(url){
        return fetch(jsonUrl+url)
        .then(response=>response.json())
    },
    fetchPost(url,params){
        const option = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(params)
        }
    
        return fetch(jsonUrl+url, option)
        .then(response=>response.json())
    }
}