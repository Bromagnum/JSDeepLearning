// Object Literal
let x;
const person = {
  name: "John",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 main street",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music","sports"]
};

x = person.name;
x = person["age"];

x = person.address.state
x = person.hobbies[0]

person.name ="jane Done"
person["isAdmin"] = false;

delete person.age;

person.hasChildren = true


person.greet = function (){
  console.log("hello bitches my name is Dalga");
}
// person.greet()

// x = person
// console.log(x);
