# vue3Ex02

이번 Study 는 Ex01 번의 기본 프레임을 그대로 copy 한후 rest server 에 접속하여 data 를 가져와서 화면에 출력하는 기능

## Data Fetch

Vue.js 3 에서 기본으로 사용할 수 있는 fetch 를 사용하여 https://jsonplaceholder.typicode.com/ 에 있는 data 를 가져온다. 
다음 study 에서는 axios 사용하는 예제를 만들어 볼까 한다.

## 목록 출력

### Data table 사용

vuetify 3 의 datatable 기본기능을 이용하여 화면에 출력해주고 아래쪽에 more 버튼으로 기존 가져온 data 에 append 하는 방식으로 scroll 해서 보여지도록 구현한다

### Data iterator 사용

card type 의 목록으로 위와 같이 more 를 통해서 추가하는 방식이다. header 가 없이 그냥 목록을 출력하는 기능으로 모바일에서 목록보기에 많이 쓰는 거다.