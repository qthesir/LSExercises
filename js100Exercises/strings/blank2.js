// Change your isBlank function from the previous exercise to return true if the string
// is empty or only contains whitespace. For example:

function isBlank(str) {
  // return string.length === 0;
  if (!!str === false) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      return false;
    }
  }

  return true;
}

function isBlank2(str) {
  trimmedStr = str.trim();
  return !trimmedStr === true;
}

function isBlank3(str) {
  trimmedStr = str.trim();
  return trimmedStr.length === 0;
}

console.log(isBlank("mars"));
console.log(isBlank(" "));
console.log(isBlank(""));

console.log(isBlank2("mars"));
console.log(isBlank2(" "));
console.log(isBlank2(""));

console.log(isBlank3("mars"));
console.log(isBlank3(" "));
console.log(isBlank3(""));
