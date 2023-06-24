// Literal Types 2가지 : 특정 글자나 숫자만 가질 수 있게 타입에 제한을 두는 것.
// (1) String Literal Types 문자열 리터럴 타입
type Food = 'rice' | 'noodle' | 'meat'; // 허용한 3개의 문자열 외의 다른 문자열 사용하면 에러
const myFood1: Food = 'rice';
const myFood2: Food = 'aaa'; // Error: Type 'aaa' is not assignable to type 'Food'.

// (2) Numeric Literal Types 숫자형 리터럴 타입
type Grade = 1 | 2 | 3; //허용한 숫자 외에 다른 숫자를 사용하게 되면 에러 발생
const student1: Grade = 1;
const student2: Grade = 5; //Error

//_________________________________________________________
//타입스크립트는 변수 선언시 const, let 사용
const userName1 = 'Bob'; // 어차피 못바꾸므로 타입이 그냥 'Bob'임. 정해진 스트링 타입(문자열 Literal Types)
let userName2: string | number = 'Tom'; // string타입
userName2 = 3;

// 타입 만들기, 유니언타입 사용하기 (|)
type Job = 'police' | 'developer' | 'teacher'; //문자형 리터럴 타입
interface User5 {
  name: string;
  job: Job;
}
const user5: User5 = {
  name: 'Bob',
  job: 'developer',
};
interface HighSchoolStudent {
  name: number | string;
  grade: 1 | 2 | 3;
}

// Union Types(식별가능한 유니온타입: |(or)를 유니온(합집합)타입이라고 부름. 동일한 속성의 타입(name)을 다르게 해서 구분가능)_____________________________
interface Car4 {
  name: 'car';
  color: string;
  start(): void;
}
interface Mobile4 {
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
function getGift(gift: Car4 | Mobile4) {
  // 식별가능한 유니온 타입
  console.log(gift.color);
  if (gift.name === 'car') {
    // gift.name으로 인터페이스 구분. 검사해야할 사항 많아지면 switch문 사용하기
    gift.start();
  } else {
    gift.call();
  }
}

// Intersection Types (교차타입, &(and), 여러 타입을 합쳐서 사용, interface 합치기)________________
interface Car5 {
  name: string;
  start(): void;
}
interface Toy5 {
  name: string;
  color: string;
  price: number;
}
const toyCar: Toy5 & Car5 = {
  // 두개의 인터페이스 특징 다 넣기. 속성 하나라도 안쓰면 에러 발생
  name: '타요',
  start() {},
  color: 'blue',
  price: 1000,
};
// 여러개의 타입을 하나로 합쳐 필요한 모든 기능을 가진 하나의 타입을 만드는 것.
