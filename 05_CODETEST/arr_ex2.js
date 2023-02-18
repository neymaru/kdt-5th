const fruits3 = ["Apple", "Banana", "Cherry"];
const findResult = fruits3.find((item) => {
  return /^A/.test(item); // A로 시작하는지 검사하는 정규식
});

console.log(findResult);

const findindexresult = fruits3.findIndex((item) => /^B/.test(item));

console.log(findindexresult);

const numbers5 = [1, 2, 3, 4, 5];
const sumResult = numbers5.reduce(function (acc, item, index, og) {
  return (acc += item);
}, 19);
console.log(sumResult);

const numbers6 = [2, -5, -123, -5480, 24, 0, -69, 349, 3];
const resultReduce = numbers6.reduce(
  (acc, item) => {
    if (item < 0) acc[0] += 1;
    else acc[1] += 1;

    return acc;
  },
  [0, 0]
);

console.log(resultReduce);
