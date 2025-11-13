// Ternary Operator

const age = 17;

// using if statement

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can not vote");
}

// Using ternary operator

age >= 18 ? console.log("You can vote") : console.log("You can not vote ");

// Assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "you can vote" : "You cannot vote";
console.log(canVote2);

// Multiple statement

const auth = true;
// let redirect;

// Uzun versiyon

// if (auth) {
//   alert("Welcome to the dashboard");
//   redirect = "/dashboard";
// } else {
//   alert("Acces Denied");
//   redirect = "/login";
// }
// console.log(redirect);

//Ternary operator Multiple statement

// const redirect = auth
//   ? (alert("Welcome to the dashboard"), "/dashboard")
//   : (alert("Access Denied"), "/login");

//   console.log(redirect);


 // Kısa versiyonlar 
//   auth ? console.log("Welcome to dashboard"): null;

  auth && console.log("Welcome to the dashboard");