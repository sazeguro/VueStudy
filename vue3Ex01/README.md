# vue3Ex01
먼저 [vue.js 공식 한글 홈페이지](https://ko.vuejs.org/)의 가이드에 따라 프로젝트를 만든다

> npm create vue@latest
```
√ Project name: ... vue3Ex01
√ Package name: ... vue3ex01
√ Add TypeScript? ... *No* / Yes
√ Add JSX Support? ... *No* / Yes
√ Add Vue Router for Single Page Application development? ... No / *Yes*
√ Add Pinia for state management? ... No / *Yes*
√ Add Vitest for Unit Testing? ... *No* / Yes
√ Add an End-to-End Testing Solution? » *No*
√ Add ESLint for code quality? ... No / *Yes*
√ Add Prettier for code formatting? ... No / *Yes*
√ Add Vue DevTools 7 extension for debugging? (experimental) ... *No* / Yes
```

위의 선택 다되고 생성되면 아래처럼 다음에 할 일을 보여준다
```
cd vue3Ex01
npm install
npm run format
npm run dev
```

## UI Component 추가 

UI Component 는 Vuetify 사용하는걸로...
```
npm i vuetify
npm install @mdi/font -D
```
이거 설명은 vuetifyjs.com 에서 참고하시라

## 기능 구현

음.. 첫번째로는 로그인 화면 정도가 적당할 것 같구만..

로그인 화면과 메인화면이 분리되고 로그인 된 후에만 메인화면의 메뉴를 클릭해서 볼 수 있게끔 기본적인 구조만 구현

로그인 정보는 sessionStore 에 저장하고 권한업는 메뉴에 접근시 무조건 로그아웃해서 로그인화면으로 돌리도록 구성해본다.