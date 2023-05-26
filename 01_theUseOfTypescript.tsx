// Youtube 코딩앙마 TypeScript 강좌
// 자바스크립트 : 동적언어 (변수 선언시 타입 지정X)
// 타입스크립트 : 정적언어 (변수 선언시 타입 지정O) -> 해당 타입이 아닌 데이터를 넘기려고 하면 타입스트립트 컴파일러가 에러를 뱉음
// Browser can't execute TS so TS is compiled to JS
// TS(확장자 .ts or .tsx) = Compiler
// TS 쓰려면, install node.js(npm 사용 위함) + sudo npm install -g typescript 설치

// 예제1)___________________________________
function add(num1: number, num2: number) {
  console.log(num1 + num2);
}
add(1, 3);
// add();
// add(1);
// add(1, 2, 3);
// add('hello', 'world');

// 예제2)___________________________________
function showItems(arr: number[]) {
  //숫자의 배열이므로
  arr.forEach((item) => {
    console.log(item);
  });
}
showItems([1, 2, 3]);
// showItems(1, 2, 3); 안됨. 배열로 보내야함.
