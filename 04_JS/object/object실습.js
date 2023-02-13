let pororo = {
  name: "뽀로로",
  age: 7,
  height: 110,
  weight: 30,
  running() {
    console.log("뽀로로가 뜁니다.");
  },
  say: function () {
    console.log("뽀로로는 귀엽습니다.");
  },
};

// pororo.gender = "M";
// console.log(pororo);

// pororo["height"] = 150;
// console.log(pororo);

// delete pororo.gender;
// console.log(pororo);

// console.log("name" in pororo); // true
// console.log("height" in pororo); //  false
// console.log(pororo.haircolor); // undefined

// for (let key in pororo) {
//   console.log(key);
//   console.log(pororo[key]);
//   console.log(pororo.key); // key라는 변수가 없어서 undefined
//   console.log("");
// }

// for (let key in pororo) {
//   console.log(`key는 ${key}, key 안의 값은 ${pororo[key]}입니다`);
// }

pororo.running();
pororo.say();
