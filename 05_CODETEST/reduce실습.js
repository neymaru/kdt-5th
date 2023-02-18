let arr = [];

for (let i = 1; i < 101; i++) {
  arr.push(i);
}

let sum = arr.reduce((acc, num) => (acc += num), 0);

console.log(arr);
console.log("합산 : ", sum);
