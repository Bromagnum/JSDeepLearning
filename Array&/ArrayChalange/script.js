// chalange 1

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "John@gmail.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "Jane@gmail.com",
    phone: "222-222-2222",
    age: 25,
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "Bob@gmail.com",
    phone: "333-333-3333",
    age: 45,
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "Sara@gmail.com",
    phone: "444-444-4444",
    age: 19,
  },
  {
    firstName: "Jose",
    lastName: "Koe",
    email: "Jose@gmail.com",
    phone: "555-555-5555",
    age: 23,
  },
];

const youngPeople = people
  .map((youngPeople) => {
    return {
      name: youngPeople.firstName + " " + youngPeople.lastName,
      email: youngPeople.email,
      age: youngPeople.age,
    };
  })
  .filter((youngAge) => {
    return youngAge.age <= 25;
  });

console.log(youngPeople);

// Chalange 2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((num) => num >= 0)
  .reduce((acc, num) => acc + num, 0);

console.log(positiveSum);

// Chalange 3

const words = ["coder", "programmer", "developer"];

const capitalizedWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1);
});

console.log(capitalizedWords);
