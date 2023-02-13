// 화살표 함수
let sayHello = () => {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
};

// 함수 표현식
let sayHallo = function () {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
};

// 객체 생성
const boy = {
  name: "mike",
  sayHello,
};

const girl = {
  name: "jane",
  sayHallo,
};
ㅂㅂ;
boy.sayHello();
girl.sayHallo();
