function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showInfo = function () {
    console.log(`이름은 ${this.name}이고 성별은 ${this.gender} 입니다`);
  };
}

let user1 = new Kdt("김성현", "M");
let user2 = new Kdt("백진솔", "F");
let user3 = new Kdt("윤제", "M");
let user4 = new Kdt("송민선", "F");
let user5 = new Kdt("송수빈", "F");

user1.showInfo();
user2.showInfo();
user3.showInfo();
user4.showInfo();
user5.showInfo();
