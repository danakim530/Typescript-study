// 타입 스크립트의 기본 타입
let car: string = 'bmw'; // 사실 :string 안써도 타입스크립트가 타입 추론을 통해 스트링인거 안다

let age: number = 30;
let isAdult: boolean = true;

// 아래 두 개 같은 표현임
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

// week1.push(3); 스트링 넣어야 해서 타입 에러남

// 튜플 (Tuple)___________________________
let b: [string, number];
b = ['z', 1];
// b = [1, 'z']; 에러남

b[0].toLowerCase();
// b[1].toLowerCase(); 에러남

// void(아무 것도 반환하지 않은 함수)____________________________
function sayHello(): void {
  console.log('hello');
}

//never(항상 에러 반환 Or 영원히 끝나지 않는 함수)____________________________
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    //do something
  }
}

// enum 타입 (자바스크립트에는 없는 타입임, 비슷한 값끼리 묶어진 것)
// (indexing해줌. 수동으로 값을 주지 않으면 자동으로 0부터 값이 할당됨, 마우스 올리면 확인 가능)
// Object vs enum : Object는 코드 내에서 새로운 속성을 자유롭게 추가 가능, enum은 선언이후 변경 불가 / Object는 JS의 모든 타입 가능, enum은 문자열, 숫자만 가능
enum Os {
  Window,
  Ios,
  Android,
}
console.log(Os['Ios']); //1

// 숫자가 이어서 할당됨
enum Os2 {
  Window2 = 10,
  Ios2 = 3,
  Android2,
}
console.log(Os2['Ios2']); //3

//문자열도 할당 가능
enum Os3 {
  Window3 = 'win',
  Ios3 = 'ios',
  Android3 = 'and',
}
let myOs: Os3; //타입을 Os3로 설정
myOs = Os3.Window3; // myOs에 이제 enum특정값 입력 가능

// null, undefined____________________________________
let aa: null = null;
let bb: undefined = undefined;
