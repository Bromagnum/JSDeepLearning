// alert("Hello")
// console.log(innerWidth);

const x = 100;
console.log(x, "in global");

function run() {
  console.log(innerHeight);
  console.log(x, "in function");
}
run();

// Func scope

function add() {
  const y = 50;
  console.log(y);
}

add();

// Block Scope
const z = 100;
if (true) {
  const d = 200;
  console.log(z + d);
}

// block dışı kullanılamaz
// console.log(d+z);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// block dışı çalışmaz
// console.log(i);


// var la oluştrurulanlar block dışarda kullanılabilir.
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
// console.log(c);