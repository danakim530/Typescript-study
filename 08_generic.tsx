// Generic 

// 예제1) Function에서 제네릭 쓰는법
// 이렇게 파라미터 종류가 다양한 상황에서 사용_____________________________________________
function getSize(arr: number[] | string[] | boolean[] | object[]): number{
    return arr.length;
}
const arr1 = [1,2,3];
getSize(arr1); //3

const arr2= ['a','b','c']
getSize(arr2); //3

const arr3= [false, true, true]
getSize(arr3); //3

const arr4 = [{}, {}, {name: 'Tim'}];
getSize(arr4); //3

// Generic 사용법 (T 이름은 바꿔도 됨)__________________________________________
function getSize2<T>(arr: T[]): number{ //배열정도만 설정
    return arr.length;
}
const arr5 = [1,2,3];
getSize2<number | string>(arr1); //3 여기 기입안해도 사실 무슨 타입인지 알고있긴함

const arr6= ['a','b','c']
getSize2<string>(arr2); //3

//예제2) Interface에서 제네릭 쓰는법__________________________________________
interface Mobile3<T>{
    name:string;
    price: number;
    option:T;
}
const m1: Mobile3<{color:string; coupon:boolean}>={
    name:'s21',
    price: 1000,
    option:{
        color:'red',
        coupon:false
    },
}
const m2: Mobile3<string>={
    name:'s21',
    price: 1000,
    option:'good',
}

//예제3) 객체에서 제네릭 쓰는법_________________________________________________
interface User{
    name: string;
    age: number;
}
interface Car{
    name: string;
    color: string;
}
interface Book{
    price: number;
}
const user:User = {name: 'a', age:10};
const car:Car = {name: 'bmw', color: 'red'}
const book : Book = {price:3000};

// book은 name이 없어서 사용안됨 
// 에러 발생 : function showName<T>(data:T):string{
function showName<T extends {name:string}>(data:T):string{ // T타입이 올건데 모두가 name:string 있도록 확장 
    return data.name; //객체의 name프로퍼티 리턴
}
showName(user);
showName(car);
//showName(book); name이 없으므로 에러남. 그래도 function에서는 에러 안나니까..!