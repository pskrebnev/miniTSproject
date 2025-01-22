interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

class Vehicle implements Colorful, Printable {
  constructor(public color: string, public brand: string) {
    console.log("Vehicle constructor called");
    console.log("Color: " + this.color);
  }

  print(): void {
    console.log(`The color is ${this.color} -> ${this.brand}`);
  }
}

class Cardigan implements Colorful {
  constructor(public color: string) {}
}

interface Printable {
  print(): void;
}

const vehicle = new Vehicle("red", "BMW");
vehicle.print();

abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle2 extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

const circle = new Circle2(5, "red");
circle.render();

abstract class EmployeeM {
  constructor(public firstName: string, public lastName: string) {}
  abstract getpay(): number;
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  }
}

class FullTimeEmployeeM extends EmployeeM {
  constructor(
    public firstName: string,
    public lastName: string,
    private salary: number
  ) {
    super(firstName, lastName);
  }

  getpay(): number {
    return this.salary;
  }
}

const emp = new FullTimeEmployeeM("John", "Doe", 50000);
console.log(`${emp.getpay()} -> ${emp.firstName}`);
