// function 삼각형넓이(밑변, 높이) {
//   console.log(`삼각형의 넓이는 ${(밑변 * 높이) / 2}`);
// }
// 삼각형넓이(10, 20);

// function 원의넓이(반지름) {
//   console.log(`삼각형의 넓이는 ${반지름 * 반지름 * 3.14}`);
// }
// 원의넓이(10);

// function 빗변길이(밑변, 높이) {
//   console.log(`빗변의 길이는 ${Math.sqrt(밑변 ** 2 + 높이 ** 2)}`);
// }
// 빗변길이(3, 4);

console.log(triangleArea(2, 5));
console.log(circleArea());
console.log(pytha(3, 4));

// function triangleArea(num1, num2) {
//   return num1 * num2 / 2;
// };

let triangleArea = (num1, num2) => {
  return (num1 * num2) / 2;
};

// let circleArea = function (radius = 3) {
//   return 3.14 * radius * radius;
// };

let circleArea = (radius = 3) => {
  return 3.14 * radius * radius;
};

// a^2 + b^2 = c^2 -> c = root(a^2 + b^2)
// function pytha(num1, num2) {
//   return Math.sqrt(num1 ** 2 + num2 ** 2);
// };

let pytha = (num1, num2) => {
  return Math.sqrt(num1 ** 2 + num2 ** 2);
};
