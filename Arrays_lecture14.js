//arrays
const myarr=[1,2,3,4]
console.log(myarr);
myarr.push(5);
console.log(myarr);
const arr2=[5,6,7]
const newarr=myarr.join() // converts array to string
console.log(newarr);
    //SLICE vs SPLCE
let array = [1, 2, 3, 4, 5];
let newArray = array.slice(1, 3);

console.log(newArray);  // Output: [2, 3]
console.log(array);     // Output: [1, 2, 3, 4, 5] (original array is unchanged)

let array = [1, 2, 3, 4, 5];
let removed = array.splice(1, 2); // Remove 2 elements starting from index 1

console.log(removed);  // Output: [2, 3] (removed elements)
console.log(array);    // Output: [1, 4, 5] (original array is modified)





