// IIFE => Immediately Invoked Function Expressions

(function () {
  const user = "john";
  console.log(user);

  const hello = () => console.log("Hello");
  hello();
})();


(function (name){
    console.log(`Hello ${name}`);
})("shawn")

// (function hello(){
//     console.log("Hello");
// })()