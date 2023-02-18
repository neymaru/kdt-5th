const fruits = ["사과", "바나나", "수박", "딸기"];
console.log(fruits);
console.log(...fruits);

// function conlog(a, b, ...c) {
//   // c가 나머지 숫자를 배열로 받는다.
//   console.log(a, b, c);
// }

function conlog(...rest) {
  rest.map((item) => console.log(item));
}

conlog(fruits[0], fruits[1], fruits[2]);
conlog(...fruits);

const str = "apple";
// str.map((item) => console.log(item)); --> 에러 : 문자열에는 map 이 없다
const strToArr = [...str];
console.log(strToArr);

const strToArr2 = str.split("");
console.log(strToArr2);
