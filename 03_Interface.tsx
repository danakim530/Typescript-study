// TS에서 타입을 지정하는 방법 2가지
// (1) 타입 별칭(TypeAlias)
// (2) 인터페이스(Interface)

// 이렇게 하면 에러남
// let user: object;
// user = {
//   name: 'xx',
//   age: 30,
// };
// console.log(user.name) 여기 에러남. object에 특정 속성값에 대한 타입정보가 없어서
// -> interface 사용해야 함 : Object인데 안에 요소 하나하나 타입 지정해야 할 때!

// interface : Type 묶음

// 예제1)______________________________________________________________
// type과 interface의 차이?
// 둘 다 객체의 타입을 정의하는 방법. 대부분은 확장성이 좋은 interface 사용을 권장. 타입이 심플하거나, 절대 변경되지 않는 경우 type을 사용하여 객체의 타입을 정의하기도 함. 확장해야하는 경우 interface는 extends, type은 &연산자를 사용.
type Score = 'A' | 'B' | 'C' | 'F';
interface User {
  name: string;
  age: number;
  gender?: string; //있어도 되고 없어도 되는 속성. 물음표 없으면 에러남.
  readonly birthYear: number; // 읽기 전용이라, 이후 수정 불가
  // 1? : string;
  // 2? : string;
  // 3? : string;
  // 4? : string; 이렇게 하면 너무 많으니까
  [grade: number]: string; // 여러개의 프로퍼티 가져올 수 있다는 뜻
  // [testGrade: number]: Score; 이렇게 하면 Score에 있는 문자만 입력 가능
}
let user: User = {
  name: 'xx',
  age: 30,
  birthYear: 2000,
  1: 'A',
  2: 'B',
};
user.age = 10;
user.gender = 'male';
// user.birthYear = 1990; readonly라서 에러남. 수정 불가

// 예제2)______________________________________________________________
interface Add {
  (num1: number, num2: number): number; // 리턴값을 밖에 적어주기
}
const add2: Add = function (x, y) {
  return x + y;
};
add2(10, 20);

// 예제3)______________________________________________________________
interface IsAdult {
  (age: number): boolean; // 리턴값을 밖에 적어주기
}
const abc: IsAdult = (age) => {
  return age > 19; //true or false 반환
};
abc(33); //true

// Implements__________________________________________________________
interface Car {
  color: string;
  wheels: number;
  start(): void;
}
interface Benz extends Car {
  door: number;
  stop(): void;
}
interface Toy {
  name: string;
}
interface ToyCar extends Car, Toy {
  //두개 추가도 가능
  price: number;
}
const benz: Benz = {
  //car속성도 모두 입력해야 함
  color: 'black',
  wheels: 4,
  start() {},
  door: 5,
  stop() {
    console.log('stop');
  },
};
class Bmw implements Car {
  //Car의 속성값을 모두 입력해야 함
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start(): void {
    console.log('go...');
  }
}

const bbb = new Bmw('green');
console.log(bbb);
bbb.start();
