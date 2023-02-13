const hyundai = new ConstructorCar("Hyundai", "orange");
// const benz = new Car("benz", "white");
// const bmw = new Car("bmw", "black");

console.log(hyundai);
hyundai.drive();
// benz.drive();
// bmw.drive();

//생성자 함수 버전
function ConstructorCar(brand, color) {
  this.brand = brand;
  this.color = color;
  this.drive = () => {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
  };
}

// 클래스 버전
class ClassCar {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
  }
}

const benz = new ClassCar("benz", "white");
console.log(benz);
benz.drive();
