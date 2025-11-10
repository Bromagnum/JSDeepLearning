let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

// Concat = birleştirmek

x = fruits.concat(berries);

//spread operator  (...) => arrayleri birleştirir

x = [...fruits, ...berries];

// Flatten arrays => arrayin içindeki nested arrayleri ana arrayle birleştirir

const arr = [1, 2, [3, 4], 5, [6, 7], 8];

x = arr.flat();

// Static Methods on array Objects

x = Array.isArray(fruits); // Array olup olmadığını kontrol eder boolean

x = Array.from("12345");

const a = 1;
const b = 2;
const c = 3;
// array e dönüştürür Array.of()
x = Array.of(a, b, c);

// console.log(x);

// chalange 1

const arr1 = [1, 2, 3, 4, 5];

//result = [6,5,4,3,2,1,0]

let y;

y = arr1.push(6);

y = arr1.unshift(0);

y = arr1.reverse();

y = arr1;
// console.log(y);

//chalange 2
// res =>  [1,2,3,4,5,6,7,8,9,10]

const arr2 = [1, 2, 3, 4, 5];
const arr3 = [5, 6, 7, 8, 9, 10];

// solution 1
arr2.splice(4, 1);

let z;

z = arr2.concat(arr3);

//solution 2

const arr4 = arr2.slice(0,4).concat(arr3)

console.log(arr4);
