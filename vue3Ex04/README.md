# vue3Ex04

이번 Study 는 Ex03 번의 기본 프레임을 그대로 copy 한후 Chart 를 출력하는 예제를 만들어 본다

MainLayout.vue 의 메뉴 그룹에서 open-strategy 는 multiple, single, list 가 있는데  multiple 은 여러개 그룹을 열 수 있으며 메뉴 닫았다가 다시 열어도 이전상태 그대로 열려있고 single 은 메뉴 그룹에서 하나의 그룹만 펼칠수 있다. 마지막으로 list 는 여러개 그룹을 펼칠수 있지만 메뉴 닫았다가 다시 열면 선택된 그룹을 제외한 그룹의 메뉴는 접혀있다. list 가 기본이다.


## ChartJS 
아래 명령으로 library 설치하고
```
npm i vue-chartjs chart.js
npm install chartjs-plugin-zoom
npm install chartjs-plugin-datalabels --save
npm install chartjs-plugin-annotation
```

실제 예제는 여기 https://vue-chartjs.org/guide/ 공식 사이트 참조하자
 -  여기는 원조 사이트 https://www.chartjs.org/docs/latest/

zoom plugin 은 여기 https://www.chartjs.org/chartjs-plugin-zoom/guide/

ChartDataLabels plugin 은 여기 https://chartjs-plugin-datalabels.netlify.app/guide/
 - 챠트에 라벨 써주는거 편하게 해놓은거

annotation plugin 은 여기 https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/
 - 챠트에 기준선이나 박스, 글자 등을 아무 위치에 놓을수 있게 해놓은거