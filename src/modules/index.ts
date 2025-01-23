import { add, sample as randomSample, pi } from "./utils.js";
import User, { userHelper } from "./User.js";

greet("world");

const sample = 12234233;
console.log(randomSample([12, 3, 34]));
console.log(add(1, 2));
console.log(pi);

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

const myGreeting = (name: string) => {
  console.log(`Hello, world! with ${name}`);
};

myGreeting("Heya!");
