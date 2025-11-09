//string
const firstName = "Sara";

//Number
const age = 30;
const temp = 98.9;

//boolean

const hasKid =true

//null

const aptNumber = null

//Undifined
let score;

// Symbol
const id = Symbol("id")

//BigInt
const n =900132103912039n;

// reference types

const numbers = [1,2,3,4,5]

const person = {
    name:"Dalga",
    lasnName:"Kürek"
}

function sayHllo(){
    console.log("hello");
}

const outPut = sayHllo;
/*
primitve types: stored directly in the "Stack",where its accessed from

reference type:stored in the heap and accessed by reference


*/
console.log(outPut, typeof outPut);
