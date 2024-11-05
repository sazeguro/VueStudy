# vue3Ex02

이번 Study 는 Ex02 번의 기본 프레임을 그대로 copy 한후 axios 를 추가한 예제를 만들어 볼꺼다
axios 가 request 나 response 의 interceptors 구성하기가 편하다고 해서 해보는거다 

## Axios
아래 명령으로 axios 설치하고
```
npm install --save axios
```

axios 로 사용할 rest api 들은 한데 모아서 정리하기 쉽게 구성하고 처리 로직은 각 page 에서 .then(res => {}) 형태로 사용한다.

## 메뉴 그룹

Navigator Menu 도 내용을 따로 Data 로 저장하여 list group 을 사용하여 로직 처리로 그룹으로 묶어서 처리