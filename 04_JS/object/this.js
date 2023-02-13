// const user = {
//   name: "손흥민",
//   sayHello: function () {
//     console.log(`안녕하세요 ${user.name}님(user)`);
//     console.log(`안녕하세요 ${this.name}님(this)`);
//   },
// };

// user.sayHello();

// this 활용하기
function sayHello() {
  console.log(`Hello, I'm ${this.name}`);
}

const boy = {
  name: "mike",
  sayHello,
};

const girl = {
  name: "jane",
  sayHello,
};

boy.sayHello();
girl.sayHello();
sayHello();
