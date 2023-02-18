// 절대값
const num1 = -999;
console.log(Math.abs(num1)); // 999

// 최대, 최소값 구하기
console.log(Math.min(1, 2, 3, 4, -6, 10, -77, 1000)); // -77
console.log(Math.max(1, 2, 3, 4, -6, 10, -77, 1000)); // 1000

const numArr = [1, 2, 3, -5, 10, 13, -77, 1000];
console.log(Math.min(numArr)); // NaN
console.log(numArr); // [1, 2, 3, -5, 10, 13, -77, 1000]
console.log(...numArr); // 1 2 3 -5 10 13 -77 1000
console.log(Math.min(...numArr)); // ... (전개연산자) 는 배열의 구조를 해체하고 각각의 값을 뿌려준다 // -77
console.log(Math.max(...numArr)); // 1000

// 소수점 관리
const num3 = 3.14;
console.log(Math.round(num3)); // 반올림
console.log(Math.floor(num3)); // 버림
console.log(Math.ceil(num3)); // 올림

// 랜덤
console.log((Math.random() * 11) + 1);
