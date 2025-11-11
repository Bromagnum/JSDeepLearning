// Execution Context Phases
//Memory Creation Phase:
/*
1) Create the global object (browser=window, Node.js= global)
2)Create the "this" object and bind it to the global object
3)setup memory heap for storing variables and function references
4)Store function and variables in global execution context and set to "undifined"
*/
//Execution Phase

/*

1) execute code line by line 
2)Create a new execution context for each function call

*/

const x = 100;
const y = 50;

const getSum = (n1, n2) => {
  return n1 + n2;
};

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1,sum2);