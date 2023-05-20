// Literal Types________________
//타입스크립트는 변수 선언시 const, let 사용
const userName1 = 'Bob';
let userName2: string | number = 'Tom';
userName2 = 3;

type Job = 'police' | 'developer' | 'teacher'; //문자형 리터럴 타입

interface User {
  name: string;
  job: 'developer';
}

interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3; // 숫자형 리터럴 타입
}

// Union Types(식별가능한 유니온타입: |(or)를 유니온(합집합)타입이라고 부름. 동일한 속성의 타입(name)을 다르게 해서 구분가능)_____________________________
interface Car {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}
// 잘못 작성한 코드
// function getGift(gift: Car | Mobile) {
//   console.log(gift.color); // O. 이 부분은 문제가 없다. 둘 다 color가 있기 때문에
//   gift.start(); // X. Error 발생. Mobile에는 start함수가 없기 때문에, 해당 메서드를 사용할 수 없음
// }

// 올바르게 수정한 코드
function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  if (gift.name == 'car') {
    gift.start();
  } else {
    gift.call();
  }
}
// Intersection Types (교차타입, &(and), 여러 타입을 합쳐서 사용, interface 합치기)________________
interface Car5 {
  name2: string;
  start(): void;
}
interface Toy5 {
  name2: string;
  color: string;
  price: number;
}
const toyCar: Toy5 & Car5 = {
  //속성 하나라도 안쓰면 에러 발생
  name2: '타요',
  start() {},
  color: 'blue',
  price: 1000,
};
// 여러개의 타입을 하나로 합쳐 필요한 모든 기능을 가진 하나의 타입을 만드는 것.
