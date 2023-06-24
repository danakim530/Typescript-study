// ES6의 클래스가 익숙하다는 가정하에 수업
// .... 듣다 말았음. 클래스 먼저 공부하고 다시 듣기 

// 예제1
class Car {
  color: String; // 미리 선언해야 함
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log('start');
  }
}
const bmw = new Car('red');

// 예제2
class Car2 {
  // color: String; 여기 주석처리
  constructor(public color: string) {
    // public or readonly 쓰기
    this.color = color;
  }
  start() {
    console.log('start');
  }
}
const bmw2 = new Car('red');

// 접근 제한자(Access modifier) - public, private, protected