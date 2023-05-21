// 몇가지 utility를 살펴봄
// keyof
interface User{
    id: number;
    name: string;
    age: number;
    gender : 'm' | 'f'; //키값을 유니온형태로 받기
}
type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender' 쓴 것과 동일
const uk:UserKey ='age' // 설정한 키값 중 하나 넣으면 에러 안남 

// Partial<T> : 프로퍼티를 모두 optional로 바꿔줌. 일부만 사용 가능__________________________________________________
let admin:Partial<User> = {
    id: 1,
    name: 'bob',
}
// 아래 표현과 같음
// interface User{
//     id?: number;
//     name?: string;
//     age?: number;
// }

// Required<T> : 모든 프로퍼티를 모두 필수로!__________________________________________________
let admin2: Required<User>= {
    id:1,
    name:'bob',
    age: 30, 
    gender:'m', // 하나라도 없으면 에러남
}

// Readonly<T>____________________________________________________
let admin3: Readonly<User>={
    id:1,
    name:'bob',
    age: 20,
    gender: 'f',
}
// admin3.id = 3; 수정 불가

// Record<K,T> 키와 타입__________________________________________________
// 예제1>
// 표현1)
interface Score{
    '1': 'A' | 'B' | 'C' | 'D';
    '2': 'A' | 'B' | 'C' | 'D';
    '3': 'A' | 'B' | 'C' | 'D';
    '4': 'A' | 'B' | 'C' | 'D';
}
const score: Score = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
};
// 표현2) Record로 변경
const score2: Record<'1'|'2'|'3'|'4','A' | 'B' | 'C' | 'D'>={
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
}
// 표현3) 학년과 성적을 타입으로 분류하기
type Grade3 = '1'|'2'|'3'|'4';
type Score3 = 'A' | 'B' | 'C' | 'D';
const score3: Record<Grade3, Score3> = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
} 

//예제2>
interface User3{
    id: number;
    name:string;
    age:number;
}
function isValid(user:User){ // 우효한 값이 다 들어왔는지 확인
    const result3: Record<keyof User3, boolean> = { //키 값은 받아오고, false/true로 받을 거니까
        id: user.id>0, // 존재하는지
        name: user.name !== '', //비어있지 않은지
        age: user.age >0,
    }
    return result3;
}

//Pick<T,K> 일부만 가져와서 사용하기________________________________________________
interface User4{
    id:number;
    name:string;
    age:number;
    gender: 'm'|'w';
}
const admin4: Pick<User4, 'id'|'name'> = { // User4에서 id랑 name만 가져와서 사용
    id: 0,
    name: 'bob',
}

//Omit<T,K> 프로퍼티를 제거하고 가져와서 사용하기________________________________________________
interface User5{
    id:number;
    name:string;
    age:number;
    gender: 'm'|'w';
}
const admin5: Omit<User5, 'age'|'gender'> = { // User5에서 age랑 gender 제외하고 가져와서 사용
    id: 0,
    name: 'bob',
}

// Exclude<T1, T2> 타입을 제거하고 가져와서 사용하기(T1 타입들 중에서 T2타입과 겹치는 것을 제외)__________________________________
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; //boolean만 남음 

// NonNullable<Type> Null이나 undefined를 제거
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>; //string과 void만 남음  