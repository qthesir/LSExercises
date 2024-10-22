// Predict the output of the below code. When you run the code, do you see what you 
// expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); 

// The arrays will not be equal. I cannot quite remember why, but JavaScript has issues
// comparing arrays. Perhaps because it is comparing the reference to the object in memory,
// the reference, rather than the actual object. Or, perhaps because each objects memory
// value is slightly different. 

// Turns out that it is not because the memory value is different, but it is because
// the reference is being compared, rather than the value. It is seeing if they
// reference the same place. So an object will return true when compared if you assign
// array2 = array1. 

