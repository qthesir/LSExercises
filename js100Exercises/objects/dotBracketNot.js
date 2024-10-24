// Before running any code, determine what difference there will be in the output of the 
// two code snippets below (if any).

// Code snippet 1 
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

// Code snippet 2
let ocean2 = {};
let prefix2 = 'Indian';

ocean2[prefix2] = 'Pacific';

console.log(ocean2); // ?

// The first code snippet is going to create a property on the ocean object called prefix 
// with the value pacific, whereas the second code snippet will create a property on the ocean
// object called 'Indian' with the value pacific. This is because the prefix variable in 
// code snippet 2 is evaluating in the brackets (in other words, javascript is fetching 
// the value of the variable in memory), whereas it is not with the dot notation 
// in code snippet 1.