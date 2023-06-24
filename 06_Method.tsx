// 함수 예제들

// return되는 값 없으므로 void_____________________________
function add(num1: number, num2: number): void {
  // return num1 + num2
  console.log(num1 + num2);
}

function isAult(age: number): boolean {
  return age > 19;
}

// 매개변수도 optional 가능_____________________________
function hello(name?: string) {
  return `Hello, ${name || 'world'}`;
}
const result = hello(); // 선택적 매개변수 : name이 있어도 되고 없어도 됨
const result2 = hello('sam');

// JS에서 매개변수에 default값 줄 수 있음_____________________________
function hello2(name = 'world') {
  return `Hello, ${name}`;
}

// name보다 age가 먼저오면 에러. Optional한 값은 항상 뒤에 있어야 함_____________________________
function hello3(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}, You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}
console.log(hello3('sam'));
console.log(hello3('sam', 30));

// 굳이 맨 앞에 Optional한 걸 두고 싶다면, undefined 사용하면 에러 안남_____________________________
function hello4(age: number | undefined, name: string): string {
  if (age !== undefined) {
    return `Hello, ${name}, You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}
console.log(hello4(undefined, 'sam'));

// rest파라미터 - 나머지 매개변수의 타입 작성법_____________________________
function add3(...nums: number[]) {
  // rest파라미터 - 개수가 바뀌어도 됨, 전달받은 매개변수를 배열로 기입하므로, 타입은 number[]
  return nums.reduce((result, num) => result + num, 0);
}
add3(1, 2, 3);
add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// this의 타입 : 함수 첫번째 매개변수 자리에 this와 타입 입력_____________________________
interface User2 {
  name: string;
}
const Kim: User2 = { name: 'sam' };
function showName(this: User2, age: number, gender: 'm' | 'f') {
  console.log(this.name, age, gender);
}
const a = showName.bind(Kim); // bind() : 함수의 this 값을 지정하는 메서드입니다. 함수를 호출할 때 bind()를 사용하여 this가 바인딩될 객체를 지정할 수 있음. 이때 bind()는 원본 함수를 변경하지 않으며, 바인딩된 함수를 반환

a(30, 'm');

//함수 오버로드 : 같은 이름의 함수 but 전달받은 매개변수 개수나 타입에 따라서 다른 동작을 하게 함_____________________________
interface User3 {
  name3: string;
  age3: number;
}
function join(name3: string, age: number): User3; // 함수 오버로드는 위에 한 줄 더 추가해주면 됨
function join(name3: string, age: string): string;
function join(name3: string, age3: number | string): User3 | string {
  // 타입 두개씩 설정 가능
  if (typeof age3 === 'number') {
    return {
      name3,
      age3,
    };
  } else {
    return '나이는 숫자로 입력해주세요.';
  }
}
const dana: User3 = join('dana', 30); // 여기 에러나다가 71줄 추가하니까 사라짐. 함수 overload. 30이 숫자라서 User3를 반환한다고 판단.
const jane: string = join('Jane', '30'); //여기 에러나다가 72줄 추가하니까 사라짐.
