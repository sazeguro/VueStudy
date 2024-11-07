# VueStudy

It's just a personal study.

GitHub [markdown 서식 구문](https://docs.github.com/ko/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)은 여기 참조하자


1. vue3Ex01 - vue3 project 처음 생성하면 나오는거로 로그인 화면 구성
2. vue3Ex02 - rest api 인터페이스에 대해 fetch 를 사용하여 data 를 가져오는 기능과 vuetify3 의 data table 과 iterator 를 사용하여 가져온 data 를 출력하는 화면으로 구성
3. vue3Ex03 - rest api 인터페이스는 axios 를 사용하고 기본적인 interceptor 구성. 메뉴 리소스는 따로 분리처리하고 그룹으로 묶어서 처리
4. vue3Ex04 - 여기서는 ChartJs 사용해서 앞에서 공부한 rest api 로 받은 데이터를 Chart 로 표현하는 예제를 구현해본다.

최종으로 packages 는 아래처럼 하자
```
> npm create vue@latest
> cd <project name>
> npm install
> npm i vuetify
> npm install @mdi/font -D
> npm install --save axios
> npm i vue-chartjs chart.js chartjs-plugin-zoom chartjs-plugin-datalabels
```