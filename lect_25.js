// ==  and  ===
if(2=="2"){
    // compares only values not types.
    console.log("True");
}
if(2==="2"){
    // does the type checking
    console.log("true");
}else{
    console.log("false");
}

// truthy and falsy
 
// falsy values : false,0,null,"",NaN,undefined 
// truthy values : true," ", [] , {} , '0','false',function(){} 

// nulleish colaceing operator ?? 

/*

The nullish coalescing operator (??) in JavaScript is used to provide a default value when 
the left-hand operand is either null or undefined. It returns the right-hand operand if the 
left-hand one is null or undefined; otherwise, it returns the left-hand operand.

let result = value1 ?? value2;
If value1 is null or undefined, the result will be value2.
If value1 is anything else (including 0, false, or an empty string), the result will be value1.

*/
