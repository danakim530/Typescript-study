// Literal Types

const userName1 = 'Bob'; // 어차피 못바꾸므로 타입이 그냥 'Bob'임. 정해진 스트링 타입(문자열 Literal Types)
let userName2: string | number = 'Tom'; // string타입
userName2 = 3;

// 타입 만들기, 유니언타입 사용하기 (|)
type Job = 'police' | 'developer' | 'teacher';
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

// Union 유니언 타입 (|)
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

// Intersection Type 교차타입
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
  // 두개의 인터페이스 특징 다 넣기
  name: '타요',
  start() {},
  color: 'blue',
  price: 1000,
};
