// Scope level and mini hoisting in javascript.

/*The scope is the current context
 of execution in which values and expressions are "visible" or can be referenced */

/*
    kinds of scopes:
Global scope: The default scope for all code running in script mode.
Module scope: The scope for code running in module mode.
Function scope: The scope created with a function.
*/
/*
    function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}
console.log(x); // Causes error

*/
const x = "declared outside function";

exampleFunction();
function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}
console.log("Outside function");
console.log(x);
//Blocks only scope let and const declarations, but not var declarations