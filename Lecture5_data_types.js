const hasGlobalScope = "amit"; // or any other initial value
console.log(hasGlobalScope);
console.log(typeof null); // object type of null is object
console.log(typeof undefined); // object type  of undefined in undefined
//-------------------
// lecture 8
//postfix and prefix operators
let x = 7;
const y = x++;
/*
If used postfix, with operator after operand (for example, x++), 
the increment operator increments and returns the value before incrementing.
*/
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
let a = 3;
const b = ++a;
/*
If used prefix, with operator before operand (for example, ++x), 
the increment operator increments and returns the value after incrementing.
*/
console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

