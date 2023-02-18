let nums = [-1.23, 13, 14.52, -33.53, 30];

const minNum = Math.floor(Math.min(...nums));
const maxNum = Math.floor(Math.max(...nums));
const randNum = Math.floor(Math.random() * 101); // 100조 분의 1 의 확률로 101 뜸 100.9 입력해도 됨

console.log("가장 작은 수 :", minNum);
console.log("가장 작은 수 :", maxNum);

let sum = 0;
let avg = 0;
for (let i = 0; i < nums.length; i++) {
  sum += Math.abs(nums[i]);
}
avg = sum / nums.length;
console.log("절대값의 평균 : ", avg);
console.log("0~100 중 랜덤 :", randNum);
