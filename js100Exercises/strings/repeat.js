// Implement a function repeat that repeats an input string a given number of times,
// as shown in the example below; without using the pre-defined string method
// String.prototype.repeat().

function repeat(num, str) {
  newStr = "";
  for (i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(repeat(3, "ha"));
