// Create a function removeLastChar that takes a string as an argument, and returns the
// string without the last character.

const removeLastChar = (string) => string.slice(0, string.length - 1);

const removeLastChar2 = (string) => {
  let newStr = "";
  for (let i = 0; i < string.length - 1; i++) {
    newStr += string[i];
  }
  return newStr;
};

console.log(removeLastChar2("ciao!")); // 'ciao'
console.log(removeLastChar2("hello")); // 'hell'

// [...string] is shorthand to create an array. Works differently than Array(string), because 
// Array(string) returns the whole string as an array. Different delimiter I guess. 