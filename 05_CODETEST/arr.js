const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

// const fruitsObjArr = fruits.map(function (item, index, origin) {
//   console.log("item", item);
//   console.log("index", index);
//   console.log("origin", origin); // 원본 배열은 이렇게 생겼다
// });

// 이거와 같다
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
//   console.log(i);
//   console.log(fruits);
// }

const fruitsObjArr = fruits.map((item, index) => {
  return {
    // 배열로 리턴
    id: index,
    name: item,
  };
});

console.log(fruitsObjArr);
console.log(fruits);

const nums = [3, 6, 9, 12, 15, 18, 21];
const divideArr = nums.map((item, index) => item / 3);

console.log(divideArr);

const nums2 = [1, 2, 3, 4, 5, 6];
// const multipleNums = nums2.map(function (item) {
//   return item * 4;
// });

const multipleNums = nums2.map((item) => item * 4);

console.log(multipleNums);

// filter ----------------------------------------------------------------------
const numbers2 = [1, 2, 3, 4, 5, 6];
// const filterArr = numbers2.filter(function (item, index, og) {
//   return item > 3;
// });

const filterArr = numbers2.filter((item) => item > 3);

console.log(filterArr);

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const resultArr = words.filter((item) => item.length > 6);

console.log(resultArr);
// ----------------------------------------------------------------------

// include ----------------------------------------------------------------------
const numbers4 = [1,2,3,4,5,6];



