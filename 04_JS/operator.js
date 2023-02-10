//나머지 연산자
let num = Math.floor(Math.random() * 10); // 0부터 9까지 랜덤
// console.log(num % 4);
console.log(num);

//거듭제곱
console.log(2 ** 3);

// 루트
console.log(Math.sqrt(9));

// 연산자 줄여 쓰기
let num2 = 5;
num2 = num2 + 5;
console.log(num2);

let num3 = 5;
num3 *= 5;
console.log(num3);

// 증가 감소 연산자
let num4 = 10;
console.log((num4 += 1));
console.log(num4);

// 비교연산자
let a = 10;
let b = "10";

console.log("비교 연산자", a === b);

// NOT 연산자
let otherAge = 16;
let isAdult = otherAge > 19;

if (!isAdult) {
  console.log("돌아가");
} else {
  console.log("통과");
}

// 다중 비교
// 여성이고, 이름이 Jane 이거나 성인이면 통과
let gender = "M";
let name = "Tom";
let isAdultTom = true;

if (gender === "F" && (name === "Jane" || isAdultTom === true)) {
  console.log("통과");
} else {
  console.log("돌아가");
}
