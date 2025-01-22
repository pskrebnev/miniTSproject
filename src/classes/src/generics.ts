const nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const inputElem = document.querySelector<HTMLInputElement>("#todoinput")!;
console.dir(inputElem);
console.dir(inputElem.value);

// if (inputElem) {
//   inputElem.value = "New va-va-value";
// }
inputElem.value = "New News";

const btn = document.querySelector<HTMLButtonElement>("button.btn");
console.dir(btn);

function genericIdentity<T>(item: T): T {
  return item;
}

console.log(genericIdentity<string>("Hello"));
console.log(genericIdentity<number>(123));

interface Cat {
  name: string;
  age: number;
}

const cat1 = genericIdentity<Cat>({ name: "Kitty", age: 2 });
console.log(cat1.age);
console.log(cat1.name);

function getRandomElement<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

console.log(getRandomElement<string>(["a", "b", "F"]));

console.log(getRandomElement<number>([1, 4, 1, 8, 3, 55, 23, 6]));
console.log(getRandomElement(["new", "one", "two"]));

function mergeEl<T extends object, U extends object>(obj1: T[], obj2: U) {
  return {
    ...obj1,
    ...obj2,
  };
}
const mergedObj = mergeEl([{ name: "John" }], { age: 30 });

console.log(mergedObj);

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}
console.log(printDoubleLength("Hello"));
console.log(printDoubleLength([4]));

// default value
function makeEmptyArray<T = number>(): T[] {
  return [];
}
const strings = makeEmptyArray<string>();
console.log(strings);

// Generic classes
interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  duration: number;
}

class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}
