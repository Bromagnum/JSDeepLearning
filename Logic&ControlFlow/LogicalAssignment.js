/// ||= assigns the right side value only if the left is a falsy value

//Long way
let a = false;

if (!a) {
  a = 10;
}

// short way

a = a || 10;

a ||= 10;

console.log(a);

// &&= asiigns the right side value only if the left is a thurty calue

let b = 20;

if (b) {
  b = 20;
}

b = b && 20;
b &&= 20;

console.log(b);

// ??= assigns the right side value only if the left is null or undefined

let d = null;

if (d === null || d === undefined) {
  d = 20;
}

d = d ?? 20;
d ??= 20;
console.log(d);
