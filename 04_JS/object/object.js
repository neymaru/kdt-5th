let sh = {
  name: "김성현",
  age: 33,
};

// 접근
console.log(sh.name);
console.log(sh["age"]);

// 추가
sh.gender = "M";
sh["head"] = "big";

// 삭제
delete sh.head;
delete sh["gender"];

console.log(sh);
