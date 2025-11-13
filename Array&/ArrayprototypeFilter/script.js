// Array.prototype.filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// long version

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// short version
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// Same with foreach
// let evenNumbers = [];

// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// console.log(evenNumbers);

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

// Get only retail companies

const retailCompanies = companies.filter((comp) => comp.category === "Retail");
console.log(retailCompanies);

// Get copm started : 1980 and ended  or before 2005

const companiesGET = companies.filter(
  (comp) => comp.start >= 1980 && comp.end <= 2005
);
console.log(companiesGET);

// Get companies that lasted 10 years or more

const longLastComp = companies.filter((comp) => comp.end - comp.start >= 10);
console.log(longLastComp);