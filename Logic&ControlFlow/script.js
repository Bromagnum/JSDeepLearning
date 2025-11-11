if (true) {
  console.log("This will run ");
}

const x = 10;
const y = 5;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
}

if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}

const d = new Date(10, 30, 2022, 19, 0, 0);

const hour = d.getHours();

console.log(hour);

if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Good Afternoon ");
} else {
  console.log("Good Night");
}

// Nestid if

if (hour < 12) {
  console.log("Good Morning");

  if (hour === 6) {
    console.log("Wake Uo Bitches");
  }
} else if (hour < 18) {
  console.log("Good Afternoon ");
} else {
  console.log("Good Night");
  if (hour >= 20) {
    console.log("You should sleep fucker");
  }
}
// Switch

const b = new Date(2025, 1, 10, 19, 0, 0);

const month = b.getMonth();
const hours = b.getHours();

switch (month) {
  case 1:
    console.log("Its January");
    break;
  case 2:
    console.log("its february");
    break;
  case 3:
    console.log("Its March");
    break;
  default:
    console.log("its not jan,feb,march ");
}

switch (true) {
  case hours < 12:
    console.log("Good Morning");
    break;
  case hours < 18:
    console.log("Good afternoon");
    break;
  default:
    console.log("good night");
}

//Checking for empty arrays

const posts = ["One post"];

if(posts.length > 0){
console.log("List the posts");
}else{
    console.log("There is no posts");
}

// Checking for empty  objects

const user = {};

if(Object.keys(user).length > 0){
console.log("List users");
}else{
    console.log("No users");
}

