// Write a function that checks whether a string is empty or not

function isBlank(str) {
  // return string.length === 0;
  // return !!str === false;
  return str ? true : false
}

console.log(isBlank("mars"));
console.log(isBlank(" "));
console.log(isBlank(""));
