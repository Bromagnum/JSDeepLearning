// Array.map()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// Same with foreach

const doubleNumbers2 = [];

numbers.forEach((number) => {
  doubleNumbers2.push(number * 2);
});
console.log(doubleNumbers2);

const companies = [
  { name: "C1", category: "Finance", start: 1981, end: 2004 },
  { name: "C2", category: "Retail", start: 1992, end: 2008 },
  { name: "C3", category: "Auto", start: 1999, end: 2007 },
  { name: "C4", category: "Retail", start: 1989, end: 2010 },
  { name: "C5", category: "Technology", start: 2009, end: 2014 },
  { name: "C6", category: "Finance", start: 1987, end: 2010 },
  { name: "C7", category: "Auto", start: 1986, end: 1996 },
  { name: "C8", category: "Techno", start: 2011, end: 2016 },
  { name: "C9", category: "Retail", start: 1981, end: 1989 },
];

// Create an array of company names

const compNames = companies.map((comp) => comp.name);
console.log(compNames);

// Create an array with just company and categories

const companyInfo = companies.map((comp) => {
  return {
    name: comp.name,
    category: comp.category,
  };
});
console.log(companyInfo);

// Create an array of the length of each company in years

// string arrray

// const compLength = companies.map((comp) =>
//    `Company Name: ${name = comp.name} Years :${lengthInyears = comp.end - comp.start}`
// );

// object
const compLength = companies.map((comp) => {
  return {
    name: comp.name,
    length: comp.end - comp.start + " Years",
  };
});

console.log(compLength);

// Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

//Chaning different methods

const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);
