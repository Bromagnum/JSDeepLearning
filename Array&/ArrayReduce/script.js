// Array reduce()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Uzun versiyon

// const sum = numbers.reduce(function (accumulator, currentvalue) {
//   return accumulator + currentvalue;
// },0);

// Kısa versiyon

const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);

const cart = [
  { id: 1, name: "Product 1", price: 130 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 175 },
];

const total = cart.reduce((acc, curr) => {
  return acc + curr.price;
}, 0);

console.log(total);
