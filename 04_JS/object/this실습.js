let pororo = {
  name: "뽀로로",
  age: 7,
  height: 150,
  showName() {
    console.log(`제 이름은 ${this.name} 입니다`);
  },
  showHeight,
};

pororo.showName();

function showHeight() {
  console.log(`제 키는 ${this.height} 입니다`);
}

pororo.showHeight();
