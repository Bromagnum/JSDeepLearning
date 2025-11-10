const firstName = "John";
const lastName = "Doe";
const age = 30;

const person1 = {
  firstName,
  lastName,
  age,
};

console.log(person1.age);

// Destructuring

const todo = {
  id: 1,
  title: "take out trash",
  user: {
    name: "John",
  },
};

const {
  id: todoId,
  title,
  user: { name },
} = todo;

console.log(todoId);

// Destructure arrays

const number = [23, 67, 33, 49,52];

// ...rest gerikalanı ayrı bir array içinde gösterir

const [first,second,...rest] = number

console.log(first,second,rest);
