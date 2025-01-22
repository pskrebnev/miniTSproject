function getRandomElementR<T>(items: T[]): T {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const getRandomEl = <T,>(items: T[]): T => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

function merge<T extends object, U extends object>(obj1: T[], obj2: U[]) {
  return {
    ...obj1,
    ...obj2,
  };
}

console.log(merge([{ name: "John" }], [{ age: 30 }]));
