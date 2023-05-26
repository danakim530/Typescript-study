// Javascript(동적언어) : 런타임에 타입 결정 / 오류 발견
// (실행 node)
// 예제1)___________________________________
function add(num1, num2) {
  console.log(num1 + num2);
}
add();
add(1);
add(1, 3); // 얘만 정상적으로 돌아감
add(1, 2, 3);
add('hello', 'world');
// 나머지는 에러 나는데도 js는 아무 에러메세지 주지 않음.

// 예제2)___________________________________
function showItems(arr) {
  arr.forEach((item) => {
    console.log(item);
  });
}
showItems([1, 2, 3]);
// showItems(1, 2, 3); 숫자에는 forEach 못 씀. 레퍼런스 에러남. 자바스크립트는 실행시점에 에러 알려줌.

// 결론: Typescript는 정적 언어로 미리 에러 메시지 띄움
