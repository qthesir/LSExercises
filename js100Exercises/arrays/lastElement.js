// Write a function that returns the last element of an input array

function last(array) {
  return array[array.length - 1]; // the reason I couldn't do the - 1 with slice is because slice omits the last element
}

console.log(last(["Earth", "Moon", "Mars"])); // 'Mars')
