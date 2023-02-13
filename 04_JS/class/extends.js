// 클래스 선언

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  showSpec() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
  }
}

// 클래스 상속
class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  showSpec() {
    super.showSpec();
    console.log(`그리고 이 자동차는 ${this.fuel}의 힘으로 움직입니다.`);
  }
}

const hyundai = new Car("hyundai", "white");
hyundai.showSpec();

const tesla = new ElecCar("tesla", "red", "electric");
tesla.showSpec();

console.log(hyundai instanceof Car);
console.log(tesla instanceof Car);
