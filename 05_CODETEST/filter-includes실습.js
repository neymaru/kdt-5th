let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// 방법1
let sameArr = fruits1.filter((item) => fruits2.includes(item)); // 여집합
let differArr = fruits1.filter((item) => !fruits2.includes(item)); // 교집합

const sameArr2 = [];
const diffetArr2 = [];

// 방법2
fruits1.map((item) => {
  if (fruits2.includes(item)) sameArr2.push(item);
  else diffetArr2.push(item);
});
console.log(sameArr);
console.log(differArr);
