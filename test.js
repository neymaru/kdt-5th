const student1 = new Students("홍길동", "JavaScript");
student1.study();

class Students {
  constructor(name, major) {
    this.name = name;
    this.major = major;
  }
  study() {
    console.log(`${this.name}이 ${this.major}를 시작합니다.`);
  }
}
