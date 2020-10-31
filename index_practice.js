//콘솔에 출력 console.log('Hello Worlds');
// 경고 출력 alert("Hello Worlds");

// let, const, var
//변수
//변수를 초기화하거나 생성시에 let 사용
const a = 221; //constant 상수 변경 X final의 역학
let b = a - 5;
console.log(b, a); //print 기능

// 변수 생성은 const를 사용하자, 필요시에만 let 사용하도록!
// Data Types on JS

// String
const what = "김동현";
const img = "🧸"; // 이미지도 가능하다!
console.log(what, img);

// Boolean
const wat = true; // true=1, false=0

// Number
const number = 123;

// float
const f = 13.5;

// Array 리스트처럼 데이터를 저장
// 여러 String을 하나로 묶음
// 규칙을 가짐
const daysOfWeek = ["Mon","Tue","Wen","Thu","Fir","Sat","Sun"];
console.log(daysOfWeek);

// 인덱싱 가능, 0부터 시작
console.log(daysOfWeek[2]); // array의 3번째 요소를 console로 출력

let arr = [1,1.3,"sting",true];
console.log(arr+" 처럼 여러 데이터 타입을 하나의 array로 묶을 수 있습니다.");

// Object
// array와 차이점은 각 value에 이름을 줄 수 있다.
// 내 개인정보를 저정하려면?
// array 작성
const myInfo = ["Kim","24",true,"Seoul"]
console.log(myInfo);
// myInfo에 이름이 뭐였더라?? 아 첫번째 원소였지!
console.log(myInfo[0]);
// 가능하지만 비효율적임
// 그래서 object 사용
// object는 실제 객체를 만드는것이다. label을 저장하고 싶은 data에 주는 것
// python의 딕셔너리 개념
const myInfoObjct = {name:"Kim", age:24, gender:"male", isHandsome:true,
  favMovies: ["Along the gods", "Lord of Ring", "Oldboy"],
  favFood: [
    {name:"Kimchi",fatty:false},
    {name:"Cheeseburger",fatty:true}]
  }
console.log(myInfoObjct);
// 특정 key에 접근하는 방법
console.log(myInfoObjct.gender);

myInfoObjct.gender="female";

console.log(myInfoObjct.gender);

// Const 안에 있는 값을 바꿀 수 있다!
// 하지만 myInfoObjct 자체는 바꿀 수 없음

// 데이터를 정렬하는 방법은 array, object 두가지 방법 존재
// DB에서 가져온 리스트 데이터라면 Array를 사
//object를 array안에 넣을 수 있고
//object안에 object로 구성된 array도 넣을 수 있다.
console.log(myInfoObjct.favFood);
console.log(myInfoObjct.favMovies);

const cafeInfo = {baverage:[{americano:3000, latte:3500, greenTea:4000}],
  name:"Nicobucks", employees:["Kim","Choi","Steve"]}
console.log(cafeInfo);
console.log(cafeInfo.baverage);
console.log(cafeInfo.employees[0]);

// cafeInfo처럼 console.log의 console도 마찬가지로 object이다
// .log는 함수기능
// cosole.log(console); 을 실행하면 어떻게 될까?
console.log(console);

// 브라우저가 가지고 있는 JS는 object안에 넣을 수 있다!!!
// console.log, alert 등의 함수들은 내장함수라고 한다.

// 합수 정의
function sayHello(name, age){
  console.log("Hello!",name, "you have", age, "years of age.");
}
sayHello("Kim",15);

console.log("Hi!");

// more Functions
// sexy String 백틱 ``
// return 값을 console.log로 출력
function sexyHello(name, age){
  return(`Hello ${name} you are ${age} years old`);
}
sexyHello("Kim",15);

const greetKim = sexyHello("kim",15)

console.log(greetKim);

// 계산기 객체 생성
// 곱하기 나누기 빼기 제곱 마이너스
const calculator={
  plus: function(a,b){
    return a+b;
  },
  minus: function(a,b){
    return a-b;
  },
  mul: function(a,b){
    return a*b;
  },
  div: function(a,b){
    return a/b;
  },
  squared: function(a,b){
    return a**b;
  }
}

console.log(calculator.plus(5,5));
console.log(calculator.minus(5,5));
console.log(calculator.mul(5,5));
console.log(calculator.div(5,5));
console.log(calculator.squared(5,5));

// JS DOM Functions
// id와 JS 연동
const title = document.getElementById("title"); // id가 title인 HTML요소를 나타냄

console.log(title);

//HTML태그를 객체로 변환

title.innerHTML = "Hi! From JS"; // id가 title인 태그의 내용 변경

// Modifying the DOM with JS
// HTML을 DOM 객체로 바꿀 수 있다.
console.dir(title); // 내가 할 수 있는 것들(이벤트)
title.style.color = 'gray' // 객체를 변경하듯이 JS로 html 수정 가능
document.title = "I own you now!";

document.querySelector("#title"); // 노드의 첫번째 자식을 반환

//Events and event handlers

// handleResize라는 함수를 필요할 때 호출
// handleResize()는 바로 호출
function handleClick(){
  title.style.color = 'blue';
}

title.addEventListener("click", handleClick); // window크기가 변경되면 함수 호출

//If, else, and, or
if(10 === "10"){ // =3개사용
  console.log('hi');
}else if("10" === "10"){
  console.log('lalala');
}else{
  console.log("ho");
}
// and
if(20>5 && "nico" === "nico"){
  console.log("YES");
}else{
  console.log("NO");
}
// or
if(20>5 || "nico" === "nicolas"){
  console.log("YES");
}else{
  console.log("NO");
}

// 유저에게 술을 마실 수 있는지 체크하기
//prompt("Ask something to user"); //겁나 오래된 JS
// prompt로 나이를 입력받고 console로 출력
const age = prompt("How old are you");

if(age >= 18 && age <= 21){
  console.log("you can drink but you should not");
}else if (age > 21) {
  console.log("go ahead")
}else{
  console.log("you can't");
}
