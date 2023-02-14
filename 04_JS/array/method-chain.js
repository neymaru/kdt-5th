let helloTest = "H-e-l-l-o";

let helloTestArr = helloTest.split("-");
console.log(helloTestArr);

let reverseHelloTestArr = helloTestArr.reverse();
console.log(reverseHelloTestArr);

let resultStr = reverseHelloTestArr.join("");
console.log(resultStr);

let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);

const obj = {
  arr: ["a", "b", "c"],
  number: 10,
};

// 숫자에는 reverse 함수가 없음
// let testStr = obj.number.reverse().join("");
// console.log(testStr);

// ?는 에러는 띄우지 않고 undefined 를 리턴한다.
let testStr = obj.str?.reverse().join("");
console.log(testStr);
