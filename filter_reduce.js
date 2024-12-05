// FILTER METHOD (MDN Docs  )
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);



// ---------------------------------------------------------------------------
// using filter method on functions.
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
function isBigEnough(value) {
    return value >= 10;
  }
  const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]
  console.log(filtered);
  
  // returns a shallow copy.
//The filter() method is an iterative method. It calls a provided callbackFn 
// function once for each element in an array, and constructs a new array of all the 
// values for which callbackFn returns a truthy value.
//Array elements which do not pass the callbackFn test are not included in the new array. 
  
