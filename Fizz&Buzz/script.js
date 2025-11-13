// Fizz & Buzz

/*
-Print numbers from 1 to 100

-for multiples of three print "Fizz"

-for multiples of five "Buzz"

-for multipes 3&5 print "FizzBuzz"

*/

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(`${i}`);
  }
}
