let x;

const name = "John";
const age = 30;

x = "Hello biteches " + name + "and I am" + age;

// Template Literals

x = `Hello, my name is ${name} and I am ${age} old`;

// String Properties and Methods

const s = "Hello World";

x = s.length;
// Access value by key

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0); // => x = s[0]

x = s.indexOf("d");

x = s.substring(0, 4); // => Hell
x = s.substring(7); // => orld

x = s.slice(-11);

// trim() string içindeki boşluğu trimler
x = "      Hello World";
x = s.trim();

x = s.replace("World", "John");

x = s.includes("Hello") // true döner
x = s.includes("Helli") // false döner

x = s.valueOf();

x = s.split("");

// console.log(x);
// example : developer capitalize the first letter

const myString = "developer"

//  const myNewString = myString.replace("developer","Developer")

// Solution 1 
myNewString = myString.charAt(0)


 console.log(myNewString);

