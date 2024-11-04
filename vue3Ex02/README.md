# vue3Ex02

이번 Study 는 Ex01 번의 기본 프레임을 그대로 copy 한후 rest server 에 접속하여 data 를 가져와서 화면에 출력하는 기능

## Data Fetch

Vue.js 3 에서 기본으로 사용할 수 있는 fetch 를 사용하여 https://jsonplaceholder.typicode.com/ 에 있는 data 를 가져온다. 

## 목록 출력

### DataTable 사용

vuetify 3 의 datatable 기본기능을 이용하여 화면에 출력해주고 아래쪽에 more 버튼으로 기존 가져온 data 에 append 하는 방식으로 scroll 해서 보여지도록 구현한다

### Infinite scroller 사용

이건 위에꺼 기능을 vuetify3 에서 잘 구현해놓은 컴포넌트다. 단, table 의 header 고정이 안된다. 어디 착한 고수가 해놓았을 수도 있는데.. 나는 모르겠네..