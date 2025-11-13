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
