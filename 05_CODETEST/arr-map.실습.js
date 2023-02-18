let arr = [];
for (let i = 1; i < 101; i++) {
  arr.push(i);
}

console.log("배열 출력 : ", arr);

let sum = 0;
// 방법1
// arr.map((item) => (sum += item));

// 방법2
const mapArr = arr.map((item) => (sum += item));

console.log("배열의 합산 : ", sum);

const str = "apple";

const obj = {
  nba: "lebron",
  football: "messi",
  baseball: "TMT",
};

// 객체일때는 in만 가능 (of X)
for (item in obj) {
  console.log(obj[item]);
}

// 실제 값
for (letter of str) {
  console.log(letter);
}

// index 값
for (letter in str) {
  console.log(letter);
}
