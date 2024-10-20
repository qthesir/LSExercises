// Locate the documentation for the array built-in object on MDN.
// How can we access the element 'and' in the following array?

arr = ["fish", "and", "chips"];

element = arr[1];
element2 = arr.find((element) => element === "and");

console.log(element);
console.log(element2);
