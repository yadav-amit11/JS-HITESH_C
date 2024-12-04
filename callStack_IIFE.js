// immediately invoked function expression
//named iife
(function myFunc22(){
    console.log('IIFE DEMO 1');
    
})(); // IIFE CALL

// example 2

((name)=>{
    console.log(`connected to user ${name}`)
})("amit")
/*
1.JS creates Global excution context 
2.Next it creates memory phase
3.Memory phase - In this phase,the variables are set to undefined 
until the execution phase(next phase) and the functions are set to their definitions.
4.Next it creates the execution phase
5.Execution phase - In this phase,the variables are initialsed to given values and 
when the function s are called,it creates a memory phase and execution phase for the function 
just like the main one.
  */