class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * 3.14;
  }
}

let rectangle = new Rectangle(3, 4);
console.log(rectangle.getArea());

let triangle = new Triangle(3, 4);
console.log(triangle.getArea());

let circle = new Circle(3);
console.log(circle.getArea());
