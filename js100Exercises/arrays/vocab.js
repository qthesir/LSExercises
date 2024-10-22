// We've been given an array of vocabulary words grouped into sub-arrays by meaning.
// This is a two-dimensional array or a nested array. Write some code that iterates
// through the sub-arrays and logs each vocabulary word to the console.

let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

// vocabulary.forEach(subVocab => subVocab.forEach(word => console.log(word)));

vocabulary.reduce((sum, currentValue) => {
  console.log(currentValue);
  currentValue.reduce((innerSum, value) => {
    console.log(value);
    return innerSum;
  }, 0);
  return sum;
}, 0);

// for (let arr of vocabulary) {
//   for (let word of arr) {
//     console.log(word);
//   }
// }

// Expected output:
// happy
// cheerful
// merry
// etc...
