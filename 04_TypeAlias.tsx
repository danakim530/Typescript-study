// Type Aliases(알리아스) 별칭 : 그냥 인터페이스 말고, 타입 지정을 타입 별칭이라고 함.
// Type키워드를 이용하여 새로운 타입 조합을 만들기
// Union인 타입들이 여러번 사용될 때, 특정한 변수에 담아서 사용하는 느낌(const, let과 비슷)

// 왜 필요한가? Interface와의 차이? (타입 확장 가능/ 불가능 여부)

// string 타입을 사용할 때
const name: string = 'capt';

// 타입 별칭을 사용할 때
type MyName = string;
const name: MyName = 'capt';

// interface 레벨의 복잡한 타입에도 별칭을 부여가능
type Developer = {
  name: string;
  skill: string;
};
