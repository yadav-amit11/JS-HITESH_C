// Primitive data types :
// bool, null-> means empty not zero,String,Number,undefined,Symbol,BigInt

const Id=Symbol('123')
const AnotherID=Symbol('123')
console.log(Id == AnotherID); // it will give false as an output

//Non Primitive (or Refernce)
// Arrays,objects and functions 
const myArray=["apple","cat"]
 let myObj={
    name:Amir,
    age: 22
 }

 const myFunc = function() {
    console.log("hello");
};
/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type 
explicitly, and the type checking is done at compile-time, before the code is executed
*/
//                    -----------------------------
/*
    Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/